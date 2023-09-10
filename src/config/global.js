export default {
  global: {
    componenteFormativo:
      'Inspección y acciones correctivas del proceso de acopio de los huevos de gallina',
    descripcionCurso:
      'Para mejorar la productividad y rentabilidad es necesario que en los procesos de recolección de huevos se haga inspección y se planteen acciones de mejora y planes de contingencia se relacionan con las estrategias para atender las novedades que se puedan presentar en la recolección de huevos de mesa en cada uno de los procesos de acopio de huevo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Proceso de acopio de huevo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Alistamiento de instalaciones, equipos, insumos para la recolección de huevos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sitios de postura y sus nidales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Recolección de huevo en galpón',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Clasificación de huevos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Acomodación de huevo de gallina',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Apilamiento de huevo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Recolección y disposición de los residuos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Almacenamiento de huevo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Empaque, embalaje y rotulado de huevo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Inventario de huevo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Formatos para reporte de recolección de huevo de mesa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema13',
        numero: '13',
        titulo: 'Novedades en la recolección de huevo de mesa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema14',
        numero: '14',
        titulo: 'Medidas de superficie, longitud, peso y volumen',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_15_722203.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Alistamiento de instalaciones, equipos, insumos para la recolección de huevos',
      referencia:
        'Resolución 3651. (13 de noviembre de 2014). Por medio de la cual se establecen los requisitos para la certificación de granjas avícolas bio-seguras de postura y/o levante y se dictan otras disposiciones. Fenavi. ',
      tipo: 'Resolución',
      link:
        'https://fenavi.org/wp-content/uploads/2018/04/RESOLUCION-3651-DE-2014-1.pdf',
    },
    {
      tema:
        'Alistamiento de instalaciones, equipos, insumos para la recolección de huevos',
      referencia:
        'Norma Técnica Colombiana NTC 1240. (12 de diciembre de 2011). [ICONTEC]. Obtenido de Industria alimentaria, Huevos de gallina frescos para consumo: ',
      tipo: 'Norma',
      link: 'https://docplayer.es/54870550-Norma-tecnica-colombiana-1240.html',
    },
    {
      tema: 'Sitios de postura y sus nidales',
      referencia:
        'La Finca de Hoy. (2017). Nidales plásticos para gallinas ponedoras. [video] YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/Tr45UXwv1Sg',
    },
    {
      tema: 'Recolección de huevo en galpón',
      referencia:
        'Agrotendencia TV. (2019). Gallinas ponedoras en 2 minutos. [video]   YouTube. ',
      tipo: 'Video',
      link:
        'https://youtu.be/UScECTIajbE?list=PL7OZ7XbQhi8o-lZejNHTthLGD8qvkHYJX',
    },
    {
      tema: 'Clasificación de huevos',
      referencia:
        'Instituto de Estudios del Huevo. (2009). El gran libro del huevo. Editorial Everest S.A. ',
      tipo: 'Libro',
      link:
        'http://institutohuevo.com/wp-content/uploads/2017/07/EL-GRAN-LIBRO-DEL-HUEVO.pdf',
    },
    {
      tema: 'Apilamiento del huevo',
      referencia:
        'Veterinaria digital. (2020). Video de sistema de recolección de huevos. ',
      tipo: 'Video',
      link:
        'https://www.veterinariadigital.com/wp-content/uploads/2020/11/ECS-eggs-transport.mp4?_=1',
    },
    {
      tema: 'Inventario de huevo',
      referencia:
        'Contador Contado. (2018). Métodos de Inventario PEPS, UEPS, y Promedio. [video] YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/JLB3KXGqXDc',
    },
    {
      tema: 'Inventario de huevo',
      referencia:
        'Enciclopedia Económica. (2020). Método PEPS. Página <em>Web</em>.',
      tipo: 'Artículo',
      link: 'https://enciclopediaeconomica.com/metodo-peps/ ',
    },
    {
      tema: 'Formatos para reporte de recolección huevo de mesa',
      referencia:
        'Estrada Castaño, P. J. (2016). Manual de diligenciamiento de registros técnicos en el centro de los recursos naturales renovables la salada. Repositorio La Sallista. ',
      tipo: 'Manual',
      link:
        'http://repository.unilasallista.edu.co/dspace/bitstream/10567/1920/1/Manual_registros_tecnicos_LaSalada.pdf',
    },
    {
      tema: 'Novedades en la recolección de huevo de mesa',
      referencia:
        'Procem Consultores. (2020). Cómo elaborar un plan de contingencia. [video] YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/HOEPtwPPRaw',
    },
  ],
  glosario: [
    {
      termino: 'Inventarios',
      significado:
        'representan bienes corporales destinados a la venta en el curso normal de los negocios, así como aquellos que se hallen en proceso de producción o que se utilizarán o consumirá en la producción de otros que van a ser vendidos. (Decreto 2649, 1993, p.16)',
    },
    {
      termino: 'Planes de contingencia',
      significado:
        'establece una estrategia para el manejo y control de posibles emergencias asociadas a incidentes de contaminación o eventos que ponen en riesgo los recursos naturales y la integridad de las personas. (Angulo, 2010, p.83)',
    },
    {
      termino: 'Huevo para incubar',
      significado:
        'huevos de aves fecundados, aptos para la incubación y eclosión (nacimiento de aves). (Resolución 3650, 2014)',
    },
    {
      termino: 'Huevos en fárfara',
      significado:
        'la apariencia de la cáscara es la de una tela débil, lo cual los hace muy susceptibles a los golpes y a su pérdida total por derrames. En condiciones normales son producidos por pollitas que están iniciando ciclo de producción, pero debe tenerse en cuenta que muchas aves durante todo su ciclo colocan este tipo de huevos permanentemente. (Avicol, s.f)',
    },
  ],
  referencias: [
    {
      referencia:
        'Acosta, D., & Jaramillo, A. (2015). Manejo de ponedora comercial. Repositorio Sena. ',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/4617/Manejo_de_ponedora_comercial.PDF?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Angulo, J. (2010). Plan de manejo granja paraíso. Repositorio UPB. ',
      link:
        'https://repository.upb.edu.co/bitstream/handle/20.500.11912/1045/digital_18509.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Avícola. (2021). Sistemas de recogida y transporte de huevos. ',
      link:
        'https://www.elsitioavicola.com/articles/1992/manejo-de-la-produccian-de-huevos-de-calidad/',
    },
    {
      referencia:
        'Cataño, P. (2016). Manual de diligenciamiento de registros técnicos en el centro de los recursos naturales renovables la salada. Corporación Universitaria La Sallista. ',
      link:
        'http://repository.unilasallista.edu.co/dspace/bitstream/10567/1920/1/Manual_registros_tecnicos_LaSalada.pdf',
    },
    {
      referencia:
        'Cobb-vantress. (2018). Reproductoras Cobb. Guía de manejo. Página <em>web</em>.',
      link:
        'https://www.cobb-vantress.com/assets/Cobb-Files/cff8d901a4/Cobb-Breeder-Guide-Spanish.pdf',
    },
    {
      referencia:
        'Córdoba, A. C., y Carvajal, A. (2016). Propuesta de un sistema de control interno de inventarios en las pequeñas avícolas del municipio de Villa Rica Cauca. Universidad del Valle. ',
      link:
        'https://bibliotecadigital.univalle.edu.co/bitstream/handle/10893/13390/0554514.pdf?sequence=1',
    },
    {
      referencia:
        'Edopulpack. (2021). Clasificación de los huevos de gallina según el peso y el tipo de bandeja a utilizar. Ecopulpack. ',
      link:
        'https://twitter.com/JersonCuellarS/status/1383998330733170688?lang=zh-Hant',
    },
    {
      referencia:
        'Fenavi. (2019). Aspectos productivos y administrativos en la industria avícola. Fenavi. ',
      link:
        'https://fenavi.org/wp-content/uploads/2019/02/ASPECTOS-PRODUCTIVOS-Y-ADMINISTRATIVOS-EN-LA-INDUSTRIA-AV%C3%8DCOLA.pdf',
    },
    {
      referencia:
        'Navarro, J. (Junio de 2014). Definición de novedad. Definición ABC. ',
      link: 'https://www.definicionabc.com/ciencia/novedad.php',
    },
    {
      referencia:
        'Norma Técnica Colombiana NTC 1240. (12 de diciembre de 2011). [ICONTEC]. DocPlayer. ',
      link: 'https://docplayer.es/54870550-Norma-tecnica-colombiana-1240.html',
    },
    {
      referencia:
        'Ospina, J. C. (2015). Fundamentos de envases y embalajes. Repositorio Sena. ',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/2526/fundamentos_envases_embalajes.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Pedroza, J. (2005). Manual de producción avícola. Repositorio Sena. ',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/4271/avicultura_2005.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Resolución 3650. (24 de noviembre de 2014). Por medio de la cual se establecen los requisitos para el registro como productor de material genético aviar y expedición de licencias de venta de material genético aviar. [Instituto Colombiano Agropecuario ICA]. ',
      link:
        'https://www.ica.gov.co/getattachment/3c2f3642-85a5-4622-91b5-5a31597c2cb4/2014R3-(1).aspx',
    },
    {
      referencia:
        'Resolución 3651. (13 de noviembre de 2014). Por medio de la cual se establecen los requisitos para la certificación de granjas avícolas bioseguras de postura y/o levante y se dictan otras disposiciones. [Instituto Colombiano Agropecuario ICA]. ',
      link:
        'https://fenavi.org/wp-content/uploads/2018/04/RESOLUCION-3651-DE-2014-1.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Rafael Vargas Albarracín',
          cargo: 'Instructor',
          centro:
            'Regional Santander - Centro de Atención al Sector Agropecuario',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora instruccional',
          centro: 'Regional Distrito Capital. Centro de Gestión Industrial',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
