import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      language: {
        label: 'Language',
        options: {
          en: 'English',
          fr: 'Français',
          es: 'Español',
          pt: 'Português',
          de: 'Deutsch'
        }
      },
      nav: {
        home: '01. Home',
        chill: '02. Chill With Me',
        resume: '03. Résumé',
        contact: '04. Contact',
        toggle: 'Menu'
      },
      home: {
        greeting: "Hi, I'm Azer Ltifi",
        role: 'Full Stack Developer',
        tagline: 'I build things for the web.',
        cta: {
          primary: 'View My Work',
          secondary: 'Get In Touch'
        },
        highlightsTitle: 'What I Bring To The Team',
        journeyTitle: 'Recent Wins On The Ground',
        highlights: [
          {
            icon: 'server',
            title: 'Back-end Craftsmanship',
            description: 'Designing resilient APIs and modular services with Spring Boot, Django, and PostgreSQL that scale with product ambitions.'
          },
          {
            icon: 'cloud',
            title: 'Cloud-Native Delivery',
            description: 'Automating release pipelines across GCP, AWS, Docker, and Kubernetes so features ship safely and observably.'
          },
          {
            icon: 'robot',
            title: 'Applied AI & NLP',
            description: 'Creating language-driven experiences by blending practical machine learning with measurable business outcomes.'
          },
          {
            icon: 'team',
            title: 'Human-Friendly Collaboration',
            description: 'Coaching squads, aligning stakeholders, and translating complex roadmaps into shared wins for teams and customers.'
          }
        ],
        journey: [
          {
            period: '2024 · Tabhotel',
            title: 'Hospitality SaaS Evolution',
            description: 'Leading guest onboarding, upsell, and loyalty journeys for boutique hotels with Angular micro frontends, Django APIs, and GCP delivery.'
          },
          {
            period: '2024 · UBIAI',
            title: 'AI-Powered Annotation',
            description: 'Scaled multi-tenant annotation workflows, elastic search, and AWS/GCP automation to accelerate UBIAI’s NLP platform.'
          },
          {
            period: '2023 · Sisal',
            title: 'Experience Engineering',
            description: 'Delivered Java + AEM experiences, QA automation, and omnichannel content for a global lottery operator.'
          }
        ]
      },
      chill: {
        heading: 'Take a Break and Chill With Me!',
        intro: 'Choose between classic Tetris gameplay or live-code music with Strudel using the toggle below.',
        controlsTitle: 'Classic Tetris Controls:',
        controls: [
          '← → : Move left/right',
          '↑ : Rotate',
          '↓ : Soft drop',
          'Space : Hard drop',
          'P : Pause'
        ],
        mobileHint: 'On mobile: Swipe to move, tap to rotate'
      },
      tetris: {
        stats: {
          score: 'Score',
          rows: 'Rows',
          level: 'Level'
        },
        pause: 'Pause',
        resume: 'Resume',
        pausedOverlay: 'Paused',
        gameOverTitle: 'Game Over!',
        finalScore: 'Final Score',
        playAgain: 'Play Again',
        backHome: 'Back to Home',
        mode: {
          classic: 'Classic Tetris',
          strudel: 'Strudel Jam',
          status: 'Mode: {{mode}}',
          hintClassic: 'Drop blocks, clear lines, and chase a high score.',
          hintStrudel: 'Live-code beats right here in the browser.',
          heading: 'Strudel Live Coding IDE',
          tip: 'Tip: type a pattern like <code>{{pattern}}</code> and hit Shift+Enter to play.',
          samplesHeading: 'Try these patterns',
          samplesSource: 'More Strudel songs on GitHub:',
          copyPattern: 'Copy pattern',
          copyManual: 'Select text & press Ctrl+C',
          copied: 'Copied!',
          freestyleHeading: 'Freestyle corner',
          freestyleDescription: 'Leave a note about your jam and check back soon for recorded freestyles.',
          playbackPlaceholder: 'Freestyle playback arriving soon.',
          playbackCta: 'Stay tuned',
          commentsLabel: 'Leave a comment',
          commentsPlaceholder: 'Share your thoughts, requests, or shout-outs...',
          commentsCta: 'Share (coming soon)'
        }
      },
      contact: {
        title: 'Get In Touch',
        intro: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
        form: {
          name: 'Name',
          namePlaceholder: 'Your name',
          email: 'Email',
          emailPlaceholder: 'Your email',
          subject: 'Subject',
          subjectPlaceholder: 'Subject of your message',
          message: 'Message',
          messagePlaceholder: 'Your message',
          submit: 'Send Message',
          submitting: 'Sending...'
        },
        status: {
          success: 'Message sent successfully! I will get back to you soon.',
          error: 'Failed to send message: {{error}}',
          defaultError: 'Please try again or contact me directly at azeer.ltifi@gmail.com or azseza@tutamail.com'
        },
        direct: 'Or contact me directly at:'
      },
      resume: {
        header: {
          name: 'AZER LTIFI',
          title: 'FULL-STACK ENGINEER',
          phone: '+216 55 22 77 98',
          email: 'azeer.ltifi@gmail.com, azseza@tutamail.com',
          location: 'Tunis, Tunisia'
        },
        sectionTitles: {
          summary: 'Professional Summary',
          achievements: 'Highlighted Achievements',
          experience: 'Professional Experience',
          education: 'Education',
          strengths: 'Strengths & Ways of Working',
          techToolkit: 'Technical Toolkit',
          projects: 'Selected Projects',
          languages: 'Languages',
          volunteering: 'Community & Volunteering',
          hobbies: 'Hobbies',
          references: 'References'
        },
        technologiesLabel: 'Technologies:',
        impactLabel: 'Impact:',
        stackLabel: 'Stack:',
        summary: 'Dedicated and dynamic software engineer with a passion for open source collaboration and emerging technologies. Specialised in back-end development with Java and Python, fluent in Angular for front-end experiences, and confident with PostgreSQL administration and ELK-stack observability. Comfortable across the full delivery lifecycle—from architecture and containerisation with Docker to CI/CD automation on cloud platforms.',
        achievements: [
          {
            title: 'Hospitality Platform Modernisation',
            detail: "Rolled out modular guest journey flows, analytics dashboards, and secure payment integrations for Tabhotel's SaaS suite."
          },
          {
            title: 'Enterprise NLP Delivery',
            detail: 'Productised annotation pipelines, feedback loops, and search experiences that unlock actionable insights for UBIAI customers.'
          },
          {
            title: 'Mission-Critical Government Platforms',
            detail: 'Built resilient monitoring and reporting tools that support fisheries regulation and healthcare collaboration across Africa.'
          }
        ],
        experiences: [
          {
            role: 'Full Stack Engineer',
            company: 'Tabhotel',
            location: 'Tunis, Tunisia · Hybrid',
            period: 'May 2024 – Present',
            intro: 'Scaling a hospitality experience platform that serves boutique and lifestyle hotel groups across Europe.',
            bullets: [
              'Deliver Angular/Django features that orchestrate guest onboarding, upsell, and loyalty workflows across multiple properties.',
              'Integrate PMS, payment, and CRM providers with secure REST and event-driven patterns to keep operational data in sync.',
              'Operate containerised workloads on Google Cloud Platform, refining CI/CD pipelines, observability dashboards, and on-call runbooks.'
            ],
            technologies: 'Django, Angular, TypeScript, REST APIs, PostgreSQL, Google Cloud Platform, Docker, GitHub Actions, Ubuntu'
          },
          {
            role: 'Full Stack Engineer · NLP & DevOps Consultant',
            company: 'UBIAI',
            location: 'Tunisia · Remote',
            period: 'Feb 2024 – May 2024',
            intro: 'Designed data-labelling experiences and the infrastructure that powers UBIAI’s NLP tools.',
            bullets: [
              'Implemented annotation workflows, elastic search, and review dashboards that speed up dataset delivery.',
              'Optimised Django/Angular services for multi-tenant performance with robust REST APIs and caching strategies.',
              'Automated deployments, monitoring, and incident response across AWS and GCP to support a growing customer base.'
            ],
            technologies: 'Python, Django, Django REST Framework, NLP, Angular, TypeScript, AWS, GCP, Docker, GitHub Actions'
          },
          {
            role: 'Back-end Development Specialist',
            company: 'Sisal Technology Tunisia',
            location: 'Tunis, Tunisia · On-site',
            period: 'Oct 2023 – Dec 2023',
            intro: 'Strengthened the customer experience platform for an international lottery and gaming provider.',
            bullets: [
              'Delivered Java/AEM components and REST integrations that power omnichannel digital journeys.',
              'Introduced BDD scenarios and QA automation to guard critical release scopes.',
              'Collaborated with Italian engineering squads to align architecture guidelines and code quality.'
            ],
            technologies: 'Java, Adobe Experience Manager, REST APIs, PostgreSQL, BDD, Docker'
          },
          {
            role: 'Full Stack Engineer',
            company: 'NST Groupe',
            location: 'Tunis, Tunisia',
            period: 'Oct 2022 – Oct 2023',
            intro: 'Led engineering initiatives for public-sector and healthcare solutions within a multidisciplinary team.',
            bullets: [
              'Built a Spring Boot + Angular platform that digitises fisheries monitoring for the Republic of Congo.',
              'Prototyped an oncology decision-support portal helping clinicians compare treatment pathways.',
              'Maintained CI/CD pipelines on Azure DevOps with containerised deployments and infrastructure-as-code.'
            ],
            technologies: 'Spring Boot, Angular, TypeScript, PostgreSQL, REST APIs, Azure DevOps, Docker, Kubernetes'
          },
          {
            role: 'Software Engineering Intern',
            company: 'NST Groupe',
            location: 'Tunis, Tunisia',
            period: 'Feb 2022 – Sep 2022',
            intro: 'Graduation project focused on modernising legacy business processes.',
            bullets: [
              'Refactored Java and Angular modules to align with REST best practices and improved data governance.',
              'Introduced automated testing and documentation standards adopted by the engineering team.'
            ],
            technologies: 'Java, Angular, REST APIs, PostgreSQL, BDD, TypeScript'
          },
          {
            role: 'NLP Developer Intern',
            company: 'UBIAI',
            location: 'Tunisia · Remote',
            period: 'May 2021 – Oct 2021',
            intro: 'Explored natural language processing techniques to enrich UBIAI products.',
            bullets: [
              'Built prototype pipelines using transformers and BERT for multilingual annotation tasks.',
              'Deployed NLP workloads on AWS with attention to cost, performance, and monitoring.'
            ],
            technologies: 'Python, Django, AWS, NLP, Transformers, BERT'
          },
          {
            role: 'Game Development Intern',
            company: 'CGI Studio',
            location: 'Menzel Temime, Tunisia',
            period: 'Jul 2020 – Sep 2020',
            intro: 'Developed and tested MMO gameplay experiences for an indie studio.',
            bullets: [
              'Designed Unity gameplay systems and REST-backed live features with C#.',
              'Created 3D assets and animations in Blender to accelerate art production.'
            ],
            technologies: 'Unity, C#, REST APIs, Blender'
          }
        ],
        education: [
          {
            title: 'National Diploma of Software Engineering',
            school: 'SESAME University',
            period: '2019 – 2022'
          },
          {
            title: "Bachelor's Degree in Fundamental Physics",
            school: 'Faculty of Sciences of Tunis',
            period: '2014 – 2019'
          }
        ],
        strengths: [
          'Solid organisational and time-management skills that keep delivery predictable.',
          'Hands-on system architecture and design expertise across microservices and monoliths.',
          'Comfortable working autonomously while thriving in collaborative, cross-functional squads.',
          'Detail-oriented execution that balances velocity with maintainability.',
          'Experienced in building robust, scalable applications ready for production.',
          'Advocate for Agile and continuous improvement practices.'
        ],
        techToolkit: [
          {
            label: 'Back-end',
            items: ['Java', 'Spring Boot', 'Python', 'Django', 'Flask', 'Django REST Framework']
          },
          {
            label: 'Front-end',
            items: ['Angular', 'TypeScript', 'React', 'JavaScript', 'HTML/CSS']
          },
          {
            label: 'DevOps & Cloud',
            items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'GitHub Actions', 'Linux', 'Bash']
          },
          {
            label: 'Data & Observability',
            items: ['PostgreSQL', 'SQL Database Administration', 'ELK Stack', 'Haystack']
          }
        ],
        projects: [
          {
            name: 'Republic of Congo Fisheries Monitoring',
            description: 'National platform that digitises catch registration and customs compliance for inspectors and operators.',
            impact: 'Provided real-time dashboards and alerting that strengthened oversight and reduced manual reporting cycles.',
            tech: 'Spring Boot, Angular, PostgreSQL, Docker, Azure DevOps'
          },
          {
            name: 'Oncology Decision Support Portal',
            description: 'Clinical proof-of-concept that assists doctors in mapping treatments and trials to patient data.',
            impact: 'Enabled multi-clinic collaboration and knowledge sharing through a secure workflow and audit-ready trail.',
            tech: 'Angular, Spring Boot, NGRX, REST APIs'
          },
          {
            name: 'NLP Annotation & Search Enhancements',
            description: 'Shipped customisable pipelines, elastic search, and review experiences to speed up dataset labelling.',
            impact: 'Improved labeller productivity and surfaced realistic quality metrics for go-to-market reporting.',
            tech: 'Django, Django REST Framework, Elasticsearch, Haystack, AWS'
          }
        ],
        hobbies: ['Open source contribution', 'Gaming', 'Cooking'],
        languages: [
          { name: 'English', level: 'Professional working proficiency' },
          { name: 'French', level: 'Professional working proficiency' },
          { name: 'Arabic', level: 'Native speaker' },
          { name: 'Spanish', level: 'Conversational' },
          { name: 'German', level: 'Conversational' }
        ],
        volunteering: [
          {
            role: 'Instructor & Organiser',
            organisation: 'Association Jeunes Science de Tunisie (AJST)',
            period: '2010 – 2015',
            summary: [
              'Mentored youth in STEM disciplines through workshops, science fairs, and maker events.',
              'Organised community programmes that encouraged hands-on experimentation and teamwork.'
            ]
          },
          {
            role: 'Event Organiser',
            organisation: 'Rencontres cinématographiques de Menzel Temim',
            period: 'Aug 2018',
            summary: [
              'Coordinated a month-long cultural festival featuring local filmmakers and artists.',
              'Managed partnerships, logistics, and audience engagement to showcase regional talent.'
            ]
          }
        ],
        download: 'Download Full Resume'
      },
      volunteer: {
        title: 'Volunteer Experience',
        summary: 'Coming soon...'
      },
      notFound: {
        title: '404',
        message: "The page you're looking for does not exist.",
        cta: 'Go Home'
      }
    }
  },
  fr: {
    translation: {
      language: {
        label: 'Langue',
        options: {
          en: 'English',
          fr: 'Français',
          es: 'Español',
          pt: 'Português',
          de: 'Deutsch'
        }
      },
      nav: {
        home: '01. Accueil',
        chill: '02. Détends-toi avec moi',
        resume: '03. CV',
        contact: '04. Contact',
        toggle: 'Menu'
      },
      home: {
        greeting: 'Bonjour, je suis Azer Ltifi',
        role: 'Ingénieur Full Stack',
        tagline: 'Je conçois des expériences web complètes.',
        cta: {
          primary: 'Voir mes réalisations',
          secondary: 'Me contacter'
        },
        highlightsTitle: 'Ce que j\'apporte à l’équipe',
        journeyTitle: 'Succès récents sur le terrain',
        highlights: [
          {
            icon: 'server',
            title: 'Excellence back-end',
            description: 'Conception de services modulaires et d’API robustes avec Spring Boot, Django et PostgreSQL pour accompagner la croissance produit.'
          },
          {
            icon: 'cloud',
            title: 'Livraison cloud-native',
            description: 'Automatisation des pipelines de déploiement sur GCP, AWS, Docker et Kubernetes pour des mises en production fiables.'
          },
          {
            icon: 'robot',
            title: 'IA & NLP appliqués',
            description: 'Création d’expériences pilotées par la donnée en combinant modèles de langage et attentes métier mesurables.'
          },
          {
            icon: 'team',
            title: 'Collaboration humaine',
            description: 'Animation d’équipes pluridisciplinaires, alignement des parties prenantes et transformation de feuilles de route complexes en succès partagés.'
          }
        ],
        journey: [
          {
            period: '2024 · Tabhotel',
            title: 'Évolution SaaS hôtelière',
            description: 'Orchestration des parcours d’onboarding, d’upsell et de fidélité pour des hôtels-boutiques avec des micro-frontends Angular, des APIs Django et des pipelines GCP.'
          },
          {
            period: '2024 · UBIAI',
            title: 'Annotation augmentée par l’IA',
            description: 'Montée en charge de workflows d’annotation multi-tenant, d’Elasticsearch et d’automatisation AWS/GCP pour accélérer la plateforme NLP d’UBIAI.'
          },
          {
            period: '2023 · Sisal',
            title: 'Expériences omnicanales',
            description: 'Livraison de composants Java + AEM, d’automatisation QA et de contenus omnicanaux pour un opérateur mondial de loterie.'
          }
        ]
      },
      chill: {
        heading: 'Faites une pause et détendez-vous avec moi !',
        intro: 'Choisissez entre une partie de Tetris classique ou du live-coding musical avec Strudel grâce au sélecteur ci-dessous.',
        controlsTitle: 'Commandes Tetris classiques :',
        controls: [
          '← → : Déplacement gauche/droite',
          '↑ : Rotation',
          '↓ : Descente rapide',
          'Espace : Chute directe',
          'P : Pause'
        ],
        mobileHint: 'Sur mobile : glissez pour déplacer, touchez pour tourner'
      },
      tetris: {
        stats: {
          score: 'Score',
          rows: 'Lignes',
          level: 'Niveau'
        },
        pause: 'Pause',
        resume: 'Reprendre',
        pausedOverlay: 'En pause',
        gameOverTitle: 'Partie terminée !',
        finalScore: 'Score final',
        playAgain: 'Rejouer',
        backHome: "Retour à l'accueil",
        mode: {
          classic: 'Tetris classique',
          strudel: 'Session Strudel',
          status: 'Mode : {{mode}}',
          hintClassic: 'Empile les blocs, fais des lignes et bats ton record.',
          hintStrudel: 'Live-code de la musique directement dans le navigateur.',
          heading: 'IDE Strudel de live coding',
          tip: 'Astuce : tape un motif comme <code>{{pattern}}</code> puis presse Maj+Entrée pour jouer.',
          samplesHeading: 'Essaye ces patterns',
          samplesSource: 'Plus de morceaux Strudel sur GitHub :',
          copyPattern: 'Copier le pattern',
          copyManual: 'Sélectionne le texte puis fais Ctrl+C/⌘C',
          copied: 'Copié !',
          freestyleHeading: 'Coin freestyle',
          freestyleDescription: 'Laisse un mot sur ton jam et reviens bientôt pour des freestyles enregistrés.',
          playbackPlaceholder: 'Lecture freestyle disponible bientôt.',
          playbackCta: 'Reste à l’écoute',
          commentsLabel: 'Laisser un commentaire',
          commentsPlaceholder: 'Partage tes idées, demandes ou dédicaces...',
          commentsCta: 'Partager (bientôt)'
        }
      },
      contact: {
        title: 'Entrons en contact',
        intro: "Je suis ouvert à de nouvelles opportunités. Une question ou juste envie d'échanger ? Je vous répondrai au plus vite.",
        form: {
          name: 'Nom',
          namePlaceholder: 'Votre nom',
          email: 'Email',
          emailPlaceholder: 'Votre email',
          subject: 'Sujet',
          subjectPlaceholder: 'Sujet de votre message',
          message: 'Message',
          messagePlaceholder: 'Votre message',
          submit: 'Envoyer',
          submitting: 'Envoi...'
        },
        status: {
          success: 'Message envoyé ! Je vous répondrai rapidement.',
          error: 'Échec de l’envoi du message : {{error}}',
          defaultError: 'Réessayez ou écrivez-moi directement à azeer.ltifi@gmail.com or azseza@tutamail.com'
        },
        direct: 'Ou contactez-moi directement :'
      },
      resume: {
        header: {
          name: 'AZER LTIFI',
          title: 'INGÉNIEUR FULL STACK',
          phone: '+216 55 22 77 98',
          email: 'azeer.ltifi@gmail.com, azseza@tutamail.com',
          location: 'Tunis, Tunisie'
        },
        sectionTitles: {
          summary: 'Résumé professionnel',
          achievements: 'Réalisations clés',
          experience: 'Expériences professionnelles',
          education: 'Formation',
          strengths: 'Forces & méthodes de travail',
          techToolkit: 'Boîte à outils technique',
          projects: 'Projets sélectionnés',
          languages: 'Langues',
          volunteering: 'Communauté & bénévolat',
          hobbies: 'Centres d’intérêt',
          references: 'Références'
        },
        technologiesLabel: 'Technologies :',
        impactLabel: 'Impact :',
        stackLabel: 'Stack :',
        summary: 'Ingénieur logiciel passionné par l’open source et les technologies émergentes. Spécialisé en développement back-end Java/Python, à l’aise sur Angular côté front et expert en administration PostgreSQL et observabilité ELK. Intervient sur toute la chaîne delivery : architecture, containerisation, automatisation CI/CD et exploitation cloud.',
        achievements: [
          {
            title: 'Modernisation de plateforme hôtelière',
            detail: 'Déploiement de parcours clients modulaires, tableaux de bord analytiques et intégrations de paiement sécurisées pour le SaaS de Tabhotel.'
          },
          {
            title: 'Industrialisation NLP',
            detail: 'Industrialisation de pipelines d’annotation, boucles de feedback et expériences de recherche offrant des insights actionnables pour UBIAI.'
          },
          {
            title: 'Solutions critiques publiques',
            detail: 'Conception d’outils de suivi et de reporting pour la régulation des pêches et la collaboration médicale en Afrique.'
          }
        ],
        experiences: [
          {
            role: 'Ingénieur Full Stack',
            company: 'Tabhotel',
            location: 'Gouvernorat de Tunis, Tunisie · Hybride',
            period: 'Mai 2024 – Présent',
            intro: 'Pilotage de l’évolution d’une plateforme d’expérience client pour des hôtels-boutiques européens.',
            bullets: [
              'Livraison de fonctionnalités Angular/Django orchestrant onboarding, upsell et fidélisation multi-établissements.',
              'Intégration de PMS, paiements et CRM via des patterns REST et événementiels pour synchroniser données et opérations.',
              'Exploitation de charges conteneurisées sur Google Cloud avec amélioration continue des pipelines CI/CD et de l’observabilité.'
            ],
            technologies: 'Django, Angular, TypeScript, APIs REST, PostgreSQL, Google Cloud Platform, Docker, GitHub Actions, Ubuntu'
          },
          {
            role: 'Consultant Full Stack · NLP & DevOps',
            company: 'UBIAI',
            location: 'Tunisie · Remote',
            period: 'Févr. 2024 – Mai 2024',
            intro: 'Conception d’expériences d’annotation et de l’infrastructure propulsant les outils NLP d’UBIAI.',
            bullets: [
              'Mise en place de workflows d’annotation, recherche élastique et tableaux de bord de revue accélérant la production de datasets.',
              'Optimisation des services Django/Angular pour la performance multi-tenant avec APIs REST robustes et cache.',
              'Automatisation des déploiements, de la supervision et de la réponse incident sur AWS et GCP.'
            ],
            technologies: 'Python, Django, Django REST Framework, NLP, Angular, TypeScript, AWS, GCP, Docker, GitHub Actions'
          },
          {
            role: 'Spécialiste back-end',
            company: 'Sisal Technology Tunisia',
            location: 'Gouvernorat de Tunis, Tunisie · Sur site',
            period: 'Oct. 2023 – Déc. 2023',
            intro: 'Renforcement de la plateforme d’expérience client pour un acteur international des jeux et loteries.',
            bullets: [
              'Développement de composants Java/AEM et d’intégrations REST supportant les parcours omnicanaux.',
              'Introduction de scénarios BDD et d’automatisations QA pour sécuriser les releases critiques.',
              'Coordination avec les équipes italiennes pour aligner architecture et standards qualité.'
            ],
            technologies: 'Java, Adobe Experience Manager, APIs REST, PostgreSQL, BDD, Docker'
          },
          {
            role: 'Ingénieur Full Stack',
            company: 'NST Groupe',
            location: 'Gouvernorat de Tunis, Tunisie',
            period: 'Oct. 2022 – Oct. 2023',
            intro: 'Leader technique sur des solutions secteur public et santé au sein d’équipes multidisciplinaires.',
            bullets: [
              'Création d’une plateforme Spring Boot + Angular pour digitaliser le suivi des pêches du Congo.',
              'Prototype d’un portail d’aide à la décision oncologique facilitant la comparaison de traitements.',
              'Maintenance de pipelines CI/CD sur Azure DevOps avec déploiements conteneurisés et IaC.'
            ],
            technologies: 'Spring Boot, Angular, TypeScript, PostgreSQL, APIs REST, Azure DevOps, Docker, Kubernetes'
          },
          {
            role: 'Stagiaire ingénierie logicielle',
            company: 'NST Groupe',
            location: 'Tunis, Tunisie',
            period: 'Févr. 2022 – Sept. 2022',
            intro: 'Projet de fin d’études visant à moderniser les processus métiers existants.',
            bullets: [
              'Refactoring de modules Java et Angular pour adopter les bonnes pratiques REST et gouvernance des données.',
              'Mise en place de tests automatisés et standards de documentation adoptés par l’équipe.'
            ],
            technologies: 'Java, Angular, APIs REST, PostgreSQL, BDD, TypeScript'
          },
          {
            role: 'Stagiaire NLP',
            company: 'UBIAI',
            location: 'Tunisie · Remote',
            period: 'Mai 2021 – Oct. 2021',
            intro: 'Exploration de techniques NLP pour enrichir les produits UBIAI.',
            bullets: [
              'Construction de pipelines prototypes basés sur Transformers et BERT pour l’annotation multilingue.',
              'Déploiement de charges NLP sur AWS avec suivi des coûts et de la performance.'
            ],
            technologies: 'Python, Django, AWS, NLP, Transformers, BERT'
          },
          {
            role: 'Stagiaire développement jeu vidéo',
            company: 'CGI Studio',
            location: 'Menzel Temime, Tunisie',
            period: 'Juil. 2020 – Sept. 2020',
            intro: 'Développement et test d’expériences MMO pour un studio indépendant.',
            bullets: [
              'Conception de systèmes de jeu Unity et de fonctionnalités live basées sur des APIs REST en C#.',
              'Production d’assets 3D et d’animations sous Blender pour accélérer la création artistique.'
            ],
            technologies: 'Unity, C#, APIs REST, Blender'
          }
        ],
        education: [
          {
            title: "Diplôme national d'ingénieur en informatique",
            school: 'Université SESAME',
            period: '2019 – 2022'
          },
          {
            title: 'Licence fondamentale en physique',
            school: 'Faculté des Sciences de Tunis',
            period: '2014 – 2019'
          }
        ],
        strengths: [
          'Organisation et gestion du temps assurant une livraison prévisible.',
          'Compétences en architecture et design système (microservices & monolithes).',
          'Autonomie tout en excellant dans les équipes pluridisciplinaires.',
          'Sens du détail conciliant vitesse et maintenabilité.',
          'Expérience dans la construction d’applications robustes et scalables.',
          'Culture Agile et amélioration continue.'
        ],
        techToolkit: [
          {
            label: 'Back-end',
            items: ['Java', 'Spring Boot', 'Python', 'Django', 'Flask', 'Django REST Framework']
          },
          {
            label: 'Front-end',
            items: ['Angular', 'TypeScript', 'React', 'JavaScript', 'HTML/CSS']
          },
          {
            label: 'DevOps & Cloud',
            items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'GitHub Actions', 'Linux', 'Bash']
          },
          {
            label: 'Données & Observabilité',
            items: ['PostgreSQL', 'Administration SQL', 'ELK Stack', 'Haystack']
          }
        ],
        projects: [
          {
            name: 'Plateforme de suivi des pêches du Congo',
            description: 'Plateforme nationale digitalisant l’enregistrement des captures et la conformité douanière.',
            impact: 'Tableaux de bord temps réel et alerting renforçant la supervision et réduisant le reporting manuel.',
            tech: 'Spring Boot, Angular, PostgreSQL, Docker, Azure DevOps'
          },
          {
            name: 'Portail d’aide à la décision en oncologie',
            description: 'POC clinique aidant les médecins à cartographier traitements et essais par patient.',
            impact: 'Collaboration multi-cliniques renforcée via un workflow sécurisé et traçable.',
            tech: 'Angular, Spring Boot, NGRX, APIs REST'
          },
          {
            name: 'Améliorations d’annotation NLP & recherche',
            description: 'Pipelines personnalisables, recherche élastique et expériences de revue pour accélérer l’étiquetage.',
            impact: 'Productivité des annotateurs accrue et métriques fiables pour le reporting.',
            tech: 'Django, Django REST Framework, Elasticsearch, Haystack, AWS'
          }
        ],
        hobbies: ['Contribution open source', 'Jeux vidéo', 'Cuisine'],
        languages: [
          { name: 'Anglais', level: 'Compétence professionnelle' },
          { name: 'Français', level: 'Compétence professionnelle' },
          { name: 'Arabe', level: 'Langue maternelle' },
          { name: 'Espagnol', level: 'Compétence conversationnelle' },
          { name: 'Allemand', level: 'Compétence conversationnelle' }
        ],
        volunteering: [
          {
            role: 'Formateur & organisateur',
            organisation: 'Association Jeunes Science de Tunisie (AJST)',
            period: '2010 – 2015',
            summary: [
              'Encadrement de jeunes autour d’ateliers STEM, foires scientifiques et événements makers.',
              'Organisation de programmes communautaires favorisant l’expérimentation et le travail d’équipe.'
            ]
          },
          {
            role: 'Organisateur d’événement',
            organisation: 'Rencontres cinématographiques de Menzel Temim',
            period: 'Août 2018',
            summary: [
              'Coordination d’un festival culturel d’un mois avec réalisateurs et artistes locaux.',
              'Gestion des partenariats, de la logistique et de l’engagement du public.'
            ]
          }
        ],
        download: 'Télécharger le CV'
      },
      volunteer: {
        title: 'Expérience bénévole',
        summary: 'À venir...'
      },
      notFound: {
        title: '404',
        message: "La page demandée n'existe pas.",
        cta: 'Retour à l’accueil'
      }
    }
  },
  es: {
    translation: {
      language: {
        label: 'Idioma',
        options: {
          en: 'English',
          fr: 'Français',
          es: 'Español',
          pt: 'Português',
          de: 'Deutsch'
        }
      },
      nav: {
        home: '01. Inicio',
        chill: '02. Relájate conmigo',
        resume: '03. Currículum',
        contact: '04. Contacto',
        toggle: 'Menú'
      },
      home: {
        greeting: 'Hola, soy Azer Ltifi',
        role: 'Desarrollador Full Stack',
        tagline: 'Construyo experiencias web de principio a fin.',
        cta: {
          primary: 'Ver mi trabajo',
          secondary: 'Hablemos'
        },
        highlightsTitle: 'Lo que aporto al equipo',
        journeyTitle: 'Logros recientes en el terreno',
        highlights: [
          {
            icon: 'server',
            title: 'Excelencia back-end',
            description: 'Diseño servicios modulares y APIs resilientes con Spring Boot, Django y PostgreSQL que crecen con el negocio.'
          },
          {
            icon: 'cloud',
            title: 'Entrega cloud-native',
            description: 'Automatizo pipelines en GCP, AWS, Docker y Kubernetes para despliegues observables y seguros.'
          },
          {
            icon: 'robot',
            title: 'IA y NLP aplicados',
            description: 'Creo experiencias impulsadas por lenguaje combinando machine learning pragmático con objetivos medibles.'
          },
          {
            icon: 'team',
            title: 'Colaboración humana',
            description: 'Guío equipos, alineo a los interesados y traduzco hojas de ruta complejas en resultados compartidos.'
          }
        ],
        journey: [
          {
            period: '2024 · Tabhotel',
            title: 'Evolución SaaS hotelera',
            description: 'Orquestación de onboarding, upsell y fidelización para hoteles boutique con micro-frontends Angular, APIs Django y pipelines en GCP.'
          },
          {
            period: '2024 · UBIAI',
            title: 'Anotación con IA',
            description: 'Escalé flujos de anotación multi-tenant, ElasticSearch y automatización AWS/GCP para acelerar la plataforma NLP de UBIAI.'
          },
          {
            period: '2023 · Sisal',
            title: 'Experiencias omnicanal',
            description: 'Implementé componentes Java + AEM, automatización QA y experiencias omnicanal para un operador global de lotería.'
          }
        ]
      },
      chill: {
        heading: '¡Tómate un descanso y relájate conmigo!',
        intro: 'Elige entre jugar al Tetris clásico o hacer música en Strudel con el selector inferior.',
        controlsTitle: 'Controles clásicos de Tetris:',
        controls: [
          '← → : Mover a izquierda/derecha',
          '↑ : Girar',
          '↓ : Caída suave',
          'Espacio : Caída directa',
          'P : Pausa'
        ],
        mobileHint: 'En móvil: desliza para mover, toca para girar'
      },
      tetris: {
        stats: {
          score: 'Puntuación',
          rows: 'Filas',
          level: 'Nivel'
        },
        pause: 'Pausa',
        resume: 'Reanudar',
        pausedOverlay: 'En pausa',
        gameOverTitle: '¡Fin del juego!',
        finalScore: 'Puntuación final',
        playAgain: 'Jugar de nuevo',
        backHome: 'Volver al inicio',
        mode: {
          classic: 'Tetris clásico',
          strudel: 'Jam de Strudel',
          status: 'Modo: {{mode}}',
          hintClassic: 'Deja caer piezas, limpia líneas y busca tu récord.',
          hintStrudel: 'Live-codea beats desde el navegador.',
          heading: 'IDE de live coding Strudel',
          tip: 'Tip: escribe un patrón como <code>{{pattern}}</code> y pulsa Shift+Enter para sonar.',
          samplesHeading: 'Prueba estos patrones',
          samplesSource: 'Más canciones de Strudel en GitHub:',
          copyPattern: 'Copiar patrón',
          copyManual: 'Selecciona el texto y pulsa Ctrl+C/⌘C',
          copied: '¡Copiado!',
          freestyleHeading: 'Rincón freestyle',
          freestyleDescription: 'Deja un mensaje sobre tu jam y vuelve pronto para escuchar freestyles grabados.',
          playbackPlaceholder: 'Reproducción freestyle disponible pronto.',
          playbackCta: 'Mantente atento',
          commentsLabel: 'Deja un comentario',
          commentsPlaceholder: 'Comparte tus ideas, peticiones o saludos...',
          commentsCta: 'Compartir (próximamente)'
        }
      },
      contact: {
        title: 'Pongámonos en contacto',
        intro: 'Estoy abierto a nuevas oportunidades. Si tienes una pregunta o simplemente quieres saludar, ¡responderé lo antes posible!',
        form: {
          name: 'Nombre',
          namePlaceholder: 'Tu nombre',
          email: 'Correo electrónico',
          emailPlaceholder: 'Tu correo',
          subject: 'Asunto',
          subjectPlaceholder: 'Asunto de tu mensaje',
          message: 'Mensaje',
          messagePlaceholder: 'Tu mensaje',
          submit: 'Enviar mensaje',
          submitting: 'Enviando...'
        },
        status: {
          success: 'Mensaje enviado correctamente. Me pondré en contacto pronto.',
          error: 'No se pudo enviar el mensaje: {{error}}',
          defaultError: 'Vuelve a intentarlo o escríbeme directamente a azeer.ltifi@gmail.com or azseza@tutamail.com'
        },
        direct: 'O contáctame directamente en:'
      },
      resume: {
        header: {
          name: 'AZER LTIFI',
          title: 'INGENIERO FULL STACK',
          phone: '+216 55 22 77 98',
          email: 'azeer.ltifi@gmail.com, azseza@tutamail.com',
          location: 'Túnez, Túnez'
        },
        sectionTitles: {
          summary: 'Resumen profesional',
          achievements: 'Logros destacados',
          experience: 'Experiencia profesional',
          education: 'Educación',
          strengths: 'Fortalezas y forma de trabajo',
          techToolkit: 'Kit técnico',
          projects: 'Proyectos destacados',
          languages: 'Idiomas',
          volunteering: 'Comunidad y voluntariado',
          hobbies: 'Aficiones',
          references: 'Referencias'
        },
        technologiesLabel: 'Tecnologías:',
        impactLabel: 'Impacto:',
        stackLabel: 'Stack:',
        summary: 'Ingeniero de software apasionado por el open source y las tecnologías emergentes. Especialista en back-end con Java y Python, competente en Angular para el front-end y experto en administración PostgreSQL y observabilidad ELK. Cubre todo el ciclo de entrega: arquitectura, contenedores y automatización CI/CD en la nube.',
        achievements: [
          {
            title: 'Modernización de plataforma hotelera',
            detail: 'Implementé flujos de clientes modulares, paneles analíticos e integraciones de pago seguras para el SaaS de Tabhotel.'
          },
          {
            title: 'Entrega NLP empresarial',
            detail: 'Producticé pipelines de anotación, bucles de feedback y experiencias de búsqueda que generan insights accionables para UBIAI.'
          },
          {
            title: 'Plataformas críticas gubernamentales',
            detail: 'Construí herramientas resilientes de monitoreo y reporting que apoyan la regulación pesquera y la colaboración sanitaria en África.'
          }
        ],
        experiences: [
          {
            role: 'Ingeniero Full Stack',
            company: 'Tabhotel',
            location: 'Gobernación de Túnez, Túnez · Híbrido',
            period: 'Mayo 2024 – Presente',
            intro: 'Escalo una plataforma de experiencia hotelera utilizada por hoteles boutique en Europa.',
            bullets: [
              'Desarrollo funciones Angular/Django que orquestan onboarding, upsell y fidelización en múltiples propiedades.',
              'Integro PMS, pagos y CRM mediante patrones REST y basados en eventos para mantener datos operativos sincronizados.',
              'Gestiono cargas contenedorizadas en Google Cloud mejorando pipelines CI/CD y observabilidad.'
            ],
            technologies: 'Django, Angular, TypeScript, APIs REST, PostgreSQL, Google Cloud Platform, Docker, GitHub Actions, Ubuntu'
          },
          {
            role: 'Consultor Full Stack · NLP & DevOps',
            company: 'UBIAI',
            location: 'Túnez · Remoto',
            period: 'Feb. 2024 – May. 2024',
            intro: 'Diseñé experiencias de anotación y la infraestructura que soporta las herramientas NLP de UBIAI.',
            bullets: [
              'Implementé flujos de anotación, búsqueda elástica y paneles de revisión que aceleran la entrega de datasets.',
              'Optimicé servicios Django/Angular para rendimiento multi-tenant con APIs REST robustas y caching.',
              'Automatizé despliegues, monitoreo y respuesta a incidentes en AWS y GCP.'
            ],
            technologies: 'Python, Django, Django REST Framework, NLP, Angular, TypeScript, AWS, GCP, Docker, GitHub Actions'
          },
          {
            role: 'Especialista en desarrollo back-end',
            company: 'Sisal Technology Tunisia',
            location: 'Gobernación de Túnez, Túnez · Presencial',
            period: 'Oct. 2023 – Dic. 2023',
            intro: 'Reforcé la plataforma de experiencia de cliente para un operador internacional de lotería.',
            bullets: [
              'Entregué componentes Java/AEM e integraciones REST que impulsan recorridos omnicanal.',
              'Introduje escenarios BDD y automatizaciones QA para proteger lanzamientos críticos.',
              'Coordiné con equipos italianos para alinear arquitectura y estándares de calidad.'
            ],
            technologies: 'Java, Adobe Experience Manager, APIs REST, PostgreSQL, BDD, Docker'
          },
          {
            role: 'Ingeniero Full Stack',
            company: 'NST Groupe',
            location: 'Gobernación de Túnez, Túnez',
            period: 'Oct. 2022 – Oct. 2023',
            intro: 'Lideré iniciativas tecnológicas para soluciones del sector público y salud.',
            bullets: [
              'Construí una plataforma Spring Boot + Angular que digitaliza la supervisión de la pesca en la República del Congo.',
              'Prototipé un portal de apoyo a decisiones oncológicas que ayuda a comparar tratamientos.',
              'Mantuve pipelines CI/CD en Azure DevOps con despliegues contenedorizados y IaC.'
            ],
            technologies: 'Spring Boot, Angular, TypeScript, PostgreSQL, APIs REST, Azure DevOps, Docker, Kubernetes'
          },
          {
            role: 'Practicante de ingeniería de software',
            company: 'NST Groupe',
            location: 'Túnez, Túnez',
            period: 'Feb. 2022 – Sep. 2022',
            intro: 'Proyecto de grado enfocado en modernizar procesos empresariales.',
            bullets: [
              'Refactoricé módulos Java y Angular alineándolos con buenas prácticas REST y gobernanza de datos.',
              'Introduje pruebas automatizadas y estándares de documentación adoptados por el equipo.'
            ],
            technologies: 'Java, Angular, APIs REST, PostgreSQL, BDD, TypeScript'
          },
          {
            role: 'Practicante en NLP',
            company: 'UBIAI',
            location: 'Túnez · Remoto',
            period: 'May. 2021 – Oct. 2021',
            intro: 'Exploré técnicas NLP para potenciar productos UBIAI.',
            bullets: [
              'Construí pipelines prototipo basados en Transformers y BERT para anotación multilingüe.',
              'Desplegué cargas NLP en AWS cuidando costos, rendimiento y monitoreo.'
            ],
            technologies: 'Python, Django, AWS, NLP, Transformers, BERT'
          },
          {
            role: 'Practicante de desarrollo de videojuegos',
            company: 'CGI Studio',
            location: 'Menzel Temime, Túnez',
            period: 'Jul. 2020 – Sep. 2020',
            intro: 'Desarrollé y probé experiencias MMO para un estudio indie.',
            bullets: [
              'Diseñé sistemas de juego en Unity y funciones en vivo respaldadas por APIs REST con C#.',
              'Creé activos 3D y animaciones en Blender para acelerar la producción artística.'
            ],
            technologies: 'Unity, C#, APIs REST, Blender'
          }
        ],
        education: [
          {
            title: 'Diploma nacional de ingeniería de software',
            school: 'Universidad SESAME',
            period: '2019 – 2022'
          },
          {
            title: 'Licenciatura en Física Fundamental',
            school: 'Facultad de Ciencias de Túnez',
            period: '2014 – 2019'
          }
        ],
        strengths: [
          'Organización y gestión del tiempo que garantizan entregas predecibles.',
          'Experiencia en arquitectura y diseño de sistemas (microservicios y monolitos).',
          'Autonomía y desempeño en equipos multidisciplinares.',
          'Atención al detalle equilibrando velocidad y mantenibilidad.',
          'Experiencia construyendo aplicaciones robustas y escalables.',
          'Cultura ágil y mejora continua.'
        ],
        techToolkit: [
          {
            label: 'Back-end',
            items: ['Java', 'Spring Boot', 'Python', 'Django', 'Flask', 'Django REST Framework']
          },
          {
            label: 'Front-end',
            items: ['Angular', 'TypeScript', 'React', 'JavaScript', 'HTML/CSS']
          },
          {
            label: 'DevOps y Cloud',
            items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'GitHub Actions', 'Linux', 'Bash']
          },
          {
            label: 'Datos y Observabilidad',
            items: ['PostgreSQL', 'Administración SQL', 'ELK Stack', 'Haystack']
          }
        ],
        projects: [
          {
            name: 'Plataforma de monitoreo pesquero del Congo',
            description: 'Plataforma nacional que digitaliza el registro de capturas y la conformidad aduanera.',
            impact: 'Paneles en tiempo real y alertas que fortalecen la supervisión y reducen informes manuales.',
            tech: 'Spring Boot, Angular, PostgreSQL, Docker, Azure DevOps'
          },
          {
            name: 'Portal de soporte oncológico',
            description: 'POC clínico que ayuda a médicos a mapear tratamientos y ensayos para cada paciente.',
            impact: 'Facilitó la colaboración entre clínicas mediante un flujo seguro y auditable.',
            tech: 'Angular, Spring Boot, NGRX, APIs REST'
          },
          {
            name: 'Mejoras de anotación NLP y búsqueda',
            description: 'Pipelines personalizables, búsqueda elástica y experiencias de revisión para acelerar el etiquetado.',
            impact: 'Incrementó la productividad de etiquetadores y generó métricas fiables para reportes.',
            tech: 'Django, Django REST Framework, Elasticsearch, Haystack, AWS'
          }
        ],
        hobbies: ['Contribución open source', 'Videojuegos', 'Cocina'],
        languages: [
          { name: 'Inglés', level: 'Competencia profesional' },
          { name: 'Francés', level: 'Competencia profesional' },
          { name: 'Árabe', level: 'Lengua materna' },
          { name: 'Español', level: 'Competencia conversacional' },
          { name: 'Alemán', level: 'Competencia conversacional' }
        ],
        volunteering: [
          {
            role: 'Instructor y organizador',
            organisation: 'Association Jeunes Science de Tunisie (AJST)',
            period: '2010 – 2015',
            summary: [
              'Mentoricé a jóvenes en STEM mediante talleres, ferias científicas y eventos maker.',
              'Organicé programas comunitarios que fomentan la experimentación práctica y el trabajo en equipo.'
            ]
          },
          {
            role: 'Organizador de eventos',
            organisation: 'Rencontres cinématographiques de Menzel Temim',
            period: 'Ago. 2018',
            summary: [
              'Coordiné un festival cultural de un mes con directores y artistas locales.',
              'Gestioné alianzas, logística y participación del público para destacar el talento regional.'
            ]
          }
        ],
        download: 'Descargar CV'
      },
      volunteer: {
        title: 'Experiencia de voluntariado',
        summary: 'Próximamente...'
      },
      notFound: {
        title: '404',
        message: 'La página que buscas no existe.',
        cta: 'Ir al inicio'
      }
    }
  },
  pt: {
    translation: {
      language: {
        label: 'Idioma',
        options: {
          en: 'English',
          fr: 'Français',
          es: 'Español',
          pt: 'Português',
          de: 'Deutsch'
        }
      },
      nav: {
        home: '01. Início',
        chill: '02. Relaxe comigo',
        resume: '03. Currículo',
        contact: '04. Contato',
        toggle: 'Menu'
      },
      home: {
        greeting: 'Olá, sou Azer Ltifi',
        role: 'Engenheiro Full Stack',
        tagline: 'Construo experiências web completas.',
        cta: {
          primary: 'Ver meu trabalho',
          secondary: 'Fale comigo'
        },
        highlightsTitle: 'O que levo para o time',
        journeyTitle: 'Conquistas recentes em campo',
        highlights: [
          {
            icon: 'server',
            title: 'Excelência em back-end',
            description: 'Projeto serviços modulares e APIs resilientes com Spring Boot, Django e PostgreSQL alinhados às metas do produto.'
          },
          {
            icon: 'cloud',
            title: 'Entrega cloud-native',
            description: 'Automatizo pipelines em GCP, AWS, Docker e Kubernetes para implantações observáveis e seguras.'
          },
          {
            icon: 'robot',
            title: 'IA e NLP aplicados',
            description: 'Crio experiências orientadas a linguagem combinando machine learning pragmático e indicadores de negócio.'
          },
          {
            icon: 'team',
            title: 'Colaboração humana',
            description: 'Lidero equipes, alinho stakeholders e traduzo roteiros complexos em resultados compartilhados.'
          }
        ],
        journey: [
          {
            period: '2024 · Tabhotel',
            title: 'Evolução SaaS hoteleira',
            description: 'Orquestrei onboarding, upsell e fidelização para hotéis boutique com micro-frontends Angular, APIs Django e pipelines GCP.'
          },
          {
            period: '2024 · UBIAI',
            title: 'Anotação com IA',
            description: 'Escalei workflows de anotação multi-tenant, ElasticSearch e automação AWS/GCP para acelerar a plataforma NLP da UBIAI.'
          },
          {
            period: '2023 · Sisal',
            title: 'Experiências omnichannel',
            description: 'Entreguei componentes Java + AEM, automação de QA e experiências omnicanal para um operador global de loteria.'
          }
        ]
      },
      chill: {
        heading: 'Faça uma pausa e relaxe comigo!',
        intro: 'Escolha entre o Tetris clássico ou live-code de música com Strudel usando o seletor abaixo.',
        controlsTitle: 'Controles clássicos de Tetris:',
        controls: [
          '← → : Mover esquerda/direita',
          '↑ : Girar',
          '↓ : Queda suave',
          'Espaço : Queda direta',
          'P : Pausar'
        ],
        mobileHint: 'No mobile: deslize para mover, toque para girar'
      },
      tetris: {
        stats: {
          score: 'Pontuação',
          rows: 'Linhas',
          level: 'Nível'
        },
        pause: 'Pausar',
        resume: 'Retomar',
        pausedOverlay: 'Pausado',
        gameOverTitle: 'Fim de jogo!',
        finalScore: 'Pontuação final',
        playAgain: 'Jogar novamente',
        backHome: 'Voltar ao início',
        mode: {
          classic: 'Tetris clássico',
          strudel: 'Jam Strudel',
          status: 'Modo: {{mode}}',
          hintClassic: 'Derrube blocos, limpe linhas e corra atrás do recorde.',
          hintStrudel: 'Live-code de beats direto no navegador.',
          heading: 'IDE de live coding Strudel',
          tip: 'Dica: digite um padrão como <code>{{pattern}}</code> e aperte Shift+Enter para tocar.',
          samplesHeading: 'Experimente estes patterns',
          samplesSource: 'Mais músicas Strudel no GitHub:',
          copyPattern: 'Copiar pattern',
          copyManual: 'Selecione o texto e pressione Ctrl+C/⌘C',
          copied: 'Copiado!',
          freestyleHeading: 'Espaço freestyle',
          freestyleDescription: 'Deixe um recado sobre seu jam e volte em breve para ouvir freestyles gravados.',
          playbackPlaceholder: 'Reprodução do freestyle em breve.',
          playbackCta: 'Fique ligado',
          commentsLabel: 'Deixe um comentário',
          commentsPlaceholder: 'Compartilhe suas ideias, pedidos ou saudações...',
          commentsCta: 'Compartilhar (em breve)'
        }
      },
      contact: {
        title: 'Vamos conversar',
        intro: 'Estou aberto a novas oportunidades. Se tiver uma pergunta ou apenas quiser dizer olá, responderei o quanto antes.',
        form: {
          name: 'Nome',
          namePlaceholder: 'Seu nome',
          email: 'Email',
          emailPlaceholder: 'Seu email',
          subject: 'Assunto',
          subjectPlaceholder: 'Assunto da mensagem',
          message: 'Mensagem',
          messagePlaceholder: 'Sua mensagem',
          submit: 'Enviar mensagem',
          submitting: 'Enviando...'
        },
        status: {
          success: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
          error: 'Falha ao enviar mensagem: {{error}}',
          defaultError: 'Tente novamente ou escreva diretamente para azeer.ltifi@gmail.com or azseza@tutamail.com'
        },
        direct: 'Ou fale comigo diretamente em:'
      },
      resume: {
        header: {
          name: 'AZER LTIFI',
          title: 'ENGENHEIRO FULL STACK',
          phone: '+216 55 22 77 98',
          email: 'azeer.ltifi@gmail.com, azseza@tutamail.com',
          location: 'Túnis, Tunísia'
        },
        sectionTitles: {
          summary: 'Resumo profissional',
          achievements: 'Principais conquistas',
          experience: 'Experiência profissional',
          education: 'Formação',
          strengths: 'Forças e forma de trabalho',
          techToolkit: 'Ferramentas técnicas',
          projects: 'Projetos selecionados',
          languages: 'Idiomas',
          volunteering: 'Comunidade e voluntariado',
          hobbies: 'Hobbies',
          references: 'Referências'
        },
        technologiesLabel: 'Tecnologias:',
        impactLabel: 'Impacto:',
        stackLabel: 'Stack:',
        summary: 'Engenheiro de software apaixonado por open source e tecnologias emergentes. Especialista em back-end com Java e Python, confortável em Angular no front-end e experiente em administração PostgreSQL e observabilidade ELK. Atua em todo o ciclo de entrega: arquitetura, conteinerização, CI/CD e operação em nuvem.',
        achievements: [
          {
            title: 'Modernização de plataforma hoteleira',
            detail: 'Implantei fluxos de jornada do hóspede, painéis analíticos e integrações de pagamento seguras para o SaaS da Tabhotel.'
          },
          {
            title: 'Entrega NLP corporativa',
            detail: 'Industrializei pipelines de anotação, feedback e busca para gerar insights acionáveis aos clientes UBIAI.'
          },
          {
            title: 'Plataformas críticas governamentais',
            detail: 'Desenvolvi ferramentas resilientes de monitoramento e relatórios para regulação pesqueira e colaboração em saúde na África.'
          }
        ],
        experiences: [
          {
            role: 'Engenheiro Full Stack',
            company: 'Tabhotel',
            location: 'Governo de Túnis, Tunísia · Híbrido',
            period: 'Mai. 2024 – Presente',
            intro: 'Escala de uma plataforma de experiência hoteleira para redes boutique europeias.',
            bullets: [
              'Entrego recursos Angular/Django que orquestram onboarding, upsell e fidelização em múltiplas propriedades.',
              'Integro PMS, pagamentos e CRM com padrões REST e event-driven para sincronizar dados operacionais.',
              'Opero cargas conteinerizadas no Google Cloud aprimorando pipelines CI/CD e observabilidade.'
            ],
            technologies: 'Django, Angular, TypeScript, APIs REST, PostgreSQL, Google Cloud Platform, Docker, GitHub Actions, Ubuntu'
          },
          {
            role: 'Consultor Full Stack · NLP & DevOps',
            company: 'UBIAI',
            location: 'Tunísia · Remoto',
            period: 'Fev. 2024 – Mai. 2024',
            intro: 'Projetei experiências de anotação e a infraestrutura que sustenta as ferramentas NLP da UBIAI.',
            bullets: [
              'Implementei fluxos de anotação, busca elástica e painéis de revisão acelerando a entrega de datasets.',
              'Otimizei serviços Django/Angular para performance multi-tenant com APIs REST robustas.',
              'Automatizei deploys, monitoramento e resposta a incidentes em AWS e GCP.'
            ],
            technologies: 'Python, Django, Django REST Framework, NLP, Angular, TypeScript, AWS, GCP, Docker, GitHub Actions'
          },
          {
            role: 'Especialista em desenvolvimento back-end',
            company: 'Sisal Technology Tunisia',
            location: 'Governo de Túnis, Tunísia · Presencial',
            period: 'Out. 2023 – Dez. 2023',
            intro: 'Reforcei a plataforma de experiência do cliente para um operador global de loterias.',
            bullets: [
              'Entreguei componentes Java/AEM e integrações REST sustentando jornadas omnichannel.',
              'Introduzi cenários BDD e automações QA para proteger releases críticos.',
              'Colaborei com times italianos para alinhar arquitetura e padrões de qualidade.'
            ],
            technologies: 'Java, Adobe Experience Manager, APIs REST, PostgreSQL, BDD, Docker'
          },
          {
            role: 'Engenheiro Full Stack',
            company: 'NST Groupe',
            location: 'Governo de Túnis, Tunísia',
            period: 'Out. 2022 – Out. 2023',
            intro: 'Líder técnico em soluções para o setor público e saúde.',
            bullets: [
              'Construi plataforma Spring Boot + Angular que digitaliza o monitoramento da pesca na República do Congo.',
              'Prototipei portal de apoio à decisão oncológica facilitando comparação de tratamentos.',
              'Mantive pipelines CI/CD no Azure DevOps com implantação conteinerizada e IaC.'
            ],
            technologies: 'Spring Boot, Angular, TypeScript, PostgreSQL, APIs REST, Azure DevOps, Docker, Kubernetes'
          },
          {
            role: 'Estagiário em engenharia de software',
            company: 'NST Groupe',
            location: 'Túnis, Tunísia',
            period: 'Fev. 2022 – Set. 2022',
            intro: 'Projeto de conclusão focado em modernizar processos.',
            bullets: [
              'Refatorei módulos Java e Angular seguindo boas práticas REST e governança de dados.',
              'Introduzi testes automatizados e padrões de documentação adotados pelo time.'
            ],
            technologies: 'Java, Angular, APIs REST, PostgreSQL, BDD, TypeScript'
          },
          {
            role: 'Estagiário em NLP',
            company: 'UBIAI',
            location: 'Tunísia · Remoto',
            period: 'Mai. 2021 – Out. 2021',
            intro: 'Explorei técnicas NLP para evoluir os produtos UBIAI.',
            bullets: [
              'Criei pipelines protótipo com Transformers e BERT para anotação multilíngue.',
              'Implementei cargas NLP na AWS com foco em custo, performance e monitoramento.'
            ],
            technologies: 'Python, Django, AWS, NLP, Transformers, BERT'
          },
          {
            role: 'Estagiário em desenvolvimento de jogos',
            company: 'CGI Studio',
            location: 'Menzel Temime, Tunísia',
            period: 'Jul. 2020 – Set. 2020',
            intro: 'Desenvolvi e testei experiências MMO para um estúdio independente.',
            bullets: [
              'Projetei sistemas de jogo no Unity e features ao vivo suportadas por APIs REST em C#.',
              'Produzi assets 3D e animações no Blender otimizando o pipeline artístico.'
            ],
            technologies: 'Unity, C#, APIs REST, Blender'
          }
        ],
        education: [
          {
            title: 'Diploma nacional em engenharia de software',
            school: 'Universidade SESAME',
            period: '2019 – 2022'
          },
          {
            title: 'Licenciatura em Física Fundamental',
            school: 'Faculdade de Ciências de Túnis',
            period: '2014 – 2019'
          }
        ],
        strengths: [
          'Organização e gestão de tempo garantindo entregas previsíveis.',
          'Experiência em arquitetura e design de sistemas (microserviços e monólitos).',
          'Autonomia com forte colaboração em equipes multidisciplinares.',
          'Atenção aos detalhes equilibrando velocidade e manutenção.',
          'Experiência em aplicações robustas e escaláveis.',
          'Mentalidade ágil e melhoria contínua.'
        ],
        techToolkit: [
          {
            label: 'Back-end',
            items: ['Java', 'Spring Boot', 'Python', 'Django', 'Flask', 'Django REST Framework']
          },
          {
            label: 'Front-end',
            items: ['Angular', 'TypeScript', 'React', 'JavaScript', 'HTML/CSS']
          },
          {
            label: 'DevOps & Cloud',
            items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'GitHub Actions', 'Linux', 'Bash']
          },
          {
            label: 'Dados & Observabilidade',
            items: ['PostgreSQL', 'Administração SQL', 'ELK Stack', 'Haystack']
          }
        ],
        projects: [
          {
            name: 'Plataforma de monitoramento pesqueiro do Congo',
            description: 'Plataforma nacional que digitaliza o registro de capturas e conformidade aduaneira.',
            impact: 'Dashboards em tempo real e alertas que reforçam fiscalização e reduzem relatórios manuais.',
            tech: 'Spring Boot, Angular, PostgreSQL, Docker, Azure DevOps'
          },
          {
            name: 'Portal de apoio oncológico',
            description: 'POC clínico que auxilia médicos a mapear tratamentos e ensaios por paciente.',
            impact: 'Facilitou colaboração entre clínicas com fluxo seguro e auditável.',
            tech: 'Angular, Spring Boot, NGRX, APIs REST'
          },
          {
            name: 'Melhorias de anotação NLP e busca',
            description: 'Pipelines personalizáveis, busca elástica e experiências de revisão para acelerar rotulagem.',
            impact: 'Aumentou produtividade de anotadores e gerou métricas confiáveis para relatórios.',
            tech: 'Django, Django REST Framework, Elasticsearch, Haystack, AWS'
          }
        ],
        hobbies: ['Contribuição open source', 'Jogos', 'Culinária'],
        languages: [
          { name: 'Inglês', level: 'Profissional' },
          { name: 'Francês', level: 'Profissional' },
          { name: 'Árabe', level: 'Nativo' },
          { name: 'Espanhol', level: 'Conversação' },
          { name: 'Alemão', level: 'Conversação' }
        ],
        volunteering: [
          {
            role: 'Instrutor e organizador',
            organisation: 'Association Jeunes Science de Tunisie (AJST)',
            period: '2010 – 2015',
            summary: [
              'Mentorei jovens em STEM por meio de workshops, feiras científicas e eventos maker.',
              'Organizei programas comunitários incentivando experimentação prática e trabalho em equipe.'
            ]
          },
          {
            role: 'Organizador de eventos',
            organisation: 'Rencontres cinématographiques de Menzel Temim',
            period: 'Ago. 2018',
            summary: [
              'Coordenei festival cultural de um mês com cineastas e artistas locais.',
              'Gerenciei parcerias, logística e engajamento do público para destacar talento regional.'
            ]
          }
        ],
        download: 'Baixar currículo'
      },
      volunteer: {
        title: 'Experiência voluntária',
        summary: 'Em breve...'
      },
      notFound: {
        title: '404',
        message: 'A página solicitada não existe.',
        cta: 'Voltar ao início'
      }
    }
  },
  de: {
    translation: {
      language: {
        label: 'Sprache',
        options: {
          en: 'English',
          fr: 'Français',
          es: 'Español',
          pt: 'Português',
          de: 'Deutsch'
        }
      },
      nav: {
        home: '01. Start',
        chill: '02. Entspann dich mit mir',
        resume: '03. Lebenslauf',
        contact: '04. Kontakt',
        toggle: 'Menü'
      },
      home: {
        greeting: 'Hallo, ich bin Azer Ltifi',
        role: 'Full-Stack-Entwickler',
        tagline: 'Ich entwickle ganzheitliche Web-Erlebnisse.',
        cta: {
          primary: 'Meine Arbeit ansehen',
          secondary: 'Kontakt aufnehmen'
        },
        highlightsTitle: 'Was ich ins Team einbringe',
        journeyTitle: 'Aktuelle Erfolge vor Ort',
        highlights: [
          {
            icon: 'server',
            title: 'Back-End-Kompetenz',
            description: 'Entwurf modularer Services und robuster APIs mit Spring Boot, Django und PostgreSQL für skalierbare Produkte.'
          },
          {
            icon: 'cloud',
            title: 'Cloud-native Lieferung',
            description: 'Automatisierung von Deployments auf GCP, AWS, Docker und Kubernetes für sichere, beobachtbare Releases.'
          },
          {
            icon: 'robot',
            title: 'Angewandte KI & NLP',
            description: 'Entwicklung sprachgetriebener Funktionen, die praxisnahes Machine Learning mit messbaren Geschäftszielen verbinden.'
          },
          {
            icon: 'team',
            title: 'Teamorientierte Zusammenarbeit',
            description: 'Coaching von Teams, Abstimmung mit Stakeholdern und Umsetzung komplexer Roadmaps in gemeinsame Erfolge.'
          }
        ],
        journey: [
          {
            period: '2024 · Tabhotel',
            title: 'Hospiz-SaaS-Weiterentwicklung',
            description: 'Steuerung von Onboarding-, Upsell- und Loyalitätsflows für Boutique-Hotels mit Angular-Microfrontends, Django-APIs und GCP-Pipelines.'
          },
          {
            period: '2024 · UBIAI',
            title: 'KI-gestützte Annotation',
            description: 'Skalierung von Multi-Tenant-Annotierungsworkflows, ElasticSearch und AWS/GCP-Automatisierung für die NLP-Plattform von UBIAI.'
          },
          {
            period: '2023 · Sisal',
            title: 'Omnikanal-Erlebnisse',
            description: 'Bereitstellung von Java- und AEM-Komponenten, QA-Automatisierung und Omnichannel-Erlebnissen für einen globalen Lotterieanbieter.'
          }
        ]
      },
      chill: {
        heading: 'Mach eine Pause und entspann dich mit mir!',
        intro: 'Wähle über den Schalter unten zwischen klassischem Tetris und einem Strudel-Live-Coding-Jam.',
        controlsTitle: 'Klassische Tetris-Steuerung:',
        controls: [
          '← → : Links/Rechts bewegen',
          '↑ : Drehen',
          '↓ : Schneller Fall',
          'Leertaste : Hard Drop',
          'P : Pause'
        ],
        mobileHint: 'Auf dem Smartphone: Wischen zum Bewegen, Tippen zum Drehen'
      },
      tetris: {
        stats: {
          score: 'Punkte',
          rows: 'Reihen',
          level: 'Level'
        },
        pause: 'Pause',
        resume: 'Fortsetzen',
        pausedOverlay: 'Pausiert',
        gameOverTitle: 'Spiel vorbei!',
        finalScore: 'Endstand',
        playAgain: 'Noch einmal',
        backHome: 'Zur Startseite',
        mode: {
          classic: 'Klassisches Tetris',
          strudel: 'Strudel-Jam',
          status: 'Modus: {{mode}}',
          hintClassic: 'Staple Steine, lösche Reihen und knack den Highscore.',
          hintStrudel: 'Live-Code deine Beats direkt im Browser.',
          heading: 'Strudel Live-Coding-IDE',
          tip: 'Tipp: Tippe ein Pattern wie <code>{{pattern}}</code> und drücke Shift+Enter zum Abspielen.',
          samplesHeading: 'Probiere diese Patterns',
          samplesSource: 'Weitere Strudel-Tracks auf GitHub:',
          copyPattern: 'Pattern kopieren',
          copyManual: 'Text markieren und Strg+C/⌘C drücken',
          copied: 'Kopiert!',
          freestyleHeading: 'Freestyle-Ecke',
          freestyleDescription: 'Hinterlasse eine Nachricht zu deinem Jam und schau bald für aufgenommene Freestyles vorbei.',
          playbackPlaceholder: 'Freestyle-Wiedergabe folgt bald.',
          playbackCta: 'Bleib dran',
          commentsLabel: 'Kommentar hinterlassen',
          commentsPlaceholder: 'Teile deine Gedanken, Wünsche oder Grüße...',
          commentsCta: 'Teilen (bald verfügbar)'
        }
      },
      contact: {
        title: 'Kontakt aufnehmen',
        intro: 'Ich bin offen für neue Möglichkeiten. Ob Frage oder kurzes Hallo – ich antworte so schnell wie möglich.',
        form: {
          name: 'Name',
          namePlaceholder: 'Dein Name',
          email: 'E-Mail',
          emailPlaceholder: 'Deine E-Mail',
          subject: 'Betreff',
          subjectPlaceholder: 'Betreff deiner Nachricht',
          message: 'Nachricht',
          messagePlaceholder: 'Deine Nachricht',
          submit: 'Nachricht senden',
          submitting: 'Sende...'
        },
        status: {
          success: 'Nachricht erfolgreich gesendet! Ich melde mich bald.',
          error: 'Nachricht konnte nicht gesendet werden: {{error}}',
          defaultError: 'Bitte erneut versuchen oder direkt an azeer.ltifi@gmail.com or azseza@tutamail.com schreiben'
        },
        direct: 'Oder schreibe mir direkt an:'
      },
      resume: {
        header: {
          name: 'AZER LTIFI',
          title: 'FULL-STACK-ENGINEER',
          phone: '+216 55 22 77 98',
          email: 'azeer.ltifi@gmail.com, azseza@tutamail.com',
          location: 'Tunis, Tunesien'
        },
        sectionTitles: {
          summary: 'Berufliches Profil',
          achievements: 'Wichtige Erfolge',
          experience: 'Berufserfahrung',
          education: 'Ausbildung',
          strengths: 'Stärken & Arbeitsweise',
          techToolkit: 'Technologie-Stack',
          projects: 'Ausgewählte Projekte',
          languages: 'Sprachen',
          volunteering: 'Gemeinschaft & Ehrenamt',
          hobbies: 'Hobbys',
          references: 'Referenzen'
        },
        technologiesLabel: 'Technologien:',
        impactLabel: 'Wirkung:',
        stackLabel: 'Stack:',
        summary: 'Engagierter Softwareingenieur mit Leidenschaft für Open Source und neue Technologien. Spezialisiert auf Back-End mit Java und Python, versiert in Angular-Frontends sowie PostgreSQL-Administration und ELK-Observability. Beherrscht den gesamten Delivery-Prozess von Architektur über Containerisierung bis zu CI/CD in der Cloud.',
        achievements: [
          {
            title: 'Modernisierung einer Hotelplattform',
            detail: 'Einführung modularer Gastreisen, Analyse-Dashboards und sicherer Zahlungsintegrationen für die Tabhotel SaaS-Lösung.'
          },
          {
            title: 'NLP-Lösungen im Unternehmenseinsatz',
            detail: 'Produktivsetzung von Annotationspipelines, Feedback-Workflows und Suchfunktionen, die UBIAI-Kunden verwertbare Insights liefern.'
          },
          {
            title: 'Kritische Plattformen für Behörden',
            detail: 'Aufbau widerstandsfähiger Monitoring- und Reporting-Tools zur Unterstützung von Fischereiregulierung und medizinischer Zusammenarbeit in Afrika.'
          }
        ],
        experiences: [
          {
            role: 'Full-Stack-Entwickler',
            company: 'Tabhotel',
            location: 'Gouvernement Tunis, Tunesien · Hybrid',
            period: 'Mai 2024 – heute',
            intro: 'Weiterentwicklung einer Hospitality-Experience-Plattform für Boutique-Hotelgruppen in Europa.',
            bullets: [
              'Lieferung von Angular/Django-Funktionen für Onboarding, Upsell und Loyalität über mehrere Hotels hinweg.',
              'Integration von PMS-, Zahlungs- und CRM-Anbietern mittels sicherer REST- und Event-Patterns.',
              'Betrieb containerisierter Workloads auf Google Cloud inklusive Optimierung von CI/CD, Observability und Incident Response.'
            ],
            technologies: 'Django, Angular, TypeScript, REST-APIs, PostgreSQL, Google Cloud Platform, Docker, GitHub Actions, Ubuntu'
          },
          {
            role: 'Full-Stack-Consultant · NLP & DevOps',
            company: 'UBIAI',
            location: 'Tunesien · Remote',
            period: 'Feb. 2024 – Mai 2024',
            intro: 'Gestaltung von Annotations-Erlebnissen und Infrastruktur für UBIAIs NLP-Produkte.',
            bullets: [
              'Aufbau von Annotations-Workflows, Elastic Search und Review-Dashboards zur Beschleunigung der Dataset-Erstellung.',
              'Optimierung von Django/Angular-Services für Multi-Tenant-Performance mit robusten REST-APIs.',
              'Automatisierung von Deployments, Monitoring und Incident Response auf AWS und GCP.'
            ],
            technologies: 'Python, Django, Django REST Framework, NLP, Angular, TypeScript, AWS, GCP, Docker, GitHub Actions'
          },
          {
            role: 'Back-End-Spezialist',
            company: 'Sisal Technology Tunisia',
            location: 'Gouvernement Tunis, Tunesien · Vor Ort',
            period: 'Okt. 2023 – Dez. 2023',
            intro: 'Stärkung der Customer-Experience-Plattform eines internationalen Lotterieanbieters.',
            bullets: [
              'Entwicklung von Java/AEM-Komponenten und REST-Integrationen für Omnichannel-Journeys.',
              'Einführung von BDD-Szenarien und QA-Automatisierung für wichtige Releases.',
              'Zusammenarbeit mit italienischen Teams zur Abstimmung von Architektur und Qualitätsstandards.'
            ],
            technologies: 'Java, Adobe Experience Manager, REST-APIs, PostgreSQL, BDD, Docker'
          },
          {
            role: 'Full-Stack-Entwickler',
            company: 'NST Groupe',
            location: 'Gouvernement Tunis, Tunesien',
            period: 'Okt. 2022 – Okt. 2023',
            intro: 'Technische Leitung für Projekte im öffentlichen Sektor und Gesundheitswesen.',
            bullets: [
              'Entwicklung einer Spring-Boot- und Angular-Plattform zur Digitalisierung der Fischereiaufsicht in der Republik Kongo.',
              'Prototyp eines Onkologie-Entscheidungsportals zur Unterstützung von Ärztinnen und Ärzten.',
              'Pflege von Azure-DevOps-Pipelines mit Container-Deployments und Infrastructure as Code.'
            ],
            technologies: 'Spring Boot, Angular, TypeScript, PostgreSQL, REST-APIs, Azure DevOps, Docker, Kubernetes'
          },
          {
            role: 'Software-Engineering-Praktikant',
            company: 'NST Groupe',
            location: 'Tunis, Tunesien',
            period: 'Feb. 2022 – Sep. 2022',
            intro: 'Abschlussprojekt zur Modernisierung bestehender Geschäftsprozesse.',
            bullets: [
              'Refactoring von Java- und Angular-Modulen nach REST-Best Practices und verbesserter Daten-Governance.',
              'Einführung automatisierter Tests und Dokumentationsstandards, die teamweit übernommen wurden.'
            ],
            technologies: 'Java, Angular, REST-APIs, PostgreSQL, BDD, TypeScript'
          },
          {
            role: 'NLP-Praktikant',
            company: 'UBIAI',
            location: 'Tunesien · Remote',
            period: 'Mai 2021 – Okt. 2021',
            intro: 'Erprobung von NLP-Techniken zur Erweiterung der UBIAI-Produkte.',
            bullets: [
              'Aufbau von Prototyp-Pipelines mit Transformers und BERT für mehrsprachige Annotation.',
              'Deployment von NLP-Workloads auf AWS mit Fokus auf Kosten, Performance und Monitoring.'
            ],
            technologies: 'Python, Django, AWS, NLP, Transformers, BERT'
          },
          {
            role: 'Game-Development-Praktikant',
            company: 'CGI Studio',
            location: 'Menzel Temime, Tunesien',
            period: 'Jul. 2020 – Sep. 2020',
            intro: 'Entwicklung und Testen von MMO-Spielerlebnissen für ein Indie-Studio.',
            bullets: [
              'Konzeption von Unity-Spielsystemen und Live-Features auf Basis von REST-APIs in C#.',
              'Erstellung von 3D-Assets und Animationen mit Blender zur Beschleunigung der Art-Pipeline.'
            ],
            technologies: 'Unity, C#, REST-APIs, Blender'
          }
        ],
        education: [
          {
            title: 'Nationales Diplom in Software Engineering',
            school: 'SESAME University',
            period: '2019 – 2022'
          },
          {
            title: 'Bachelor in Physik',
            school: 'Fakultät der Wissenschaften Tunis',
            period: '2014 – 2019'
          }
        ],
        strengths: [
          'Ausgeprägte Organisation und Zeitplanung für planbare Lieferungen.',
          'Erfahrung in Systemarchitektur und Design (Microservices & Monolithen).',
          'Selbstständiges Arbeiten in enger Zusammenarbeit mit interdisziplinären Teams.',
          'Detailorientierte Umsetzung mit Fokus auf Wartbarkeit.',
          'Erfahrung im Aufbau robuster, skalierbarer Anwendungen.',
          'Agile Denkweise und kontinuierliche Verbesserung.'
        ],
        techToolkit: [
          {
            label: 'Back-End',
            items: ['Java', 'Spring Boot', 'Python', 'Django', 'Flask', 'Django REST Framework']
          },
          {
            label: 'Front-End',
            items: ['Angular', 'TypeScript', 'React', 'JavaScript', 'HTML/CSS']
          },
          {
            label: 'DevOps & Cloud',
            items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'GitHub Actions', 'Linux', 'Bash']
          },
          {
            label: 'Daten & Observability',
            items: ['PostgreSQL', 'SQL-Administration', 'ELK Stack', 'Haystack']
          }
        ],
        projects: [
          {
            name: 'Fischereimonitoring Republik Kongo',
            description: 'Nationale Plattform zur Digitalisierung von Fangmeldungen und Zoll-Compliance.',
            impact: 'Echtzeit-Dashboards und Alarme stärken Aufsicht und reduzieren manuellen Berichtaufwand.',
            tech: 'Spring Boot, Angular, PostgreSQL, Docker, Azure DevOps'
          },
          {
            name: 'Onkologisches Entscheidungsportal',
            description: 'Klinischer Proof-of-Concept zur Unterstützung bei der Auswahl von Therapien und Studien.',
            impact: 'Ermöglicht Zusammenarbeit mehrerer Kliniken über einen sicheren, nachvollziehbaren Workflow.',
            tech: 'Angular, Spring Boot, NGRX, REST-APIs'
          },
          {
            name: 'NLP-Annotation & Suchoptimierung',
            description: 'Anpassbare Pipelines, Elastic Search und Review-Erlebnisse zur Beschleunigung der Datensatz-Erstellung.',
            impact: 'Steigerte die Produktivität der Annotatoren und lieferte belastbare Qualitätsmetriken.',
            tech: 'Django, Django REST Framework, Elasticsearch, Haystack, AWS'
          }
        ],
        hobbies: ['Open-Source-Beiträge', 'Gaming', 'Kochen'],
        languages: [
          { name: 'Englisch', level: 'Berufliche Kenntnisse' },
          { name: 'Französisch', level: 'Berufliche Kenntnisse' },
          { name: 'Arabisch', level: 'Muttersprache' },
          { name: 'Spanisch', level: 'Konversationssicher' },
          { name: 'Deutsch', level: 'Konversationssicher' }
        ],
        volunteering: [
          {
            role: 'Trainer & Organisator',
            organisation: 'Association Jeunes Science de Tunisie (AJST)',
            period: '2010 – 2015',
            summary: [
              'Mentoring von Jugendlichen in MINT-Fächern durch Workshops, Wissenschaftsmessen und Maker-Events.',
              'Organisation von Community-Programmen zur Förderung von Praxisprojekten und Teamarbeit.'
            ]
          },
          {
            role: 'Event-Organisator',
            organisation: 'Rencontres cinématographiques de Menzel Temim',
            period: 'Aug. 2018',
            summary: [
              'Koordination eines einmonatigen Kulturfestivals mit lokalen Filmschaffenden.',
              'Verantwortlich für Partnerschaften, Logistik und Publikumsbindung zur Präsentation regionaler Talente.'
            ]
          }
        ],
        download: 'Lebenslauf herunterladen'
      },
      volunteer: {
        title: 'Ehrenamtliche Tätigkeit',
        summary: 'Folgt in Kürze...'
      },
      notFound: {
        title: '404',
        message: 'Die gesuchte Seite wurde nicht gefunden.',
        cta: 'Zur Startseite'
      }
    }
  }
};

const supportedLanguages = Object.keys(resources);

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  try {
    const stored = window.localStorage.getItem('preferredLanguage');
    if (stored && supportedLanguages.includes(stored)) {
      return stored;
    }

    const navigatorLang = window.navigator.language
      ? window.navigator.language.split('-')[0]
      : null;
    if (navigatorLang && supportedLanguages.includes(navigatorLang)) {
      return navigatorLang;
    }
  } catch (error) {
    // Ignore storage access issues and fall back to default language
  }

  return 'en';
};

const initialLanguage = getInitialLanguage();

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

if (typeof window !== 'undefined') {
  i18n.on('languageChanged', (lng) => {
    if (supportedLanguages.includes(lng)) {
      try {
        window.localStorage.setItem('preferredLanguage', lng);
      } catch (error) {
        // Ignore persistence errors
      }
    }
  });
}

export default i18n;
