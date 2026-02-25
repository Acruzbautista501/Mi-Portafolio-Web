import type { Project } from '../interfaces/Portfolio';

export const db: Project[] = [
  {
    id: 1,
    title: 'Tejas y Barros de León',
    description: 'Desarrollo de sitio web corporativo para la empresa Tejas y Barro de León, enfocado en la exhibición de materiales para construcción y decoración como tejas, pisos, azulejos, fachaletas, piedra, ladrillos y cantera. La plataforma presenta información de la empresa, catálogo de productos y medios de contacto para atención personalizada, con alcance de envíos a nivel nacional e internacional',
    image: '/img/projects/tejas-y-barros.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap'],
    link: '#'
  },
  {
    id: 2,
    title: 'Call Center Analytics',
    description: 'Real-time VICIdial reporting and monitoring platform.',
    image: '/images/callcenter.jpg',
    technologies: ['Vue', 'CoreUI', 'Asterisk'],
    link: '#'
  },
  {
    id: 3,
    title: 'DID Manager',
    description: 'Provisioning and routing management for SIP trunks.',
    image: '/images/did.jpg',
    technologies: ['Vue', 'TypeScript', 'API'],
    link: '#'
  },
  {
    id: 4,
    title: 'Billing Portal',
    description: 'Automated telecom billing and invoicing.',
    image: '/images/billing.jpg',
    technologies: ['Node', 'MySQL', 'Stripe'],
    link: '#'
  },
  {
    id: 5,
    title: 'Realtime Monitor',
    description: 'Live system health monitoring dashboard.',
    image: '/images/monitor.jpg',
    technologies: ['Vue', 'Socket.io'],
    link: '#'
  },
  {
    id: 6,
    title: 'Routing Engine',
    description: 'Dynamic least-cost routing for VoIP.',
    image: '/images/routing.jpg',
    technologies: ['TypeScript', 'Redis'],
    link: '#'
  }
]