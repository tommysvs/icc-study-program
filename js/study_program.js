const planICC = {
    title: "Plan de estudio",
    bloques: [
        {
            name: "I",
            asignaturas: [
                {
                    codigo: 'ES101',
                    nombre: "Español",
                    creditos: 3,
                    requisitos: [],
                    estado: "Aprobado",
                },
                {
                    codigo: 'MT101',
                    nombre: "Matemáticas",
                    creditos: 4,
                    requisitos: [],
                    estado: "Aprobado",
                },
                {
                    codigo: 'IF112',
                    nombre: "Introducción a las Ciencias de la Computación",
                    creditos: 4,
                    requisitos: [],
                    estado: "Aprobado",
                },
                {
                    codigo: 'SC101',
                    nombre: "Sociología",
                    creditos: 3,
                    requisitos: [],
                    estado: "Aprobado",
                },
                {
                    codigo: 'FI101',
                    nombre: "Filosofía",
                    creditos: 3,
                    requisitos: [],
                    estado: "Aprobado",
                },
                {
                    codigo: 'FI101',
                    nombre: "Filosofía",
                    creditos: 3,
                    requisitos: [],
                    estado: "Aprobado",
                },
                {
                    codigo: 'ESVU1',
                    nombre: "Seminario de Iniciación a la Vida Universitaria",
                    creditos: 0,
                    requisitos: [],
                    estado: "Aprobado",
                },
            ]
        },
        {
            name: "II",
            asignaturas: [
                {
                    codigo: 'ES201',
                    nombre: "Expresión Oral y Escrita",
                    creditos: 3,
                    requisitos: ["ES101"],
                    estado: "Aprobado",
                },
                {
                    codigo: 'MT201',
                    nombre: "Precálculo",
                    creditos: 4,
                    requisitos: ["MT101"],
                    estado: "Aprobado",
                },
                {
                    codigo: 'IF200',
                    nombre: "Fundamentos y Lógica de Programación",
                    creditos: 4,
                    requisitos: ["IF112"],
                    estado: "Aprobado",
                },
                {
                    codigo: 'HS101',
                    nombre: "Historia de Honduras",
                    creditos: 3,
                    requisitos: [],
                    estado: "Aprobado",
                },
                {
                    codigo: 'CR201',
                    nombre: "El Hombre Frente a la Vida",
                    creditos: 3,
                    requisitos: ["FI101"],
                    estado: "Aprobado",
                },
            ]
        },
        {
            name: "III",
            asignaturas: [
                {
                    codigo: 'MT202',
                    nombre: "Estadística I",
                    creditos: 4,
                    requisitos: ["MT101"],
                    estado: "Aprobado",
                },
                {
                    codigo: 'MT303',
                    nombre: "Cálculo I",
                    creditos: 4,
                    requisitos: ["MT201"],
                    estado: "Aprobado",
                },
                {
                    codigo: 'IF214',
                    nombre: "Programación Estructurada I",
                    creditos: 3,
                    requisitos: ["IF200"],
                    estado: "Aprobado",
                },
                {
                    codigo: 'IF213',
                    nombre: "Estructuras Discretas",
                    creditos: 3,
                    requisitos: ["IF200"],
                    estado: "Aprobado",
                },
                {
                    codigo: 'IF394',
                    nombre: "Diseño Gráfico",
                    creditos: 3,
                    requisitos: [],
                    estado: "Aprobado",
                },
            ]
        },
        {
            name: "IV",
            asignaturas: [
                {
                    codigo: 'AD302',
                    nombre: "Métodos y Técnicas de Investigación",
                    creditos: 3,
                    requisitos: ["MT202"],
                    estado: "Aprobado",
                },
                {
                    codigo: 'MT401',
                    nombre: "Cálculo II",
                    creditos: 4,
                    requisitos: ["MT303"],
                    estado: "Pendiente",
                },
                {
                    codigo: 'IF301',
                    nombre: "Programación Estructurada II",
                    creditos: 3,
                    requisitos: ["IF214"],
                    estado: "Aprobado",
                },
                {
                    codigo: 'FS201',
                    nombre: "Física I",
                    creditos: 3,
                    requisitos: ["MT101"],
                    estado: "Aprobado",
                },
                {
                    codigo: 'EL101',
                    nombre: "Administración",
                    creditos: 3,
                    requisitos: [],
                    estado: "Aprobado",
                },
                {
                    codigo: 'CNFS1',
                    nombre: "Laboratorio de Física I",
                    creditos: 2,
                    requisitos: ["FS201"],
                    estado: "Cursando",
                },
            ]
        },
        {
            name: "V",
            asignaturas: [
                {
                    codigo: 'IF322',
                    nombre: "Base de Datos I",
                    creditos: 34,
                    requisitos: [],
                    estado: "Aprobado",
                },
                {
                    codigo: 'CT201',
                    nombre: "Contabilidad",
                    creditos: 3,
                    requisitos: [],
                    estado: "Reprobado",
                },
                {
                    codigo: 'IF325',
                    nombre: "Programación en Entornos de Desarrollo Visual",
                    creditos: 3,
                    requisitos: ["IF301"],
                    estado: "Reprobado",
                },
                {
                    codigo: 'IF319',
                    nombre: "Principios de Electrónica",
                    creditos: 3,
                    requisitos: ["FS201"],
                    estado: "Aprobado",
                },
                {
                    codigo: 'MT204',
                    nombre: "Matemática Financiera",
                    creditos: 3,
                    requisitos: ["MT101"],
                    estado: "Aprobado",
                },
            ]
        },
        {
            name: "VI",
            asignaturas: [
                {
                    codigo: 'IF327',
                    nombre: "Base de Datos II",
                    creditos: 3,
                    requisitos: ["IF322"],
                    estado: "Aprobado",
                },
                {
                    codigo: 'IF212',
                    nombre: "Análisis y Diseño de Sistemas",
                    creditos: 3,
                    requisitos: [],
                    estado: "Aprobado",
                },
                {
                    codigo: 'IF323',
                    nombre: "Redes I",
                    creditos: 4,
                    requisitos: [],
                    estado: "Aprobado",
                },
                {
                    codigo: 'IF324',
                    nombre: "Circuitos Lógicos",
                    creditos: 3,
                    requisitos: [], 
                    estado: "Pendiente",
                },
                {
                    codigo: 'FI501',
                    nombre: "Ética Profesional",
                    creditos: 3,
                    requisitos: ["CR201"],
                    estado: "Aprobado",
                },
                {
                    codigo: 'ESVU2',
                    nombre: "Seminario de Madurez en la Vida Universitario",
                    creditos: 1,
                    requisitos: ["FI501"],
                    estado: "Aprobado",
                },
            ]
        },
        {
            name: "VII",
            asignaturas: [
                {
                    codigo: 'IF342',
                    nombre: "Base de Datos Multidimensional",
                    creditos: 3,
                    requisitos: ["IF327"],
                    estado: "Aprobado",
                },
                {
                    codigo: 'IF340',
                    nombre: "Programación Multiplataforma",
                    creditos: 3,
                    requisitos: [],
                    estado: "Aprobado",
                },
                {
                    codigo: 'IF314',
                    nombre: "Desarrollo de Software",
                    creditos: 4,
                    requisitos: ["IF212"],
                    estado: "Aprobado",
                },
                {
                    codigo: 'IF328',
                    nombre: "Redes II",
                    creditos: 3,
                    requisitos: ["IF323"], 
                    estado: "Pendiente",
                },
                {
                    codigo: 'IF329',
                    nombre: "Sistemas Automatizados",
                    creditos: 3,
                    requisitos: ["IF324"],
                    estado: "Pendiente",
                },
            ]
        },
        {
            name: "VIII",
            asignaturas: [
                {
                    codigo: 'IF391',
                    nombre: "Sistemas Ingeligentes para Negocios",
                    creditos: 3,
                    requisitos: ["IF342"],
                    estado: "Cursando",
                },
                {
                    codigo: 'BG205',
                    nombre: "Ecología",
                    creditos: 3,
                    requisitos: [],
                    estado: "Aprobado",
                },
                {
                    codigo: 'IF346',
                    nombre: "Implementación de Sistemas de Software",
                    creditos: 3,
                    requisitos: ["IF314"],
                    estado: "Cursando",
                },
                {
                    codigo: 'IF345',
                    nombre: "Sistemas Operativos I",
                    creditos: 3,
                    requisitos: [],
                    estado: "Aprobado",
                },
                {
                    codigo: 'IF370',
                    nombre: "Microcontroladores",
                    creditos: 3,
                    requisitos: [],
                    estado: "Pendiente",
                },
            ]
        },
        {
            name: "IX",
            asignaturas: [
                {
                    codigo: 'IF353',
                    nombre: "Desarrollo de Portales Web I",
                    creditos: 3,
                    requisitos: ["IF340"],
                    estado: "Cursando",
                },
                {
                    codigo: 'IF351',
                    nombre: "Programación Móvil I",
                    creditos: 4,
                    requisitos: [],
                    estado: "Pendiente",
                },
                {
                    codigo: 'AD104',
                    nombre: "Gestión de la Calidad Total",
                    creditos: 3,
                    requisitos: [],
                    estado: "Aprobado",
                },
                {
                    codigo: 'IF352',
                    nombre: "Sistemas Operativos II",
                    creditos: 3,
                    requisitos: ["IF345"],
                    estado: "Cursando",
                },
                {
                    codigo: 'IF381',
                    nombre: "Seminario de Hardware y Electricidad",
                    creditos: 3,
                    requisitos: [],
                    estado: "Pendiente",
                },
            ]
        },
        {
            name: "X",
            asignaturas: [
                {
                    codigo: 'IF357',
                    nombre: "Desarrollo de Portales Web II",
                    creditos: 3,
                    requisitos: ["IF353"],
                    estado: "Pendiente",
                },
                {
                    codigo: 'IF355',
                    nombre: "Programación Móvil II",
                    creditos: 3,
                    requisitos: ["IF351"],
                    estado: "Pendiente",
                },
                {
                    codigo: 'MT304',
                    nombre: "Control Estadístico de la Calidad",
                    creditos: 3,
                    requisitos: ["AD104"],
                    estado: "Pendiente",
                },
                {
                    codigo: 'IF356',
                    nombre: "Gestión y Estándares de Tecnología de Información",
                    creditos: 3,
                    requisitos: [],
                    estado: "Pendiente",
                },
                {
                    codigo: 'CR501',
                    nombre: "Doctrina Social de la Iglesia",
                    creditos: 3,
                    requisitos: ["FI501"],
                    estado: "Aprobado",
                },

                {
                    codigo: 'ESVU3',
                    nombre: "Seminario de Preparación a la Vida Profesional",
                    creditos: 3,
                    requisitos: ["CR501"],
                    estado: "Aprobado",
                },
            ]
        },
        {
            name: "XI",
            asignaturas: [
                {
                    codigo: 'IF362',
                    nombre: "Negocios Web",
                    creditos: 3,
                    requisitos: ["IF357"],
                    estado: "Pendiente",
                },
                {
                    codigo: 'IF347',
                    nombre: "Programación de Negocios",
                    creditos: 3,
                    requisitos: [],
                    estado: "Pendiente",
                },
                {
                    codigo: 'AD402',
                    nombre: "Planeación y Diseño de un Modelo de Calidad",
                    creditos: 3,
                    requisitos: ["MT304"],
                    estado: "Pendiente",
                },
                {
                    codigo: 'IF360',
                    nombre: "Seguridad Informática y Gestión del Riesgo",
                    creditos: 3,
                    requisitos: ["IF356"],
                    estado: "Pendiente",
                },
                {
                    codigo: 'IF358',
                    nombre: "Administración de Centros de Cómputo",
                    creditos: 3,
                    requisitos: ["IF356"],
                    estado: "Pendiente",
                },
            ]
        },
        {
            name: "XII",
            asignaturas: [
                {
                    codigo: 'IF361',
                    nombre: "Seminario Taller de Software",
                    creditos: 3,
                    requisitos: ["IF362"],
                    estado: "Pendiente",
                },
                {
                    codigo: 'IF392',
                    nombre: "Gestión de Proyectos Informáticos",
                    creditos: 3,
                    requisitos: ["IF347"],
                    estado: "Pendiente",
                },
                {
                    codigo: 'IF350',
                    nombre: "Big Data",
                    creditos: 3,
                    requisitos: ["IF391"],
                    estado: "Pendiente",
                },
                {
                    codigo: 'IF380',
                    nombre: "Auditoría de Sistemas de Información",
                    creditos: 3,
                    requisitos: ["IF360"],
                    estado: "Pendiente",
                },
                {
                    codigo: 'IF393',
                    nombre: "Excel Avanzado para Ingenierías",
                    creditos: 3,
                    requisitos: [],
                    estado: "Pendiente",
                },
            ]
        },
    ]
}
document.addEventListener("DOMContentLoaded", () => {
    const planContainer = document.getElementById("planIccContainer");
    const planEstudioInstance = new PlanDeEstudio(planContainer, planICC);
    planEstudioInstance.createUX();
});

class PlanDeEstudio {
    container = null;
    structure = null;
    nodes = null;
    constructor(container, planStructure) {
        this.container = container;
        this.structure = planStructure;
        this.nodes = {};
        this.container.classList.add("plancontainer");
        let titleElement = document.createElement("H3");
        titleElement.innerHTML = this.structure.title;
        this.container.appendChild(
            titleElement
        );
    }

    createUX() {
        if (!this.structure) {
            throw Error("Es necesario establecer un plan de estudio JSON.");
        }
        if (!this.structure.bloques) {
            throw Error("El plan no tiene bloques.");
        }
        let bloquesUX = this.structure.bloques.map(
            (bloque) => {
                const contendorBloque = document.createElement("div");
                contendorBloque.classList.add("bloque");
                const labelBloque = document.createElement("div");
                labelBloque.innerHTML = bloque.name;
                labelBloque.classList.add("bloque_label");
                const asignaturasBloque = this.createAsignaturasUX(bloque.asignaturas);
                contendorBloque.appendChild(labelBloque);
                contendorBloque.appendChild(asignaturasBloque);
                return contendorBloque;
            }
        );
        bloquesUX.forEach(element => {
            this.container.appendChild(element);
        });
    }

    createAsignaturasUX(asignaturas) {
        const asignaturasBloque = document.createElement("div");
        asignaturasBloque.classList.add("bloque_clases");

        asignaturas.forEach(
            (asignatura) => {
                const claseUX = document.createElement("div");
                claseUX.classList.add("bloqueClase");

                switch (asignatura.estado) {
                    case "Aprobado":
                        claseUX.classList.add("estado-aprobado");
                        break;
                    case "Reprobado":
                        claseUX.classList.add("estado-reprobado");
                        break;
                    case "Pendiente":
                        claseUX.classList.add("estado-pendiente");
                        break;
                    case "Cursando":
                        claseUX.classList.add("estado-cursando");
                        break;
                }

                const codLabel = document.createElement("span");
                const nameLabel = document.createElement("span");
                const crdLabel = document.createElement("span");
                codLabel.innerHTML = asignatura.codigo;
                nameLabel.innerHTML = asignatura.nombre;
                crdLabel.innerHTML = asignatura.creditos;
                if (!this.nodes[asignatura.codigo]) {
                    this.nodes[asignatura.codigo] = {
                        node: claseUX,
                        requisitos: [],
                        apertura: []
                    }
                    asignatura.requisitos.forEach(r => {
                        this.nodes[asignatura.codigo].requisitos.push(this.nodes[r].node)
                        this.nodes[r].apertura.push(this.nodes[asignatura.codigo].node)
                    }
                    );
                }
                const currentNode  = this.nodes[asignatura.codigo];
                claseUX.addEventListener("mouseover", (e) => {
                    if (e.target.tagName.toUpperCase() !== 'SPAN') {
                        currentNode.requisitos.forEach( n => n.classList.add("clase_requisito"));
                        currentNode.apertura.forEach( n => n.classList.add("clase_apertura"));
                    }
                });
                claseUX.addEventListener("mouseleave", (e) => {
                    if (e.target.tagName.toUpperCase() !== 'SPAN') {
                        currentNode.requisitos.forEach( n => n.classList.remove("clase_requisito"));
                        currentNode.apertura.forEach( n => n.classList.remove("clase_apertura"));
                    }
                });
                claseUX.appendChild(codLabel);
                claseUX.appendChild(nameLabel);
                claseUX.appendChild(crdLabel);
                asignaturasBloque.appendChild(claseUX);
            }
        );

        return asignaturasBloque;
    }
}