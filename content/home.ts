// --- Shared ---
export interface CtaItem {
  label: string;
  href: string;
  variant: 'primary' | 'outline' | 'ghost';
}

export type AccentColor = 'green' | 'terra' | 'lila';

// --- Hero ---
export interface HeroContent {
  headline: [string, string];
  sub: [string, string];
  closing: string;
  ctas: [CtaItem, CtaItem, CtaItem];
}

// --- Trust Bar ---
export interface TrustBarContent {
  label: string;
  companies: string[];
}

// --- Programs ---
export interface ProgramCard {
  number: string;
  name: string;
  subtitle: string;
  description: string;
  benefits: string[];
  cta: string;
  href: string;
  accent: AccentColor;
}

export interface ProgramasContent {
  label: string;
  heading: string;
  cards: [ProgramCard, ProgramCard, ProgramCard];
}

// --- Stats ---
export interface StatItem {
  value: string;
  label: string;
}

export interface StatsContent {
  items: [StatItem, StatItem, StatItem, StatItem];
}

// --- Metodología ---
export interface MetodologiaStep {
  number: string;
  title: string;
  body: string;
}

export interface MetodologiaContent {
  label: string;
  heading: string;
  steps: [MetodologiaStep, MetodologiaStep, MetodologiaStep, MetodologiaStep];
}

// --- Diferencial ---
export interface DiferencialContent {
  label: string;
  heading: [string, string];
  points: string[];
}

// --- Testimonios ---
export interface TestimonioItem {
  quote: string;
  author: string;
  role: string;
}

export interface TestimoniosContent {
  label: string;
  heading: string;
  items: TestimonioItem[];
}

// --- CTA Final ---
export interface CtaFinalContent {
  headingLine1: string;
  headingLine2: string;
  accentLine: string;
  body: string;
  ctas: [CtaItem, CtaItem];
}

// --- Root ---
export interface HomeContent {
  hero: HeroContent;
  trustBar: TrustBarContent;
  programas: ProgramasContent;
  stats: StatsContent;
  metodologia: MetodologiaContent;
  diferencial: DiferencialContent;
  testimonios: TestimoniosContent;
  ctaFinal: CtaFinalContent;
}

export const homeContent: HomeContent = {
  hero: {
    headline: ['No es falta de disciplina.', 'Es falta de dirección.'],
    sub: ['Sabes lo que tienes que hacer.', 'Pero no lo estás ejecutando.'],
    closing: 'Aquí es donde eso cambia.',
    ctas: [
      { label: 'Empezar ahora', href: '#contacto', variant: 'primary' },
      { label: 'Ver programas', href: '#programas', variant: 'outline' },
      { label: 'Contacto', href: '/contacto', variant: 'ghost' },
    ],
  },

  trustBar: {
    label: 'Han confiado en Inercia Lab',
    companies: ['GO PORT', 'METALES CASTILLO'],
  },

  programas: {
    label: 'Nuestros Programas',
    heading: 'Tres caminos. Un objetivo: resultados reales y sostenibles.',
    cards: [
      {
        number: '01',
        name: 'ACCIÓN REAL',
        subtitle: 'Programa individual',
        description:
          'Deja de planear. Empieza a ejecutar. Un programa intensivo de 30 días para pasar del bloqueo a la acción real.',
        benefits: ['Claridad y propósito', 'Regulación emocional', 'Hábitos y acción sostenida', 'Resultados en 30 días'],
        cta: 'Ver programa',
        href: '/programas/accion-real',
        accent: 'green',
      },
      {
        number: '02',
        name: 'EQUIPOS EN ACCIÓN',
        subtitle: 'Programa para empresas',
        description: 'Equipos que se comunican, colaboran y ejecutan con enfoque.',
        benefits: ['Comunicación efectiva', 'Productividad y enfoque', 'Bienestar y desempeño', 'ROI medible'],
        cta: 'Para empresas',
        href: '/programas/equipos-en-accion',
        accent: 'terra',
      },
      {
        number: '03',
        name: 'BIENESTAR SOSTENIBLE',
        subtitle: 'Programa de bienestar',
        description: 'Rendir sin romperte. Equilibrio real para una vida con sentido.',
        benefits: [
          'Regulación emocional profunda',
          'Prevención del burnout',
          'Equilibrio vida–trabajo',
          'Bienestar como estilo de vida',
        ],
        cta: 'Explorar bienestar',
        href: '/programas/bienestar-sostenible',
        accent: 'lila',
      },
    ],
  },

  stats: {
    items: [
      { value: '+80%', label: 'de participantes completan sus metas del programa' },
      { value: '30', label: 'días para resultados visibles y concretos' },
      { value: '3x', label: 'más avance vs. intentos anteriores' },
      { value: '+1500', label: 'personas y equipos transformados' },
    ],
  },

  metodologia: {
    label: 'Nuestra Metodología',
    heading: 'Un proceso probado para generar cambios reales.',
    steps: [
      {
        number: '01',
        title: 'Diagnóstico',
        body: 'Entendemos tu situación actual, desafíos y objetivos para definir el punto de partida.',
      },
      {
        number: '02',
        title: 'Claridad',
        body: 'Identificamos lo que realmente importa, eliminamos el ruido y definimos prioridades estratégicas.',
      },
      {
        number: '03',
        title: 'Intervención',
        body: 'Aplicamos herramientas y estrategias prácticas adaptadas a tu contexto para generar cambio real.',
      },
      {
        number: '04',
        title: 'Ejecución Real',
        body: 'Implementamos, medimos y ajustamos para asegurar resultados sostenibles en el tiempo.',
      },
    ],
  },

  diferencial: {
    label: '¿Por qué elegir Inercia Lab?',
    heading: ['No es motivación.', 'Es transformación.'],
    points: [
      'Metodología basada en ciencia y experiencia real',
      'Programas 100% prácticos y aplicables',
      'Resultados medibles y sostenibles',
      'Acompañamiento cercano y humano',
      'Adaptado a personas, equipos y organizaciones',
    ],
  },

  testimonios: {
    label: 'Historias Reales',
    heading: 'Personas reales. Resultados reales.',
    items: [
      {
        quote:
          'Llevaba años intentando cambiar mis hábitos y terminar mis proyectos. Acción Real me dio las herramientas, el acompañamiento y la estructura que necesitaba. Por primera vez, completé lo que empecé.',
        author: 'Mariana R.',
        role: 'Participante de Acción Real',
      },
      {
        quote: 'Pasé de tener ideas a ejecutar un proyecto completo en semanas. Nunca pensé que sería tan directo y aplicable.',
        author: 'Carlos M.',
        role: 'Participante de Acción Real',
      },
      {
        quote: 'El equipo cambió su forma de trabajar. Más claridad, menos fricción, más resultados.',
        author: 'Dirección Operativa',
        role: 'Equipos en Acción',
      },
    ],
  },

  ctaFinal: {
    headingLine1: 'ES TU MOMENTO.',
    headingLine2: 'EL SIGUIENTE PASO',
    accentLine: 'EXISTE.',
    body: 'No esperes a tener todas las condiciones perfectas. Empieza hoy a construir tu vida, el equipo o la organización que realmente quieres.',
    ctas: [
      { label: 'Agendar sesión', href: '/contacto', variant: 'primary' },
      { label: 'Conoce los programas', href: '#programas', variant: 'outline' },
    ],
  },
};
