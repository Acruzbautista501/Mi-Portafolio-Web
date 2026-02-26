import type { Project } from '../interfaces/Portfolio';

export const db: Project[] = [
  {
    id: 1,
    title: 'INBTEL Comunicaciones',
    description: `Desarrollo de sitio web corporativo para INBTEL Comunicaciones, empresa de telecomunicaciones que ofrece servicios de internet por fibra óptica, telefonía y soluciones digitales para hogares y negocios. La plataforma muestra planes, servicios adicionales y canales de contacto, destacando su cobertura en la Zona Conurbada Tamaulipeca y alrededores.`,
    image: '/img/projects/inbtel.png',
    technologies: ['HTML', 'CSS', 'TypeScript', 'Vue.js 3', 'Bootstrap'],
    link: '#'
  },
  {
    id: 2,
    title: 'Tuis',
    description: 'Desarrollo de sitio web informativo y de autoservicio para TUIS, plataforma de telefonía móvil que permite a los usuarios administrar su línea, realizar recargas, consultar información del servicio y acceder a atención a clientes desde un mismo entorno digital.',
    image: '/img/projects/tuis.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap'],
    link: 'https://inbtel.com/'
  },
  {
    id: 3,
    title: 'Terro',
    description: 'Desarrollo de sitio web corporativo como demostración de diseño responsivo y organización de contenido para la presentación de servicios o productos, contando con un cotizador de precios. El sitio fue desplegado en Netlify como entorno de prueba, permitiendo una publicación rápida de un proyecto estático para mostrar prototipos funcionales o avances a clientes.',
    image: '/img/projects/terro.png',
    technologies: ['HTML', 'CSS', 'TypeScript', 'Vue.js 3', 'Bootstrap'],
    link: 'https://sitio-terro-prueba.netlify.app/'
  },
  {
    id: 4,
    title: 'Almesag',
    description: 'Desarrollo de sitio web corporativo para Almesag S.A. de C.V., empresa mexicana especializada en obra eléctrica, telecomunicaciones y civil, con más de 10 años de experiencia en planificación, diseño y construcción de redes y proyectos técnicos. La plataforma presenta información sobre servicios, proyectos y contacto para clientes industriales y comerciales.',
    image: '/img/projects/almesag.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://almesag.com.mx/'
  },
  {
    id: 5,
    title: 'Casa del Río Zimatán',
    description: 'Desarrollo de sitio web informativo para Casa del Río Zimatán, un espacio de hospedaje campestre enfocado en brindar a los visitantes una experiencia de descanso en contacto con la naturaleza y el entorno del Río Zimatán. La plataforma presenta villas equipadas, servicios para eventos, restaurante campestre y medios de contacto para reservas.',
    image: '/img/projects/rio-zamapan.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: '#'
  },
  {
    id: 6,
    title: 'Más Potencia Soluciones',
    description: 'Desarrollo de sitio web comercial enfocado en la promoción y venta de soluciones de energía portátil y respaldo eléctrico, incluyendo generadores y estaciones de energía recargables. La plataforma presenta catálogo de productos, información técnica y medios de contacto para cotización directa, destacando alternativas para mantener el suministro eléctrico ante fallas o apagones.',
    image: '/img/projects/mas-potencia.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: '#'
  },
  // {
  //   id: 4,
  //   title: 'Tejas y Barros de León',
  //   description: 'Desarrollo de sitio web corporativo para la empresa Tejas y Barro de León, enfocado en la exhibición de materiales para construcción y decoración como tejas, pisos, azulejos, fachaletas, piedra, ladrillos y cantera. La plataforma presenta información de la empresa, catálogo de productos y medios de contacto para atención personalizada, con alcance de envíos a nivel nacional e internacional',
  //   image: '/img/projects/tejas-y-barros.png',
  //   technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap'],
  //   link: '#'
  // },
]