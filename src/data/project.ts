import type { Project } from '../interfaces/Portfolio';

export const db: Project[] = [
  {
    id: 1,
    title: 'INBTEL Comunicaciones',
    description: `Desarrollo de sitio web corporativo para INBTEL Comunicaciones, empresa de telecomunicaciones que ofrece servicios de internet por fibra óptica, telefonía y soluciones digitales para hogares y negocios. La plataforma muestra planes, servicios adicionales y canales de contacto, destacando su cobertura en la Zona Conurbada Tamaulipeca y alrededores.`,
    image: '/img/projects/inbtel.png',
    technologies: ['HTML', 'CSS', 'TypeScript', 'Vue.js 3', 'Bootstrap'],
    link: 'https://inbtel.com/',
    github: 'https://github.com/Acruzbautista501/inbtel-site'
  },
  {
    id: 2,
    title: 'Tuis',
    description: 'Desarrollo de sitio web informativo y de autoservicio para TUIS, plataforma de telefonía móvil que permite a los usuarios administrar su línea, realizar recargas, consultar información del servicio y acceder a atención a clientes desde un mismo entorno digital.',
    image: '/img/projects/tuis.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap'],
    link: 'https://tuis.com.mx/',
    github: 'https://github.com/Acruzbautista501/tuis-site'
  },
  {
    id: 3,
    title: 'Terro',
    description: 'Desarrollo de sitio web corporativo como demostración de diseño responsivo y organización de contenido para la presentación de servicios o productos, contando con un cotizador de precios. El sitio fue desplegado en Netlify como entorno de prueba, permitiendo una publicación rápida de un proyecto estático para mostrar prototipos funcionales o avances a clientes.',
    image: '/img/projects/terro.png',
    technologies: ['HTML', 'CSS', 'TypeScript', 'Vue.js 3', 'Bootstrap'],
    link: 'https://sitio-terro-prueba.netlify.app/',
    github: 'https://github.com/Acruzbautista501/website-terro-leon'
  },
  {
    id: 4,
    title: 'Almesag',
    description: 'Desarrollo de sitio web corporativo para Almesag S.A. de C.V., empresa mexicana especializada en obra eléctrica, telecomunicaciones y civil, con más de 10 años de experiencia en planificación, diseño y construcción de redes y proyectos técnicos. La plataforma presenta información sobre servicios, proyectos y contacto para clientes industriales y comerciales.',
    image: '/img/projects/almesag.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://almesag.com.mx/',
    github: 'https://github.com/Acruzbautista501/Almesag'
  },
  {
    id: 5,
    title: 'Casa del Río Zimatán',
    description: 'Desarrollo de sitio web informativo para Casa del Río Zimatán, un espacio de hospedaje campestre enfocado en brindar a los visitantes una experiencia de descanso en contacto con la naturaleza y el entorno del Río Zimatán. La plataforma presenta villas equipadas, servicios para eventos, restaurante campestre y medios de contacto para reservas.',
    image: '/img/projects/rio-zamapan.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://casadelriozimatan.com.mx/',
    github: 'https://github.com/Acruzbautista501/casa-del-rio-web-site.git'
  },
  {
    id: 6,
    title: 'Más Potencia Soluciones',
    description: 'Desarrollo de sitio web comercial enfocado en la promoción y venta de soluciones de energía portátil y respaldo eléctrico, incluyendo generadores y estaciones de energía recargables. La plataforma presenta catálogo de productos, información técnica y medios de contacto para cotización directa, destacando alternativas para mantener el suministro eléctrico ante fallas o apagones.',
    image: '/img/projects/mas-potencia.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://maspotencia.mx/',
    github: 'https://github.com/Acruzbautista501/mas-potencia-web'
  },
  {
    id: 7,
    title: 'Woah.CSS',
    description: 'Desarrollo de sitio demostrativo para Woah.CSS, un framework CSS creado para estandarizar y reutilizar componentes de interfaz como encabezados, banners, carruseles, formularios y secciones de contenido en distintos proyectos web. El sitio funciona como guía visual de estilos y componentes para agilizar la construcción de páginas promocionales.',
    image: '/img/projects/woahCss.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://woahcss.netlify.app/',
    github: 'https://github.com/Acruzbautista501/woah.CSS'
  },
  {
    id: 8,
    title: 'GuitarLA Vue.js 3',
    description: 'Desarrollo de aplicación web tipo e-commerce para la exhibición y gestión de guitarras, que permite visualizar productos, agregarlos al carrito y calcular totales dinámicamente mediante un sistema reactivo. El proyecto fue creado como práctica del ecosistema Vue para aplicar componentes, manejo de estado y comunicación entre vistas en una SPA moderna.',
    image: '/img/projects/guitarLA.png',
    technologies: ['HTML', 'CSS', 'TypeScript', 'Vue.js 3'],
    link: 'https://guitarla-vue-curso.netlify.app/',
    github: 'https://github.com/Acruzbautista501/Curso-Vue-3'
  },
  {
    id: 9,
    title: 'Admin Pacientes Vue.js 3',
    description: 'Desarrollo de aplicación web para la administración de pacientes, con funcionalidades para registrar, editar y eliminar información mediante formularios dinámicos en una SPA. El proyecto permitió aplicar arquitectura basada en componentes y manejo reactivo de datos con Vue, desplegado como sitio estático para acceso en línea.',
    image: '/img/projects/adminPacientes.png',
    technologies: ['HTML', 'CSS', 'TypeScript', 'Vue.js 3', 'Tailwind'],
    link: 'https://admin-pacientes-curso-vue.netlify.app/',
    github: 'https://github.com/Acruzbautista501/Curso-Vue-3'
  },  
  {
    id: 10,
    title: 'Admin Gastos Vue.js 3',
    description: 'Desarrollo de aplicación web para la administración y control de gastos personales, que permite registrar movimientos, categorizarlos y visualizar el balance de forma dinámica en una SPA. El proyecto se enfocó en el manejo reactivo del estado, componentes reutilizables y organización de datos en tiempo real.',
    image: '/img/projects/adminGastos.png',
    technologies: ['HTML', 'CSS', 'TypeScript', 'Vue.js 3', 'Tailwind'],
    link: 'https://admin-gastos-vue-3.netlify.app/',
    github: 'https://github.com/Acruzbautista501/Curso-Vue-3'
  },
  {
    id: 11,
    title: 'App Clima Vue.js 3',
    description: 'Desarrollo de aplicación web para consulta del clima en tiempo real, que permite buscar ciudades y visualizar información meteorológica mediante consumo de API externa dentro de una SPA construida con Vue 3. Este tipo de proyectos obtiene datos climáticos desde servicios como OpenWeather y muestra valores como temperatura, humedad o condiciones actuales dinámicamente en la interfaz.',
    image: '/img/projects/appClima.png',
    technologies: ['HTML', 'CSS', 'TypeScript', 'Vue.js 3', 'Tailwind'],
    link: '#',
    github: 'https://github.com/Acruzbautista501/Curso-Vue-3'
  },
  {
    id: 12,
    title: 'App Cripto Vue.js 3',
    description: 'Este proyecto es una aplicación web desarrollada con Vue.js que permite visualizar información relacionada con criptomonedas mediante una interfaz dinámica y reactiva. La plataforma consume datos externos y los presenta de forma clara, utilizando componentes reutilizables, manejo de estado y renderizado eficiente propio del ecosistema de Vue.',
    image: '/img/projects/appCripto.png',
    technologies: ['HTML', 'CSS', 'TypeScript', 'Vue.js 3', 'Tailwind'],
    link: 'https://app-clima-vue3.vercel.app/',
    github: 'https://github.com/Acruzbautista501/Curso-Vue-3.git'
  }, 
  {
    id: 13,
    title: 'App Admin Clientes Vue.js 3',
    description: 'Aplicación web tipo CRM desarrollada con Vue.js y TypeScript, enfocada en la gestión de clientes y el seguimiento de información mediante una interfaz dinámica y reactiva. El sistema permite organizar datos de manera estructurada, optimizando la interacción del usuario con componentes reutilizables y navegación fluida en una arquitectura moderna basada en SPA (Single Page Application).',
    image: '/img/projects/adminClientes.png',
    technologies: ['HTML', 'CSS', 'TypeScript', 'Vue.js 3', 'Tailwind'],
    link: 'https://crm-vuejs.netlify.app/',
    github: 'https://github.com/Acruzbautista501/Curso-Vue-3.git'
  },
  {
    id: 14,
    title: 'App Bebidas Vue.js 3',
    description: 'Aplicación web interactiva para la gestión y visualización de bebidas, desarrollada con Vue.js y TypeScript. Permite explorar distintas opciones mediante una interfaz dinámica y reactiva, aplicando componentes reutilizables, manejo de estado y renderizado eficiente en el cliente. El diseño es responsivo y enfocado en la experiencia del usuario, integrando buenas prácticas de desarrollo frontend moderno.',
    image: '/img/projects/bebidasApp.png',
    technologies: ['HTML', 'CSS', 'TypeScript', 'Vue.js 3', 'Tailwind'],
    link: 'https://bebidas-vue.netlify.app/',
    github: 'https://github.com/Acruzbautista501/Curso-Vue-3.git'
  },
  {
    id: 15,
    title: 'Sitio Desarrollador Freelancer',
    description: 'Sitio web tipo landing page enfocado en la presentación de servicios profesionales como desarrollador freelance. La página muestra información clara sobre el perfil, habilidades, servicios ofrecidos y formas de contacto, con un diseño moderno, responsivo y orientado a brindar una experiencia de usuario sencilla y profesional.',
    image: '/img/projects/freelanceLanding.png',
    technologies: ['HTML', 'CSS'],
    link: 'https://sitio-desarrollador-freelancer.netlify.app/',
    github: 'https://github.com/Acruzbautista501/sitio-web-freelancer'
  },    
  {
    id: 16,
    title: 'Tejas y Barros de León',
    description: 'Sitio web corporativo para la empresa Tejas y Barro de León, enfocado en la exhibición de materiales para construcción y decoración como tejas, pisos, azulejos, fachaletas, piedra, ladrillos y cantera. La plataforma presenta información de la empresa, catálogo de productos y medios de contacto para atención personalizada, con alcance de envíos a nivel nacional e internacional.',
    image: '/img/projects/tejas-y-barros.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap'],
    link: 'https://www.tejasybarro.com/',
    github: 'https://github.com/Acruzbautista501/Tejas-y-Barro-de-Leon'
  },
  {
    id: 17,
    title: 'El Delfín Magueras y Conexiones',
    description: 'Sitio web corporativo enfocado en la presentación y promoción de soluciones en mangueras, conexiones y productos industriales, mostrando su catálogo, información de la empresa y medios de contacto para clientes del sector comercial e industrial. La página está diseñada para ofrecer una navegación clara, destacar los productos disponibles y facilitar la comunicación con los usuarios interesados en sus servicios.',
    image: '/img/projects/elDelfin.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://www.eldelfinmangueras.com/',
    github: ''
  },
  {
    id: 18,
    title: 'Camaleón Shop MX',
    description: 'Sitio web tipo e-commerce enfocado en la exhibición de productos mediante catálogo digital, navegación intuitiva y estructura visual orientada a la compra en línea. El proyecto presenta una maquetación responsiva y componentes reutilizables para mostrar artículos, información y secciones comerciales, simulando el flujo básico de una tienda virtual.',
    image: '/img/projects/CamaleonShopMx.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'http://camaleon-shop-mx.netlify.app/',
    github: 'https://github.com/Acruzbautista501/Cameleon-Shop-MX'
  },
]