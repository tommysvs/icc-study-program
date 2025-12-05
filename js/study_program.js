const planICC = {
    title: "Plan de estudio ICC",
    bloques: [
        {
            name: "I",
            asignaturas: [
                {
                    codigo: 'ES101',
                    nombre: "Español",
                    creditos: 3,
                    requisitos: [],
                },
                {
                    codigo: 'MT101',
                    nombre: "Matemáticas",
                    creditos: 4,
                    requisitos: [],
                },
                {
                    codigo: 'IF112',
                    nombre: "Introducción a las Ciencias de la Computación",
                    creditos: 4,
                    requisitos: [],
                },
                {
                    codigo: 'SC101',
                    nombre: "Sociología",
                    creditos: 3,
                    requisitos: [],
                },
                {
                    codigo: 'FI101',
                    nombre: "Filosofía",
                    creditos: 3,
                    requisitos: [],
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
                },
                {
                    codigo: 'MT201',
                    nombre: "Precálculo",
                    creditos: 4,
                    requisitos: ["MT101"],
                },
                {
                    codigo: 'IF200',
                    nombre: "Fundamentos y Lógica de Programación",
                    creditos: 4,
                    requisitos: ["IF112"],
                },
                {
                    codigo: 'HS101',
                    nombre: "Historia de Honduras",
                    creditos: 3,
                    requisitos: [],
                },
                {
                    codigo: 'CR201',
                    nombre: "El Hombre Frente a la Vida",
                    creditos: 3,
                    requisitos: ["FI101"],
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
                },
                {
                    codigo: 'MT303',
                    nombre: "Cálculo I",
                    creditos: 4,
                    requisitos: ["MT201"],
                },
                {
                    codigo: 'IF214',
                    nombre: "Programación Estructurada I",
                    creditos: 3,
                    requisitos: ["IF200"],
                },
                {
                    codigo: 'IF213',
                    nombre: "Estructuras Discretas",
                    creditos: 3,
                    requisitos: ["IF200"],
                },
                {
                    codigo: 'IF394',
                    nombre: "Diseño Gráfico",
                    creditos: 3,
                    requisitos: [],
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
                },
                {
                    codigo: 'MT401',
                    nombre: "Cálculo II",
                    creditos: 4,
                    requisitos: ["MT303"],
                },
                {
                    codigo: 'IF301',
                    nombre: "Programación Estructurada II",
                    creditos: 3,
                    requisitos: ["IF214"],
                },
                {
                    codigo: 'FS201',
                    nombre: "Fisica I",
                    creditos: 3,
                    requisitos: ["MT101"],
                },
                {
                    codigo: 'EL101',
                    nombre: "Administración",
                    creditos: 3,
                    requisitos: [],
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
                },
                {
                    codigo: 'CT201',
                    nombre: "Contabilidad",
                    creditos: 3,
                    requisitos: [],
                },
                {
                    codigo: 'IF325',
                    nombre: "Programación en Entornos de Desarrollo Visual",
                    creditos: 3,
                    requisitos: ["IF301"],
                },
                {
                    codigo: 'IF319',
                    nombre: "Principios de Electrónica",
                    creditos: 3,
                    requisitos: ["FS201"],
                },
                {
                    codigo: 'MT204',
                    nombre: "Matemática Financiera",
                    creditos: 3,
                    requisitos: ["MT101"],
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
                },
                {
                    codigo: 'IF212',
                    nombre: "Análisis y Diseño de Sistemas",
                    creditos: 3,
                    requisitos: [],
                },
                {
                    codigo: 'IF323',
                    nombre: "Redes I",
                    creditos: 4,
                    requisitos: [],
                },
                {
                    codigo: 'IF324',
                    nombre: "Circuitos Lógicos",
                    creditos: 3,
                    requisitos: [],
                },
                {
                    codigo: 'FI501',
                    nombre: "Ética Profesional",
                    creditos: 3,
                    requisitos: ["CR201"],
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
                },
                {
                    codigo: 'IF340',
                    nombre: "Programación Multiplataforma",
                    creditos: 3,
                    requisitos: [],
                },
                {
                    codigo: 'IF314',
                    nombre: "Desarrollo de Software",
                    creditos: 4,
                    requisitos: ["IF212"],
                },
                {
                    codigo: 'IF328',
                    nombre: "Redes II",
                    creditos: 3,
                    requisitos: ["IF323"],
                },
                {
                    codigo: 'IF329',
                    nombre: "Sistemas Automatizados",
                    creditos: 3,
                    requisitos: ["IF324"],
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
                },
                {
                    codigo: 'BG205',
                    nombre: "Ecología",
                    creditos: 3,
                    requisitos: [],
                },
                {
                    codigo: 'IF346',
                    nombre: "Implementación de Sistemas de Software",
                    creditos: 3,
                    requisitos: ["IF314"],
                },
                {
                    codigo: 'IF345',
                    nombre: "Sistemas Operativos I",
                    creditos: 3,
                    requisitos: [],
                },
                {
                    codigo: 'IF370',
                    nombre: "Microcontroladores",
                    creditos: 3,
                    requisitos: [],
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
                },
                {
                    codigo: 'IF351',
                    nombre: "Programación Móvil I",
                    creditos: 4,
                    requisitos: [],
                },
                {
                    codigo: 'AD104',
                    nombre: "Gestión de la Calidad Total",
                    creditos: 3,
                    requisitos: [],
                },
                {
                    codigo: 'IF352',
                    nombre: "Sistemas Operativos II",
                    creditos: 3,
                    requisitos: ["IF345"],
                },
                {
                    codigo: 'IF381',
                    nombre: "Seminario de Hardware y Electricidad",
                    creditos: 3,
                    requisitos: [],
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
                },
                {
                    codigo: 'IF355',
                    nombre: "Programación Móvil II",
                    creditos: 3,
                    requisitos: ["IF351"],
                },
                {
                    codigo: 'MT304',
                    nombre: "Control Estadístico de la Calidad",
                    creditos: 3,
                    requisitos: ["AD104"],
                },
                {
                    codigo: 'IF356',
                    nombre: "Gestión y Estándares de Tecnología de Información",
                    creditos: 3,
                    requisitos: [],
                },
                {
                    codigo: 'CR501',
                    nombre: "Doctrina Social de la Iglesia",
                    creditos: 3,
                    requisitos: ["FI501"],
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
                },
                {
                    codigo: 'IF347',
                    nombre: "Programación de Negocios",
                    creditos: 3,
                    requisitos: [],
                },
                {
                    codigo: 'AD402',
                    nombre: "Planeación y Diseño de un Modelo de Calidad",
                    creditos: 3,
                    requisitos: ["MT304"],
                },
                {
                    codigo: 'IF360',
                    nombre: "Seguridad Informática y Gestión del Riesgo",
                    creditos: 3,
                    requisitos: ["IF356"],
                },
                {
                    codigo: 'IF358',
                    nombre: "Administración de Centros de Cómputo",
                    creditos: 3,
                    requisitos: ["IF356"],
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
                },
                {
                    codigo: 'IF392',
                    nombre: "Gestión de Proyectos Informáticos",
                    creditos: 3,
                    requisitos: ["IF347"],
                },
                {
                    codigo: 'IF350',
                    nombre: "Big Data",
                    creditos: 3,
                    requisitos: ["IF391"],
                },
                {
                    codigo: 'IF380',
                    nombre: "Auditoría de Sistemas de Información",
                    creditos: 3,
                    requisitos: ["IF360"],
                },
                {
                    codigo: 'IF393',
                    nombre: "Excel Avanzado para Ingenierías",
                    creditos: 3,
                    requisitos: [],
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