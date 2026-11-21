// EDITA AQUÍ el contenido de tu carrera. No hace falta tocar index.html.
const DATA = {
  carrusel: [
    {t:"Ingeniería en Computación", p:"Universidad Nacional Héroes de San José. Diseña, construye y mantiene los sistemas de software que mueven a las organizaciones."},
    {t:"Tres turnos", p:"Estudia por la mañana (7 am – 12 pm), por la tarde (1 – 5 pm) o por la noche (6 – 8 pm)."},
    {t:"Laboratorios y prácticas", p:"Aprende resolviendo problemas reales desde los primeros semestres."},
    {t:"Inscripciones abiertas", p:"Consulta el plan de estudio y déjanos tus dudas en el formulario."}
  ],
  organigrama: [
    ["Universidad Nacional Héroes de San José"],
    ["Rectoría"],
    ["Vicerrectoría Académica","Vicerrectoría Administrativa"],
    ["Facultad de Ciencias y Tecnología","Facultad de Ciencias Económicas","Facultad de Humanidades"],
    ["Dirección de Ingeniería en Computación"],
    ["Coordinación Académica","Laboratorios","Prácticas Profesionales"]
  ],
  resaltado: "Dirección de Ingeniería en Computación",
  descripcion: "La Ingeniería en Computación forma profesionales capaces de analizar problemas, diseñar soluciones de software y hardware, y gestionar proyectos tecnológicos. Combina bases matemáticas, programación, bases de datos, redes e ingeniería de software, con un enfoque práctico y trabajo en equipo.",
  // ini/fin en horas (24 h). Las clases se reparten en tres turnos.
  modalidades: [
    {id:"m", c:"Mañana", n:"Matutina", ini:7, fin:12, h:"7:00 am – 12:00 pm", d:"5 años (10 semestres)"},
    {id:"t", c:"Tarde", n:"Vespertina", ini:13, fin:17, h:"1:00 pm – 5:00 pm", d:"5 años (10 semestres)"},
    {id:"n", c:"Noche", n:"Nocturna", ini:18, fin:20, h:"6:00 pm – 8:00 pm", d:"5 años (10 semestres)"}
  ],
  perfiles: ["Desarrollador de software","Administrador de bases de datos","Analista de sistemas","Administrador de redes","Líder de proyectos TI","Consultor en transformación digital","Emprendedor tecnológico"],
  areas: [
    {n:"Programación y algoritmos", d:"Lógica, estructuras de datos, programación orientada a objetos."},
    {n:"Bases de datos", d:"Modelado, SQL, administración y análisis de datos."},
    {n:"Redes y seguridad", d:"Protocolos, infraestructura y ciberseguridad."},
    {n:"Ingeniería de software", d:"Requisitos, arquitectura, pruebas y metodologías ágiles."},
    {n:"Desarrollo web y móvil", d:"Aplicaciones cliente-servidor, APIs y despliegue en la nube."},
    {n:"Ciencias básicas", d:"Cálculo, álgebra, física y estadística."}
  ],
  // Plan por modalidad: cada semestre es una lista de asignaturas.
  plan: {
    "Matutina": [
      ["Cálculo I","Álgebra Lineal","Introducción a la Programación","Comunicación Oral y Escrita"],
      ["Cálculo II","Programación Orientada a Objetos","Física I","Matemática Discreta"],
      ["Estructuras de Datos","Bases de Datos I","Estadística","Arquitectura de Computadores"],
      ["Bases de Datos II","Sistemas Operativos","Redes I","Ingeniería de Software I"],
      ["Desarrollo Web","Redes II","Ingeniería de Software II","Investigación de Operaciones"]
    ],
    "Vespertina": [
      ["Cálculo I","Álgebra Lineal","Introducción a la Programación"],
      ["Cálculo II","Programación Orientada a Objetos","Matemática Discreta"],
      ["Estructuras de Datos","Bases de Datos I","Estadística"],
      ["Bases de Datos II","Sistemas Operativos","Redes I"],
      ["Desarrollo Web","Redes II","Ingeniería de Software I"]
    ],
    "Nocturna": [
      ["Cálculo I","Álgebra Lineal","Introducción a la Programación"],
      ["Cálculo II","Programación Orientada a Objetos","Matemática Discreta"],
      ["Estructuras de Datos","Bases de Datos I","Estadística"],
      ["Bases de Datos II","Sistemas Operativos","Desarrollo Web"],
      ["Redes I","Ingeniería de Software I","Seminario de Investigación"]
    ]
  },
  resenas: [
    {n:"Cristopher Josué Suárez Mendoza", r:5, c:"Buena carrera. Los profesores explican bien y se aprende mucho en los laboratorios."}
  ]
};
