export type Language = 'fr' | 'en';

export interface Translations {
  header: {
    services: string;
    projects: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    webDev: {
      title: string;
      description: string;
    };
    businessApps: {
      title: string;
      description: string;
    };
    maintenance: {
      title: string;
      description: string;
    };
    consulting: {
      title: string;
      description: string;
    };
  };
  projects: {
    title: string;
    erp: {
      title: string;
      description: string;
    };
    showcase: {
      title: string;
      description: string;
    };
    analytics: {
      title: string;
      description: string;
    };
    security: {
      title: string;
      description: string;
    };
  };
  about: {
    title: string;
    whoWeAre: string;
    description: string;
    values: string;
    valuesText: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    messageRequired: string;
  };
  footer: {
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    header: {
      services: 'Services',
      projects: 'Projets',
      about: 'À propos',
      contact: 'Contact',
    },
    hero: {
      title: 'Solutions informatiques modernes pour entreprises',
      subtitle: 'Transformez votre entreprise avec nos solutions technologiques innovantes et personnalisées',
      cta: 'Obtenir un devis',
    },
    services: {
      title: 'Nos Services',
      webDev: {
        title: 'Création de sites web',
        description: 'Sites vitrines, e-commerce, responsives',
      },
      businessApps: {
        title: 'Applications métiers',
        description: 'Solutions mobiles et desktop adaptées',
      },
      maintenance: {
        title: 'Maintenance',
        description: 'Assistance technique et corrective',
      },
      consulting: {
        title: 'Conseil IT',
        description: 'Accompagnement dans votre transformation digitale',
      },
    },
    projects: {
      title: 'Nos Réalisations',
      erp: {
        title: 'ERP ABC',
        description: 'Déploiement d\'un ERP pour une PME industrielle',
      },
      showcase: {
        title: 'Site Vitrine DEF',
        description: 'Refonte pour une boutique locale artisanale',
      },
      analytics: {
        title: 'Dashboard Analytics GHI',
        description: 'Tableau de bord personnalisé pour le suivi des ventes',
      },
      security: {
        title: 'Sécurité JKL',
        description: 'Audit et renforcement de la cybersécurité',
      },
    },
    about: {
      title: 'À propos',
      whoWeAre: 'Qui sommes-nous ?',
      description: 'Une équipe passionnée d\'experts IT en Tunisie. Nous aidons les entreprises à se développer grâce à des solutions technologiques performantes.',
      values: 'Nos valeurs :',
      valuesText: 'Innovation – Fiabilité – Proximité',
    },
    contact: {
      title: 'Contactez-nous',
      name: 'Votre nom',
      email: 'Votre email',
      message: 'Votre message',
      send: 'Envoyer',
      sending: 'Envoi...',
      success: 'Message envoyé avec succès !',
      error: 'Une erreur s\'est produite. Veuillez réessayer.',
      nameRequired: 'Veuillez entrer votre nom',
      emailRequired: 'Veuillez entrer votre email',
      emailInvalid: 'Veuillez entrer un email valide',
      messageRequired: 'Veuillez entrer votre message',
    },
    footer: {
      copyright: 'Catalina Home © 2025 - Tous droits réservés',
    },
  },
  en: {
    header: {
      services: 'Services',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Modern IT Solutions for Businesses',
      subtitle: 'Transform your business with our innovative and customized technology solutions',
      cta: 'Get a Quote',
    },
    services: {
      title: 'Our Services',
      webDev: {
        title: 'Website Development',
        description: 'Showcase sites, e-commerce, responsive design',
      },
      businessApps: {
        title: 'Business Applications',
        description: 'Custom mobile and desktop solutions',
      },
      maintenance: {
        title: 'Maintenance',
        description: 'Technical and corrective support',
      },
      consulting: {
        title: 'IT Consulting',
        description: 'Support for your digital transformation',
      },
    },
    projects: {
      title: 'Our Achievements',
      erp: {
        title: 'ABC ERP System',
        description: 'ERP deployment for an industrial SME',
      },
      showcase: {
        title: 'DEF Showcase Website',
        description: 'Redesign for a local craft shop',
      },
      analytics: {
        title: 'GHI Analytics Dashboard',
        description: 'Custom dashboard for sales tracking',
      },
      security: {
        title: 'JKL Security',
        description: 'Cybersecurity audit and enhancement',
      },
    },
    about: {
      title: 'About Us',
      whoWeAre: 'Who are we?',
      description: 'A passionate team of IT experts in Tunisia. We help businesses grow through high-performance technological solutions.',
      values: 'Our values:',
      valuesText: 'Innovation – Reliability – Proximity',
    },
    contact: {
      title: 'Contact Us',
      name: 'Your name',
      email: 'Your email',
      message: 'Your message',
      send: 'Send',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'An error occurred. Please try again.',
      nameRequired: 'Please enter your name',
      emailRequired: 'Please enter your email',
      emailInvalid: 'Please enter a valid email',
      messageRequired: 'Please enter your message',
    },
    footer: {
      copyright: 'Catalina Home © 2025 - All rights reserved',
    },
  },
};
