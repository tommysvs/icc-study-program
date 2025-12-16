const studyProgramICC = {
    title: "Plan de estudio",
    blocks: [
        {
            name: "I",
            courses: [
                {
                    code: 'ES101',
                    name: "Español",
                    credits: 3,
                    requisites: [],
                    status: "Aprobado",
                },
                {
                    code: 'MT101',
                    name: "Matemáticas",
                    credits: 4,
                    requisites: [],
                    status: "Aprobado",
                },
                {
                    code: 'IF112',
                    name: "Introducción a las Ciencias de la Computación",
                    credits: 4,
                    requisites: [],
                    status: "Aprobado",
                },
                {
                    code: 'SC101',
                    name: "Sociología",
                    credits: 3,
                    requisites: [],
                    status: "Aprobado",
                },
                {
                    code: 'FI101',
                    name: "Filosofía",
                    credits: 3,
                    requisites: [],
                    status: "Aprobado",
                },
            ]
        },
        {
            name: "II",
            courses: [
                {
                    code: 'ES201',
                    name: "Expresión Oral y Escrita",
                    credits: 3,
                    requisites: ["ES101"],
                    status: "Aprobado",
                },
                {
                    code: 'MT201',
                    name: "Precálculo",
                    credits: 4,
                    requisites: ["MT101"],
                    status: "Aprobado",
                },
                {
                    code: 'IF200',
                    name: "Fundamentos y Lógica de Programación",
                    credits: 4,
                    requisites: ["IF112"],
                    status: "Aprobado",
                },
                {
                    code: 'HS101',
                    name: "Historia de Honduras",
                    credits: 3,
                    requisites: [],
                    status: "Aprobado",
                },
                {
                    code: 'CR201',
                    name: "El Hombre Frente a la Vida",
                    credits: 3,
                    requisites: ["FI101"],
                    status: "Aprobado",
                },
            ]
        },
        {
            name: "III",
            courses: [
                {
                    code: 'MT202',
                    name: "Estadística I",
                    credits: 4,
                    requisites: ["MT101"],
                    status: "Aprobado",
                },
                {
                    code: 'MT303',
                    name: "Cálculo I",
                    credits: 4,
                    requisites: ["MT201"],
                    status: "Aprobado",
                },
                {
                    code: 'IF214',
                    name: "Programación Estructurada I",
                    credits: 3,
                    requisites: ["IF200"],
                    status: "Aprobado",
                },
                {
                    code: 'IF213',
                    name: "Estructuras Discretas",
                    credits: 3,
                    requisites: ["IF200"],
                    status: "Aprobado",
                },
                {
                    code: 'IF394',
                    name: "Diseño Gráfico",
                    credits: 3,
                    requisites: [],
                    status: "Aprobado",
                },
            ]
        },
        {
            name: "IV",
            courses: [
                {
                    code: 'AD302',
                    name: "Métodos y Técnicas de Investigación",
                    credits: 3,
                    requisites: ["MT202"],
                    status: "Aprobado",
                },
                {
                    code: 'MT401',
                    name: "Cálculo II",
                    credits: 4,
                    requisites: ["MT303"],
                    status: "Pendiente",
                },
                {
                    code: 'IF301',
                    name: "Programación Estructurada II",
                    credits: 3,
                    requisites: ["IF214"],
                    status: "Aprobado",
                },
                {
                    code: 'FS201',
                    name: "Física I",
                    credits: 3,
                    requisites: ["MT101"],
                    status: "Aprobado",
                },
                {
                    code: 'EL101',
                    name: "Administración",
                    credits: 3,
                    requisites: [],
                    status: "Aprobado",
                },
            ]
        },
        {
            name: "V",
            courses: [
                {
                    code: 'IF322',
                    name: "Base de Datos I",
                    credits: 34,
                    requisites: [],
                    status: "Aprobado",
                },
                {
                    code: 'CT201',
                    name: "Contabilidad",
                    credits: 3,
                    requisites: [],
                    status: "Reprobado",
                },
                {
                    code: 'IF325',
                    name: "Programación en Entornos de Desarrollo Visual",
                    credits: 3,
                    requisites: ["IF301"],
                    status: "Cursando",
                },
                {
                    code: 'IF319',
                    name: "Principios de Electrónica",
                    credits: 3,
                    requisites: ["FS201"],
                    status: "Aprobado",
                },
                {
                    code: 'MT204',
                    name: "Matemática Financiera",
                    credits: 3,
                    requisites: ["MT101"],
                    status: "Aprobado",
                },
            ]
        },
        {
            name: "VI",
            courses: [
                {
                    code: 'IF327',
                    name: "Base de Datos II",
                    credits: 3,
                    requisites: ["IF322"],
                    status: "Aprobado",
                },
                {
                    code: 'IF212',
                    name: "Análisis y Diseño de Sistemas",
                    credits: 3,
                    requisites: [],
                    status: "Aprobado",
                },
                {
                    code: 'IF323',
                    name: "Redes I",
                    credits: 4,
                    requisites: [],
                    status: "Aprobado",
                },
                {
                    code: 'IF324',
                    name: "Circuitos Lógicos",
                    credits: 3,
                    requisites: [], 
                    status: "Pendiente",
                },
                {
                    code: 'FI501',
                    name: "Ética Profesional",
                    credits: 3,
                    requisites: ["CR201"],
                    status: "Aprobado",
                },
            ]
        },
        {
            name: "VII",
            courses: [
                {
                    code: 'IF342',
                    name: "Base de Datos Multidimensional",
                    credits: 3,
                    requisites: ["IF327"],
                    status: "Aprobado",
                },
                {
                    code: 'IF340',
                    name: "Programación Multiplataforma",
                    credits: 3,
                    requisites: [],
                    status: "Aprobado",
                },
                {
                    code: 'IF314',
                    name: "Desarrollo de Software",
                    credits: 4,
                    requisites: ["IF212"],
                    status: "Aprobado",
                },
                {
                    code: 'IF328',
                    name: "Redes II",
                    credits: 3,
                    requisites: ["IF323"], 
                    status: "Pendiente",
                },
                {
                    code: 'IF329',
                    name: "Sistemas Automatizados",
                    credits: 3,
                    requisites: ["IF324"],
                    status: "Pendiente",
                },
            ]
        },
        {
            name: "VIII",
            courses: [
                {
                    code: 'IF391',
                    name: "Sistemas Ingeligentes para Negocios",
                    credits: 3,
                    requisites: ["IF342"],
                    status: "Aprobado",
                },
                {
                    code: 'BG205',
                    name: "Ecología",
                    credits: 3,
                    requisites: [],
                    status: "Aprobado",
                },
                {
                    code: 'IF346',
                    name: "Implementación de Sistemas de Software",
                    credits: 3,
                    requisites: ["IF314"],
                    status: "Aprobado",
                },
                {
                    code: 'IF345',
                    name: "Sistemas Operativos I",
                    credits: 3,
                    requisites: [],
                    status: "Aprobado",
                },
                {
                    code: 'IF370',
                    name: "Microcontroladores",
                    credits: 3,
                    requisites: [],
                    status: "Pendiente",
                },
            ]
        },
        {
            name: "IX",
            courses: [
                {
                    code: 'IF353',
                    name: "Desarrollo de Portales Web I",
                    credits: 3,
                    requisites: ["IF340"],
                    status: "Aprobado",
                },
                {
                    code: 'IF351',
                    name: "Programación Móvil I",
                    credits: 4,
                    requisites: [],
                    status: "Pendiente",
                },
                {
                    code: 'AD104',
                    name: "Gestión de la Calidad Total",
                    credits: 3,
                    requisites: [],
                    status: "Aprobado",
                },
                {
                    code: 'IF352',
                    name: "Sistemas Operativos II",
                    credits: 3,
                    requisites: ["IF345"],
                    status: "Aprobado",
                },
                {
                    code: 'IF381',
                    name: "Seminario de Hardware y Electricidad",
                    credits: 3,
                    requisites: ["IF370"],
                    status: "Pendiente",
                },
            ]
        },
        {
            name: "X",
            courses: [
                {
                    code: 'IF357',
                    name: "Desarrollo de Portales Web II",
                    credits: 3,
                    requisites: ["IF353"],
                    status: "Cursando",
                },
                {
                    code: 'IF355',
                    name: "Programación Móvil II",
                    credits: 3,
                    requisites: ["IF351"],
                    status: "Pendiente",
                },
                {
                    code: 'MT304',
                    name: "Control Estadístico de la Calidad",
                    credits: 3,
                    requisites: ["AD104"],
                    status: "Cursando",
                },
                {
                    code: 'IF356',
                    name: "Gestión y Estándares de Tecnología de Información",
                    credits: 3,
                    requisites: [],
                    status: "Cursando",
                },
                {
                    code: 'CR501',
                    name: "Doctrina Social de la Iglesia",
                    credits: 3,
                    requisites: ["FI501"],
                    status: "Aprobado",
                },
            ]
        },
        {
            name: "XI",
            courses: [
                {
                    code: 'IF362',
                    name: "Negocios Web",
                    credits: 3,
                    requisites: ["IF357"],
                    status: "Pendiente",
                },
                {
                    code: 'IF347',
                    name: "Programación de Negocios",
                    credits: 3,
                    requisites: [],
                    status: "Pendiente",
                },
                {
                    code: 'AD402',
                    name: "Planeación y Diseño de un Modelo de Calidad",
                    credits: 3,
                    requisites: ["MT304"],
                    status: "Pendiente",
                },
                {
                    code: 'IF360',
                    name: "Seguridad Informática y Gestión del Riesgo",
                    credits: 3,
                    requisites: ["IF356"],
                    status: "Pendiente",
                },
                {
                    code: 'IF358',
                    name: "Administración de Centros de Cómputo",
                    credits: 3,
                    requisites: ["IF356"],
                    status: "Pendiente",
                },
            ]
        },
        {
            name: "XII",
            courses: [
                {
                    code: 'IF361',
                    name: "Seminario Taller de Software",
                    credits: 3,
                    requisites: ["IF362"],
                    status: "Pendiente",
                },
                {
                    code: 'IF392',
                    name: "Gestión de Proyectos Informáticos",
                    credits: 3,
                    requisites: ["IF347"],
                    status: "Pendiente",
                },
                {
                    code: 'IF350',
                    name: "Big Data",
                    credits: 3,
                    requisites: ["IF391"],
                    status: "Pendiente",
                },
                {
                    code: 'IF380',
                    name: "Auditoría de Sistemas de Información",
                    credits: 3,
                    requisites: ["IF360"],
                    status: "Pendiente",
                },
                {
                    code: 'IF393',
                    name: "Excel Avanzado para Ingenierías",
                    credits: 3,
                    requisites: [],
                    status: "Cursando",
                },
            ]
        },
        {
            name: "XIII",
            courses: [
                {
                    code: 'IF400',
                    name: "Práctica Profesional Supervisada",
                    credits: 0,
                    requisites: [],
                    status: "Pendiente",
                },
            ]
        },
        {
            name: "CPG.",
            courses: [
                {
                    code: 'CNFS1',
                    name: "Laboratorio de Física I",
                    credits: 2,
                    requisites: ["FS201"],
                    status: "Aprobado",
                },
                {
                    code: 'IGTM1',
                    name: "Taller y Mantenimiento de Computadoras",
                    credits: 1,
                    requisites: [],
                    status: "Aprobado",
                },                
                {
                    code: 'CTPT1',
                    name: "Pintura I",
                    credits: 1,
                    requisites: [],
                    status: "Aprobado",
                },                
                {
                    code: 'CSHD1',
                    name: "Htas. de Diseño y Maquinado ASISA",
                    credits: 3,
                    requisites: [],
                    status: "Aprobado",
                },
                {
                    code: 'IDIN1',
                    name: "Inglés (Principiante)",
                    credits: 6,
                    requisites: [],
                    status: "Aprobado",
                },
                {
                    code: 'IDIN2',
                    name: "Inglés (Intermedio Bajo)",
                    credits: 6,
                    requisites: ["IDIN1"],
                    status: "Aprobado",
                },
                {
                    code: 'IDIN3',
                    name: "Inglés (Intermedio Alto)",
                    credits: 6,
                    requisites: ["IDIN2"],
                    status: "Aprobado",
                },
                {
                    code: 'IDIN4',
                    name: "Inglés (Avanzado)",
                    credits: 6,
                    requisites: ["IDIN3"],
                    status: "Aprobado",
                },
                {
                    code: 'IDIN5',
                    name: "Inglés (Vocabulario y Lectura Técnica)",
                    credits: 6,
                    requisites: ["IDIN4"],
                    status: "Aprobado",
                },
                {
                    code: 'IDIN6',
                    name: "Inglés (Composición y Conversación)",
                    credits: 6,
                    requisites: ["IDIN5"],
                    status: "Aprobado",
                },
            ]
        },
        {
            name: "SEM.",
            courses: [
                {
                    code: 'ESVU1',
                    name: "Seminario de Iniciación a la Vida Universitaria",
                    credits: 0,
                    requisites: [],
                    status: "Aprobado",
                },
                {
                    code: 'ESPF1',
                    name: "Retiro de Padres de Familia",
                    credits: 1,
                    requisites: [],
                    status: "Aprobado",
                },
                {
                    code: 'ESVU2',
                    name: "Seminario de Madurez en la Vida Universitario",
                    credits: 1,
                    requisites: ["FI501"],
                    status: "Aprobado",
                },
                {
                    code: 'ESVU3',
                    name: "Seminario de Preparación a la Vida Profesional",
                    credits: 1,
                    requisites: ["CR501"],
                    status: "Aprobado",
                },
                {
                    code: 'FMTS1',
                    name: "Trabajo Educativo Social",
                    credits: 2,
                    requisites: ["CR501"],
                    status: "Aprobado",
                },
            ]
        },
    ]
}
document.addEventListener("DOMContentLoaded", () => {
    const programContainer = document.getElementById("programContainer");
    const studyProgramInstance = new StudyProgram(programContainer, studyProgramICC);
    studyProgramInstance.createUX();
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
                if (block.name !== "XIII") {
                    totalCourses++;
                    if (course.status === "Aprobado") {
                        approved++;
                    }
                }
                
                if (block.name !== "CPG." && block.name !== "SEM." && block.name !== "XIII") {
                    totalWithoutExtras++;
                    if (course.status === "Aprobado") {
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
                creditLabel.innerHTML = course.credits;
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
                classUX.appendChild(codLabel);
                classUX.appendChild(nameLabel);
                classUX.appendChild(creditLabel);
                coursesBlock.appendChild(classUX);
            }
        );

        return coursesBlock;
    }
}