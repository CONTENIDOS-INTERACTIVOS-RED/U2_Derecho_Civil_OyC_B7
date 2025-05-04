export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'El contrato',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El contrato',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto y evolución',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Elementos del contrato',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Diferencia entre elementos y requisitos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Capacidad legal ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿Qué se entiende por capacidad legal?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Protección constitucional y enfoque diferencial',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Nulidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Nulidad absoluta y relativa',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Efectos de la nulidad',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Lesión enorme',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Fundamento normativo',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: '¿Qué es una lesión enorme?',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Elementos esenciales de la lesión enorme',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Consecuencias jurídicas y acción',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Relación con otros vicios y su función social',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Arnau Moya, F. (2016). Lecciones de derecho civil II: obligaciones y contratos: ( ed.). D - Universitat Jaume I. Servei de Comunicació i Publicacions. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/51617',
    },
    {
      referencia:
        'Cordero Lobato, E. & Marín López, M. J. (2018). Lecciones de derecho civil: Derecho de obligaciones y contratos en general: (3 ed.). Difusora Larousse - Editorial Tecnos. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/123148',
    },
    {
      referencia:
        'Lacruz Berdejo, J. L. (2013). Elementos de derecho civil. Tomo II: derecho de obligaciones. Volumen 2: contratos y cuasicontratos: (5 ed.). Dykinson. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/56942 ',
    },
  ],
  glosario: [
    {
      termino: 'Capacidad legal',
      significado:
        'Es la aptitud reconocida por la ley para adquirir derechos y contraer obligaciones válidamente por cuenta propia. En el ámbito contractual, se refiere a la posibilidad que tiene una persona de celebrar contratos válidos sin requerir autorización de un tercero. La ley presume que toda persona mayor de edad es capaz, salvo que haya sido declarada judicialmente incapaz.',
    },
    {
      termino: 'Causa',
      significado:
        'Se entiende como la razón jurídica que justifica la obligación asumida en el contrato. Es el fin inmediato que persigue cada parte al contratar. Por ejemplo, en una compraventa, la causa para el comprador es obtener el bien y para el vendedor es recibir el dinero. La causa debe ser lícita, real y existente para que el contrato sea válido.',
    },
    {
      termino: 'Cláusulas abusivas',
      significado:
        'Son aquellas disposiciones contractuales impuestas unilateralmente que generan un desequilibrio injustificado en perjuicio de una de las partes, generalmente la más débil. Aunque no siempre invalidan el contrato en su totalidad, pueden ser anuladas parcialmente cuando vulneran principios de equidad y buena fe.',
    },
    {
      termino: 'Compensación económica',
      significado:
        'Cuando la restitución material no es posible (por ejemplo, porque el bien ya no existe), se ordena una compensación en dinero para reparar el daño causado. Esto ocurre como efecto de la nulidad o en casos de lesión enorme, y busca evitar que alguna parte se enriquezca injustamente.',
    },
    {
      termino: 'Consentimiento',
      significado:
        'Es el acuerdo libre y consciente de las partes para obligarse jurídicamente. Se manifiesta mediante la oferta y la aceptación. Para ser válido, debe estar exento de vicios como el error, la fuerza o el dolo. Es un elemento esencial sin el cual no puede formarse el contrato.',
    },
    {
      termino: 'Contrato',
      significado:
        'Es un acuerdo de voluntades entre dos o más personas, destinado a crear, modificar o extinguir obligaciones. Es la principal fuente de obligaciones en el Derecho Civil y se rige por los principios de autonomía de la voluntad, licitud, y buena fe contractual. ',
    },
    {
      termino: 'Contrato conmutativo',
      significado:
        'Es aquel en el que las prestaciones recíprocas de las partes son conocidas y determinadas desde el momento de su celebración. Se diferencia del contrato aleatorio, en el cual el beneficio o pérdida depende de un hecho futuro o incierto. La compraventa es un ejemplo típico de contrato conmutativo.',
    },
    {
      termino: 'Contrato típico',
      significado:
        'Se refiere a los contratos expresamente regulados por la ley, como la compraventa, el arrendamiento, la sociedad o el comodato. A diferencia de los contratos atípicos o innominados, los típicos tienen una estructura legal predefinida.',
    },
    {
      termino: 'Contrato válido',
      significado:
        'Es aquel que se ha celebrado cumpliendo con todos los elementos esenciales y requisitos legales exigidos por el ordenamiento jurídico. Un contrato válido produce efectos jurídicos y puede ser ejecutado judicialmente',
    },
    {
      termino: 'Dolo',
      significado:
        'Es el engaño deliberado utilizado para inducir a otra persona a contratar. Se configura como un vicio del consentimiento cuando una parte oculta información relevante o utiliza artificios para manipular la voluntad de la otra. Cuando se prueba el dolo, el contrato puede ser anulado por nulidad relativa.',
    },
    {
      termino: 'Elemento esencial',
      significado:
        'Son aquellos componentes sin los cuales el contrato no puede existir: el consentimiento, el objeto y la causa. Su ausencia impide que el contrato se configure jurídicamente. A diferencia de los requisitos, su falta implica la inexistencia del contrato.',
    },
    {
      termino: 'Error',
      significado:
        'Es una falsa representación de la realidad que afecta el consentimiento de una de las partes. Puede recaer sobre la naturaleza del contrato, el objeto o una calidad esencial del mismo. Si es esencial y determinante, constituye un vicio que permite anular el contrato.',
    },
    {
      termino: 'Lesión enorme',
      significado:
        'Figura jurídica que permite rescindir un contrato conmutativo cuando existe una desproporción económica grave entre las prestaciones de las partes. En la compraventa de inmuebles, se presume si el precio pagado es inferior a la mitad del valor real del bien. Protege a quien resulta excesivamente perjudicado.',
    },
    {
      termino: 'Nulidad',
      significado:
        'Es la sanción jurídica que se aplica a un contrato que ha sido celebrado sin cumplir con los requisitos legales para su validez. Puede ser absoluta o relativa, dependiendo del tipo de interés afectado. Su declaración produce efectos retroactivos y obliga a las partes a restituir lo recibido.',
    },
    {
      termino: 'Nulidad absoluta',
      significado:
        'Se produce cuando el contrato viola normas imperativas, afecta el orden público o carece de elementos esenciales. Puede ser alegada por cualquier persona interesada, incluso por el juez de oficio, y no prescribe. Su efecto es que el contrato se tiene como nunca celebrado.',
    },
    {
      termino: 'Nulidad relativa',
      significado:
        'Se origina cuando el contrato presenta defectos que afectan solo a una de las partes, como los vicios del consentimiento o la incapacidad relativa. Solo puede ser alegada por la parte afectada y prescribe en cuatro años. El contrato se presume válido hasta que se declare la nulidad.',
    },
    {
      termino: 'Objeto',
      significado:
        'Es la prestación que cada parte se compromete a dar, hacer o abstenerse de hacer. Debe ser lícito, posible y determinado o determinable. Si el objeto es ilícito, el contrato será nulo. Constituye uno de los elementos esenciales del contrato.',
    },
    {
      termino: 'Orden público',
      significado:
        'Conjunto de principios y normas que garantizan el funcionamiento básico de la sociedad y que no pueden ser modificados por la voluntad de las partes. Los contratos que lo vulneren, directa o indirectamente, son nulos.',
    },
    {
      termino: 'Retroactividad',
      significado:
        'Principio según el cual la nulidad de un contrato implica que este se considera inexistente desde el momento de su celebración. Las partes deben devolverse mutuamente lo que se hayan entregado, y si no es posible, se aplica compensación económica.',
    },
    {
      termino: 'Vicios del consentimiento',
      significado:
        'Son circunstancias que afectan la validez del consentimiento, ya sea por error, fuerza o dolo. Cuando están presentes, impiden que la voluntad se forme de manera libre y consciente, lo que permite solicitar la nulidad relativa del contrato.',
    },
  ],
}
