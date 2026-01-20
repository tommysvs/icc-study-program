let studyProgramICC = null;

async function loadStudyProgramData() {
    try {
        const response = await fetch('./js/study-program-data.json');
        studyProgramICC = await response.json();
    } catch (error) {
        console.error('Error al cargar los datos del programa de estudio:', error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadStudyProgramData();
    if (studyProgramICC) {
        const programContainer = document.getElementById("programContainer");
        const studyProgramInstance = new StudyProgram(programContainer, studyProgramICC);
        studyProgramInstance.createUX();
    }
});

class StudyProgram {
    container = null;
    structure = null;
    nodes = null;
    constructor(container, programStructure) {
        this.container = container;
        this.structure = programStructure;
        this.nodes = {};
        this.container.classList.add("program-container");
        
        let totalCourses = 0;
        let approved = 0;
        let totalWithoutExtras = 0;
        let approvedWithoutExtras = 0;
        
        this.structure.blocks.forEach(block => {
            block.courses.forEach(course => {
                if (block.name !== "XIII" && block.name !== "SEM.") {
                    totalCourses++;
                    if (course.status === "Aprobado" || course.status === "Suficiencia") {
                        approved++;
                    }
                }
                
                if (block.name !== "CPG." && block.name !== "SEM." && block.name !== "XIII") {
                    totalWithoutExtras++;
                    if (course.status === "Aprobado" || course.status === "Suficiencia") {
                        approvedWithoutExtras++;
                    }
                }
            });
        });
        
        let titleElement = document.createElement("H3");
        titleElement.innerHTML = this.structure.title;
        this.container.appendChild(titleElement);
        
        document.getElementById("badgeApprovedCount").textContent = approved;
        document.getElementById("badgeRemainingCount").textContent = totalCourses - approved;
        document.getElementById("badgeTotalCount").textContent = totalCourses;
        document.getElementById("badgeProgramCount").textContent = `${approvedWithoutExtras}/${totalWithoutExtras}`;
        
        const percentage = Math.round((approvedWithoutExtras / totalWithoutExtras) * 100);
        document.getElementById("profilePercentage").textContent = `${percentage}%`;
        document.getElementById("profileProgressFill").style.width = `${percentage}%`;
        
        this.calculateAndDisplayGPAs();
        
        const statusIndicadores = document.createElement("div");
        statusIndicadores.classList.add("status-indicators");
        
        const status = [
            { name: "Aprobado", clase: "aprobado" },
            { name: "Reprobado", clase: "reprobado" },
            { name: "Cursando", clase: "cursando" },
            { name: "Pendiente", clase: "pendiente" }
        ];
        
        status.forEach(stat => {
            const indicador = document.createElement("div");
            indicador.classList.add("status-indicator", `status-indicator-${stat.clase}`);
            
            const colorBox = document.createElement("div");
            colorBox.classList.add("status-indicator-color");
            
            const label = document.createElement("span");
            label.textContent = stat.name;
            
            indicador.appendChild(colorBox);
            indicador.appendChild(label);
            statusIndicadores.appendChild(indicador);
        });
        
        this.container.appendChild(statusIndicadores);
    }

    createUX() {
        if (!this.structure) {
            throw Error("Es necesario establecer un plan de estudio JSON.");
        }
        if (!this.structure.blocks) {
            throw Error("El plan no tiene bloques.");
        }
        let blocksUX = this.structure.blocks.map(
            (block) => {
                const blockContainer = document.createElement("div");
                blockContainer.classList.add("block");
                
                const blockLabel = document.createElement("div");
                blockLabel.classList.add("block_label");
                
                if (block.name === "CPG." || block.name === "SEM.") {
                    blockLabel.classList.add("collapsible");
                    blockLabel.innerHTML = `<span class="toggle-icon">▼</span> ${block.name}`;
                } else {
                    blockLabel.innerHTML = block.name;
                }
                
                const coursesBlock = this.createCoursesUX(block.courses);
                
                if (block.name === "CPG." || block.name === "SEM.") {
                    coursesBlock.style.display = "none";
                    blockLabel.addEventListener("click", (e) => {
                        const isHidden = coursesBlock.style.display === "none";
                        coursesBlock.style.display = isHidden ? "flex" : "none";
                        blockLabel.classList.toggle("active");
                    });
                }
                
                blockContainer.appendChild(blockLabel);
                blockContainer.appendChild(coursesBlock);
                return blockContainer;
            }
        );
        blocksUX.forEach(element => {
            this.container.appendChild(element);
        });
    }

    createCoursesUX(courses) {
        const coursesBlock = document.createElement("div");
        coursesBlock.classList.add("block_courses");

        courses.forEach(
            (course) => {
                const classUX = document.createElement("div");
                classUX.classList.add("blockClass");

                switch (course.status) {
                    case "Aprobado":
                    case "Suficiencia":
                        classUX.classList.add("status-approved");
                        break;
                    case "Reprobado":
                        classUX.classList.add("status-failed");
                        break;
                    case "Pendiente":
                        classUX.classList.add("status-pending");
                        break;
                    case "Cursando":
                        classUX.classList.add("status-taking");
                        break;
                }

                const codLabel = document.createElement("span");
                const nameLabel = document.createElement("span");
                const creditLabel = document.createElement("span");
                codLabel.innerHTML = course.code;
                nameLabel.innerHTML = course.name;
                nameLabel.classList.add("course-name");
                creditLabel.innerHTML = course.credits;
                
                const headerContainer = document.createElement("div");
                headerContainer.classList.add("course-header");
                headerContainer.appendChild(codLabel);
                headerContainer.appendChild(creditLabel);
                
                classUX.appendChild(headerContainer);
                classUX.appendChild(nameLabel);
                
                if (course.grade !== undefined || course.year) {
                    const infoContainer = document.createElement("div");
                    infoContainer.classList.add("course-info-container");
                    
                    if (course.grade !== undefined) {
                        const gradeLabel = document.createElement("div");
                        gradeLabel.classList.add("course-grade");
                        gradeLabel.innerHTML = `${course.grade}%`;
                        infoContainer.appendChild(gradeLabel);
                    }
                    
                    if (course.year) {
                        const yearLabel = document.createElement("div");
                        yearLabel.classList.add("course-year");
                        yearLabel.innerHTML = course.year;
                        infoContainer.appendChild(yearLabel);
                    }
                    
                    classUX.appendChild(infoContainer);
                }
                
                if (!this.nodes[course.code]) {
                    this.nodes[course.code] = {
                        node: classUX,
                        requisites: [],
                        opening: []
                    }
                    course.requisites.forEach(r => {
                        this.nodes[course.code].requisites.push(this.nodes[r].node)
                        this.nodes[r].opening.push(this.nodes[course.code].node)
                    }
                    );
                }
                const currentNode  = this.nodes[course.code];
                classUX.addEventListener("mouseover", (e) => {
                    if (e.target.tagName.toUpperCase() !== 'SPAN') {
                        currentNode.requisites.forEach( n => n.classList.add("class_requisite"));
                        currentNode.opening.forEach( n => n.classList.add("class_opening"));
                    }
                });
                classUX.addEventListener("mouseleave", (e) => {
                    if (e.target.tagName.toUpperCase() !== 'SPAN') {
                        currentNode.requisites.forEach( n => n.classList.remove("class_requisite"));
                        currentNode.opening.forEach( n => n.classList.remove("class_opening"));
                    }
                });
                coursesBlock.appendChild(classUX);
            }
        );

        return coursesBlock;
    }

    calculateAndDisplayGPAs() {
        let allGrades = [];
        let blockGPAs = {};

        this.structure.blocks.forEach(block => {
            let blockGrades = [];
            let blockCredits = 0;

            block.courses.forEach(course => {
                if (block.name !== "XIII" && block.name !== "CPG." && block.name !== "SEM.") {
                    let coursesGrades = [];
                    
                    if (course.grade !== undefined) {
                        coursesGrades.push({
                            grade: course.grade,
                            credits: course.credits || 0
                        });
                    }
                    
                    if (course.gradeHistory && Array.isArray(course.gradeHistory)) {
                        course.gradeHistory.forEach(attempt => {
                            if (attempt.grade !== undefined) {
                                coursesGrades.push({
                                    grade: attempt.grade,
                                    credits: course.credits || 0
                                });
                            }
                        });
                    }
                    
                    coursesGrades.forEach(g => {
                        allGrades.push(g);
                        blockGrades.push(g);
                        blockCredits += g.credits;
                    });
                }
            });

            if (blockGrades.length > 0) {
                const blockGPA = (blockGrades.reduce((sum, g) => sum + g.grade, 0) / blockGrades.length).toFixed(2);
                blockGPAs[block.name] = blockGPA;
            }
        });

        let gpaGeneral = 0;
        if (allGrades.length > 0) {
            gpaGeneral = (allGrades.reduce((sum, g) => sum + g.grade, 0) / allGrades.length).toFixed(2);
        }

        document.getElementById("gpaGeneral").textContent = gpaGeneral + "%";
    }
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
        toggle.checked = isDarkMode;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
        toggle.checked = isDarkMode;
    }
});