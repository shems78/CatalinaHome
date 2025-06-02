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
  quote: {
    title: string;
    subtitle: string;
    personalInfo: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    projectDetails: string;
    projectType: string;
    budget: string;
    timeline: string;
    description: string;
    features: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    projectTypeRequired: string;
    descriptionRequired: string;
    projectTypes: {
      website: string;
      ecommerce: string;
      mobileApp: string;
      desktopApp: string;
      consulting: string;
      maintenance: string;
      other: string;
    };
    budgetRanges: {
      small: string;
      medium: string;
      large: string;
      enterprise: string;
    };
    timelineOptions: {
      urgent: string;
      normal: string;
      flexible: string;
    };
    featureOptions: {
      responsive: string;
      cms: string;
      ecommerce: string;
      multilingual: string;
      seo: string;
      analytics: string;
      hosting: string;
      maintenance: string;
    };
  };
  servicePages: {
    webDev: {
      title: string;
      subtitle: string;
      hero: string;
      description: string;
      features: {
        title: string;
        responsive: { title: string; description: string; };
        seo: { title: string; description: string; };
        cms: { title: string; description: string; };
        performance: { title: string; description: string; };
      };
    };
    businessApps: {
      title: string;
      subtitle: string;
      hero: string;
      description: string;
      features: {
        title: string;
        mobile: { title: string; description: string; };
        desktop: { title: string; description: string; };
        web: { title: string; description: string; };
        integration: { title: string; description: string; };
      };
    };
    maintenance: {
      title: string;
      subtitle: string;
      hero: string;
      description: string;
      services: {
        title: string;
        preventive: { title: string; description: string; };
        corrective: { title: string; description: string; };
        security: { title: string; description: string; };
        monitoring: { title: string; description: string; };
      };
    };
    consulting: {
      title: string;
      subtitle: string;
      hero: string;
      description: string;
      services: {
        title: string;
        strategy: { title: string; description: string; };
        assessment: { title: string; description: string; };
        migration: { title: string; description: string; };
        security: { title: string; description: string; };
      };
    };
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
      title: 'Solutions IT modernes pour entreprises',
      subtitle: 'Transformez votre entreprise avec nos solutions technologiques innovantes et personnalisées',
      cta: 'Demander un devis',
    },
    services: {
      title: 'Nos Services',
      webDev: {
        title: 'Création de sites web',
        description: 'Sites vitrine, e-commerce, design responsive',
      },
      businessApps: {
        title: 'Applications métiers',
        description: 'Solutions mobiles et desktop sur mesure',
      },
      maintenance: {
        title: 'Maintenance',
        description: 'Support technique et maintenance corrective',
      },
      consulting: {
        title: 'Conseil IT',
        description: 'Accompagnement pour votre transformation digitale',
      },
    },
    projects: {
      title: 'Nos Réalisations',
      erp: {
        title: 'Système ERP ABC',
        description: 'Déploiement ERP pour une PME industrielle',
      },
      showcase: {
        title: 'Site vitrine DEF',
        description: 'Refonte pour un magasin d\'artisanat local',
      },
      analytics: {
        title: 'Dashboard Analytics GHI',
        description: 'Tableau de bord personnalisé pour suivi des ventes',
      },
      security: {
        title: 'Sécurité JKL',
        description: 'Audit et renforcement cybersécurité',
      },
    },
    about: {
      title: 'À propos de nous',
      whoWeAre: 'Qui sommes-nous ?',
      description: 'Une équipe passionnée d\'experts IT en Tunisie. Nous aidons les entreprises à grandir grâce à des solutions technologiques performantes.',
      values: 'Nos valeurs :',
      valuesText: 'Innovation – Fiabilité – Proximité',
    },
    contact: {
      title: 'Contactez-nous',
      name: 'Votre nom',
      email: 'Votre email',
      message: 'Votre message',
      send: 'Envoyer',
      sending: 'Envoi en cours...',
      success: 'Message envoyé avec succès !',
      error: 'Une erreur s\'est produite. Veuillez réessayer.',
      nameRequired: 'Veuillez saisir votre nom',
      emailRequired: 'Veuillez saisir votre email',
      emailInvalid: 'Veuillez saisir un email valide',
      messageRequired: 'Veuillez saisir votre message',
    },
    footer: {
      copyright: 'Catalina Home © 2025 - Tous droits réservés',
    },
    quote: {
      title: 'Demander un devis',
      subtitle: 'Décrivez votre projet et recevez une estimation personnalisée',
      personalInfo: 'Informations personnelles',
      name: 'Nom complet',
      email: 'Email',
      phone: 'Téléphone',
      company: 'Entreprise',
      projectDetails: 'Détails du projet',
      projectType: 'Type de projet',
      budget: 'Budget estimé',
      timeline: 'Délai souhaité',
      description: 'Description du projet',
      features: 'Fonctionnalités souhaitées',
      submit: 'Demander un devis',
      submitting: 'Envoi en cours...',
      success: 'Demande de devis envoyée avec succès !',
      error: 'Une erreur s\'est produite. Veuillez réessayer.',
      nameRequired: 'Veuillez saisir votre nom',
      emailRequired: 'Veuillez saisir votre email',
      emailInvalid: 'Veuillez saisir un email valide',
      projectTypeRequired: 'Veuillez sélectionner un type de projet',
      descriptionRequired: 'Veuillez décrire votre projet',
      projectTypes: {
        website: 'Site vitrine',
        ecommerce: 'Site e-commerce',
        mobileApp: 'Application mobile',
        desktopApp: 'Application desktop',
        consulting: 'Conseil IT',
        maintenance: 'Maintenance',
        other: 'Autre',
      },
      budgetRanges: {
        small: '1 000 € - 5 000 €',
        medium: '5 000 € - 15 000 €',
        large: '15 000 € - 50 000 €',
        enterprise: '50 000 € +',
      },
      timelineOptions: {
        urgent: 'Urgent (moins d\'1 mois)',
        normal: 'Normal (1-3 mois)',
        flexible: 'Flexible (plus de 3 mois)',
      },
      featureOptions: {
        responsive: 'Design responsive',
        cms: 'Système de gestion de contenu',
        ecommerce: 'Boutique en ligne',
        multilingual: 'Multilingue',
        seo: 'Optimisation SEO',
        analytics: 'Analytics',
        hosting: 'Hébergement',
        maintenance: 'Maintenance',
      },
    },
    servicePages: {
      webDev: {
        title: 'Création de sites web',
        subtitle: 'Sites web professionnels adaptés à vos besoins',
        hero: 'Créez votre présence digitale',
        description: 'Nous concevons et développons des sites web modernes et responsives qui aident votre entreprise à croître en ligne.',
        features: {
          title: 'Ce que nous offrons',
          responsive: {
            title: 'Design Responsive',
            description: 'Votre site sera parfait sur tous les appareils - ordinateur, tablette et mobile.'
          },
          seo: {
            title: 'Optimisé SEO',
            description: 'Construit avec les meilleures pratiques SEO pour une meilleure visibilité.'
          },
          cms: {
            title: 'Gestion de contenu',
            description: 'Interface d\'administration facile pour gérer votre contenu sans connaissances techniques.'
          },
          performance: {
            title: 'Haute performance',
            description: 'Temps de chargement rapides et performance optimisée pour une meilleure expérience utilisateur.'
          }
        }
      },
      businessApps: {
        title: 'Applications métiers',
        subtitle: 'Solutions logicielles sur mesure pour vos opérations',
        hero: 'Optimisez vos processus métiers',
        description: 'Nous développons des applications métiers personnalisées qui automatisent vos workflows et améliorent l\'efficacité.',
        features: {
          title: 'Types d\'applications',
          mobile: {
            title: 'Applications mobiles',
            description: 'Applications natives et cross-platform pour iOS et Android.'
          },
          desktop: {
            title: 'Applications desktop',
            description: 'Logiciels puissants pour Windows, Mac et Linux.'
          },
          web: {
            title: 'Applications web',
            description: 'Applications cloud accessibles depuis n\'importe quel navigateur.'
          },
          integration: {
            title: 'Intégration système',
            description: 'Connectez vos systèmes et bases de données existants en toute transparence.'
          }
        }
      },
      maintenance: {
        title: 'Maintenance IT',
        subtitle: 'Gardez vos systèmes performants avec nos services de maintenance',
        hero: 'Support IT fiable quand vous en avez besoin',
        description: 'Services de maintenance et support complets pour assurer le bon fonctionnement et la sécurité de votre infrastructure IT.',
        services: {
          title: 'Services de maintenance',
          preventive: {
            title: 'Maintenance préventive',
            description: 'Vérifications et mises à jour régulières pour prévenir les problèmes.'
          },
          corrective: {
            title: 'Maintenance corrective',
            description: 'Résolution rapide des problèmes techniques et pannes système.'
          },
          security: {
            title: 'Mises à jour sécurité',
            description: 'Correctifs de sécurité réguliers et évaluations de vulnérabilités.'
          },
          monitoring: {
            title: 'Surveillance 24/7',
            description: 'Surveillance continue de vos systèmes pour une performance optimale.'
          }
        }
      },
      consulting: {
        title: 'Conseil IT',
        subtitle: 'Conseil stratégique IT pour votre transformation digitale',
        hero: 'Transformez votre entreprise avec notre expertise IT',
        description: 'Services de conseil IT stratégique pour vous aider à prendre des décisions technologiques éclairées.',
        services: {
          title: 'Services de conseil',
          strategy: {
            title: 'Planification stratégique IT',
            description: 'Développement de stratégies IT complètes alignées sur vos objectifs business.'
          },
          assessment: {
            title: 'Évaluation technologique',
            description: 'Évaluation de votre infrastructure IT actuelle et identification d\'opportunités d\'amélioration.'
          },
          migration: {
            title: 'Migration cloud',
            description: 'Planification et exécution de migrations fluides vers les plateformes cloud.'
          },
          security: {
            title: 'Conseil sécurité',
            description: 'Évaluation et amélioration de votre posture cybersécurité.'
          }
        }
      }
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
    quote: {
      title: 'Request a Quote',
      subtitle: 'Describe your project and receive a personalized estimate',
      personalInfo: 'Personal Information',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      company: 'Company',
      projectDetails: 'Project Details',
      projectType: 'Project Type',
      budget: 'Estimated Budget',
      timeline: 'Desired Timeline',
      description: 'Project Description',
      features: 'Desired Features',
      submit: 'Request Quote',
      submitting: 'Submitting...',
      success: 'Quote request sent successfully!',
      error: 'An error occurred. Please try again.',
      nameRequired: 'Please enter your name',
      emailRequired: 'Please enter your email',
      emailInvalid: 'Please enter a valid email',
      projectTypeRequired: 'Please select a project type',
      descriptionRequired: 'Please describe your project',
      projectTypes: {
        website: 'Showcase Website',
        ecommerce: 'E-commerce Site',
        mobileApp: 'Mobile Application',
        desktopApp: 'Desktop Application',
        consulting: 'IT Consulting',
        maintenance: 'Maintenance',
        other: 'Other',
      },
      budgetRanges: {
        small: '$1,000 - $5,000',
        medium: '$5,000 - $15,000',
        large: '$15,000 - $50,000',
        enterprise: '$50,000+',
      },
      timelineOptions: {
        urgent: 'Urgent (less than 1 month)',
        normal: 'Normal (1-3 months)',
        flexible: 'Flexible (more than 3 months)',
      },
      featureOptions: {
        responsive: 'Responsive Design',
        cms: 'Content Management System',
        ecommerce: 'Online Store',
        multilingual: 'Multilingual',
        seo: 'SEO Optimization',
        analytics: 'Analytics',
        hosting: 'Hosting',
        maintenance: 'Maintenance',
      },
    },
    servicePages: {
      webDev: {
        title: 'Website Development',
        subtitle: 'Professional websites tailored to your business needs',
        hero: 'Create Your Digital Presence',
        description: 'We design and develop modern, responsive websites that help your business grow online.',
        features: {
          title: 'What We Offer',
          responsive: {
            title: 'Responsive Design',
            description: 'Your website will look perfect on all devices - desktop, tablet, and mobile.'
          },
          seo: {
            title: 'SEO Optimized',
            description: 'Built with search engine optimization best practices for better visibility.'
          },
          cms: {
            title: 'Content Management',
            description: 'Easy-to-use admin panel to manage your content without technical knowledge.'
          },
          performance: {
            title: 'High Performance',
            description: 'Fast loading times and optimized performance for better user experience.'
          }
        }
      },
      businessApps: {
        title: 'Business Applications',
        subtitle: 'Custom software solutions for your business operations',
        hero: 'Streamline Your Business Processes',
        description: 'We develop custom business applications that automate your workflows and improve efficiency.',
        features: {
          title: 'Application Types',
          mobile: {
            title: 'Mobile Applications',
            description: 'Native and cross-platform mobile apps for iOS and Android.'
          },
          desktop: {
            title: 'Desktop Applications',
            description: 'Powerful desktop software for Windows, Mac, and Linux.'
          },
          web: {
            title: 'Web Applications',
            description: 'Cloud-based applications accessible from any browser.'
          },
          integration: {
            title: 'System Integration',
            description: 'Connect your existing systems and databases seamlessly.'
          }
        }
      },
      maintenance: {
        title: 'IT Maintenance & Support',
        subtitle: 'Keep your systems running smoothly with our maintenance services',
        hero: 'Reliable IT Support When You Need It',
        description: 'Comprehensive maintenance and support services to ensure your IT infrastructure runs smoothly and securely.',
        services: {
          title: 'Maintenance Services',
          preventive: {
            title: 'Preventive Maintenance',
            description: 'Regular system checks and updates to prevent issues before they occur.'
          },
          corrective: {
            title: 'Corrective Maintenance',
            description: 'Quick resolution of technical issues and system failures.'
          },
          security: {
            title: 'Security Updates',
            description: 'Regular security patches and vulnerability assessments.'
          },
          monitoring: {
            title: '24/7 Monitoring',
            description: 'Continuous monitoring of your systems for optimal performance.'
          }
        }
      },
      consulting: {
        title: 'IT Consulting',
        subtitle: 'Strategic IT guidance for your digital transformation',
        hero: 'Transform Your Business with Expert IT Guidance',
        description: 'Strategic IT consulting services to help you make informed technology decisions.',
        services: {
          title: 'Consulting Services',
          strategy: {
            title: 'IT Strategy Planning',
            description: 'Develop comprehensive IT strategies aligned with your business goals.'
          },
          assessment: {
            title: 'Technology Assessment',
            description: 'Evaluate your current IT infrastructure and identify improvement opportunities.'
          },
          migration: {
            title: 'Cloud Migration',
            description: 'Plan and execute smooth migration to cloud platforms.'
          },
          security: {
            title: 'Security Consulting',
            description: 'Assess and improve your cybersecurity posture.'
          }
        }
      }
    },
  },
};