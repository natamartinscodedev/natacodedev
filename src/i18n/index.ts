
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      // Header
      "nav.home": "Início",
      "nav.about": "Sobre",
      "nav.projects": "Projetos",
      "nav.contact": "Contato",
      "button.resume": "Currículo",
      "button.contact": "Contato",
      "button.downloadResume": "Baixar Currículo",
      "button.getInTouch": "Entre em Contato",
      
      // Hero
      "hero.greeting": "Olá, eu sou",
      "hero.title": "Desenvolvedor Frontend Pleno",
      "hero.subtitle": "Transformando ideias em experiências digitais excepcionais com React, Next.js e TypeScript",
      "hero.cta.projects": "Ver Projetos",
      "hero.cta.contact": "Solicitar Orçamento",
      
      // Services
      "services.title": "Serviços",
      "services.subtitle": "Soluções completas para suas necessidades digitais",
      "services.landing.title": "Landing Pages",
      "services.landing.description": "Páginas otimizadas para conversão com design responsivo e performance excepcional",
      "services.webapp.title": "Aplicações Web",
      "services.webapp.description": "Sistemas complexos e escaláveis desenvolvidos com as melhores práticas",
      "services.responsive.title": "Sites Responsivos",
      "services.responsive.description": "Experiências perfeitas em qualquer dispositivo, do mobile ao desktop",
      "services.performance.title": "Otimização",
      "services.performance.description": "Melhoria de performance e SEO para maximizar resultados",
      
      // About
      "about.title": "Sobre Mim",
      "about.description": "Desenvolvedor Frontend Pleno apaixonado por criar soluções digitais que fazem a diferença. Com experiência sólida em React, Next.js e TypeScript, transformo ideias complexas em interfaces intuitivas e performáticas.",
      "about.mission.title": "Minha Missão",
      "about.mission.description": "Construir experiências digitais excepcionais que combinam tecnologia de ponta, design centrado no usuário e código limpo e sustentável.",
      "about.skills": "Habilidades Técnicas",
      "about.experience": "Anos de Experiência",
      "about.projects": "Projetos Concluídos",
      "about.clients": "Clientes Satisfeitos",
      
      // Projects
      "projects.title": "Meus Projetos",
      "projects.subtitle": "Alguns dos meus trabalhos mais recentes",
      "projects.filter.all": "Todos",
      "projects.filter.landing": "Landing Pages",
      "projects.filter.webapp": "Web Apps",
      "projects.filter.ecommerce": "E-commerce",
      "projects.viewLive": "Ver Projeto",
      "projects.viewCode": "Ver Código",
      
      // Contact
      "contact.title": "Vamos Conversar?",
      "contact.subtitle": "Estou disponível para novos desafios e projetos",
      "contact.form.name": "Nome",
      "contact.form.email": "E-mail",
      "contact.form.subject": "Assunto",
      "contact.form.message": "Mensagem",
      "contact.form.send": "Enviar Mensagem",
      "contact.form.placeholder.name": "Seu nome completo",
      "contact.form.placeholder.email": "seu@email.com",
      "contact.form.placeholder.message": "Conte-me sobre seu projeto...",
      "contact.subject.job": "Oportunidade de Emprego",
      "contact.subject.project": "Orçamento de Projeto",
      "contact.subject.other": "Outro",
      
      // Footer
      "footer.description": "Desenvolvedor Frontend Pleno especializado em React e Next.js, criando experiências digitais excepcionais.",
      "footer.navigation": "Navegação",
      "footer.services": "Serviços",
      "footer.services.landing": "Landing Pages",
      "footer.services.react": "Aplicações React",
      "footer.services.responsive": "Sites Responsivos",
      "footer.services.performance": "Otimização de Performance",
      "footer.madeWith": "Feito com",
      "footer.and": "e",
      "footer.tech": "Desenvolvido com React, TypeScript e Tailwind CSS"
    }
  },
  en: {
    translation: {
      // Header
      "nav.home": "Home",
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "button.resume": "Resume",
      "button.contact": "Contact",
      "button.downloadResume": "Download Resume",
      "button.getInTouch": "Get in Touch",
      
      // Hero
      "hero.greeting": "Hi, I'm",
      "hero.title": "Senior Frontend Developer",
      "hero.subtitle": "Transforming ideas into exceptional digital experiences with React, Next.js and TypeScript",
      "hero.cta.projects": "View Projects",
      "hero.cta.contact": "Get Quote",
      
      // Services
      "services.title": "Services",
      "services.subtitle": "Complete solutions for your digital needs",
      "services.landing.title": "Landing Pages",
      "services.landing.description": "Conversion-optimized pages with responsive design and exceptional performance",
      "services.webapp.title": "Web Applications",
      "services.webapp.description": "Complex and scalable systems developed with best practices",
      "services.responsive.title": "Responsive Websites",
      "services.responsive.description": "Perfect experiences on any device, from mobile to desktop",
      "services.performance.title": "Optimization",
      "services.performance.description": "Performance and SEO improvements to maximize results",
      
      // About
      "about.title": "About Me",
      "about.description": "Senior Frontend Developer passionate about creating digital solutions that make a difference. With solid experience in React, Next.js and TypeScript, I transform complex ideas into intuitive and performant interfaces.",
      "about.mission.title": "My Mission",
      "about.mission.description": "Build exceptional digital experiences that combine cutting-edge technology, user-centered design and clean, sustainable code.",
      "about.skills": "Technical Skills",
      "about.experience": "Years of Experience",
      "about.projects": "Completed Projects",
      "about.clients": "Satisfied Clients",
      
      // Projects
      "projects.title": "My Projects",
      "projects.subtitle": "Some of my most recent work",
      "projects.filter.all": "All",
      "projects.filter.landing": "Landing Pages",
      "projects.filter.webapp": "Web Apps",
      "projects.filter.ecommerce": "E-commerce",
      "projects.viewLive": "View Project",
      "projects.viewCode": "View Code",
      
      // Contact
      "contact.title": "Let's Talk?",
      "contact.subtitle": "I'm available for new challenges and projects",
      "contact.form.name": "Name",
      "contact.form.email": "Email",
      "contact.form.subject": "Subject",
      "contact.form.message": "Message",
      "contact.form.send": "Send Message",
      "contact.form.placeholder.name": "Your full name",
      "contact.form.placeholder.email": "your@email.com",
      "contact.form.placeholder.message": "Tell me about your project...",
      "contact.subject.job": "Job Opportunity",
      "contact.subject.project": "Project Quote",
      "contact.subject.other": "Other",
      
      // Footer
      "footer.description": "Senior Frontend Developer specialized in React and Next.js, creating exceptional digital experiences.",
      "footer.navigation": "Navigation",
      "footer.services": "Services",
      "footer.services.landing": "Landing Pages",
      "footer.services.react": "React Applications",
      "footer.services.responsive": "Responsive Websites",
      "footer.services.performance": "Performance Optimization",
      "footer.madeWith": "Made with",
      "footer.and": "and",
      "footer.tech": "Built with React, TypeScript and Tailwind CSS"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
