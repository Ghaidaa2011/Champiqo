import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
const enTranslations = {
  navigation: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    portfolio: 'Portfolio',
    testimonials: 'Testimonials',
    blog: 'Blog',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Welcome to',
    name: 'CHAMPIQO CLINIC',
    title: 'PLAY • RECOVER • COMPETE',
    description: 'Elite Sports Physical Therapy & Field Medical Support for Professional Athletes and Competitive Teams.',
    cta: 'Book Assessment',
    contactCta: 'Contact Us',
  },
  about: {
    title: 'About Champiqo',
    subtitle: 'Elite Sports Medical Care',
    description: 'Champiqo Clinic specializes in sports rehabilitation, performance enhancement, and professional field medical coverage. We provide evidence-based treatment protocols designed to accelerate recovery and optimize athletic performance for professional and competitive athletes.',
    experience: 'Years of Experience',
    projects: 'Athletes Treated',
    clients: 'Championship Coverage',
    experienceCount: '5+',
    projectsCount: '500+',
    clientsCount: '30+',
  },
  services: {
    title: 'Our Services',
    subtitle: 'Professional Sports & Medical Support',

    service1: {
      title: 'Physical Therapy',
      description: 'Comprehensive orthopedic and sports physical therapy focused on injury prevention, pain management, and functional restoration.',
    },
    service2: {
      title: 'Sports Rehabilitation',
      description: 'Structured rehabilitation programs designed to ensure safe and effective return-to-play.',
    },
    service3: {
      title: 'Recovery & Performance',
      description: 'Advanced recovery protocols including manual therapy, mobility work, and performance optimization.',
    },
    service4: {
      title: 'Field Medical Support',
      description: 'On-field injury assessment and medical coverage for events, championships, and competitive teams.',
    },
    service5: {
      title: 'Sports Nutrition',
      description: 'Performance-focused nutrition plans tailored to athletes and competitive individuals.',
    },
  },
  specialists: {
    title: 'Our Specialists',
    subtitle: 'Clinical expertise and professional experience',

    specialist1: {
      title: 'Orthopedic Rehabilitation Specialist',
      category: 'Sports & Musculoskeletal',
      description: 'Specialized in managing orthopedic injuries and structured return-to-play protocols.',
    },

    specialist2: {
      title: 'Sports Injury Management',
      category: 'On-Field & Acute Care',
      description: 'Immediate assessment, injury management, and athlete-centered medical decision-making.',
    },

    specialist3: {
      title: 'Performance Optimization',
      category: 'Strength & Conditioning',
      description: 'Evidence-based programs to enhance athletic performance and reduce injury risk.',
    },

    specialist4: {
      title: 'ICU & Post-Surgical Rehabilitation',
      category: 'Clinical Rehabilitation',
      description: 'Comprehensive rehabilitation planning for post-operative and critical care patients.',
    },
  },
  testimonials: {
    title: 'Testimonials',
    subtitle: 'What my clients say',
    testimonial1: {
      quote: '"Highly recommend! The physical therapy sessions were exactly what I needed for my recovery."',
      author: 'Fatima Ali',
      company: 'ABC Company',
    },
    testimonial2: {
      quote: '"Outstanding results with the laser therapy treatments. Very knowledgeable and caring professional."',
      author: 'Mohamed Hassan',
      company: 'XYZ Corp',
    },
  },
  blog: {
    title: 'My Blog',
    subtitle: 'Latest articles and insights',
    readMore: 'Read More',
    post1: {
      title: 'The Future of Web Development',
      date: 'May 1, 2023',
      summary: 'Exploring emerging trends and technologies that will shape the future of web development.',
    },
    post2: {
      title: 'Designing for Accessibility',
      date: 'April 15, 2023',
      summary: 'Best practices for creating websites that are accessible to all users regardless of abilities.',
    },
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'Professional sports medical coverage starts here',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    messagePlaceholder: 'Your Message',
    sendButton: 'Send Message',
    address: 'Sheikh Zayed, 6th of October, Egypt',
    phone: '+20 155 815 5330',
    email: 'info@champiqo.eg',
    responseNote: 'We will respond as soon as possible.',

    // successMessage: 'Your message has been sent. Thank you!',
    // errorMessage: 'There was an error sending your message. Please try again.',
  },
  footer: {
    copyright: '© 2026 CHAMPIQO CLINIC. All rights reserved.',
    links: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
};

// Arabic translations
const arTranslations = {
  navigation: {
    home: 'الرئيسية',
    about: 'عنّي',
    services: 'الخدمات',
    portfolio: 'الأعمال',
    testimonials: 'آراء العملاء',
    blog: 'المدونة',
    contact: 'اتصل بي',
  },
  hero: {
    greeting: 'مرحباً بكم في',
    name: 'عيادة CHAMPIQO',
    title: 'العب • تعافى • نافس',
    description: 'علاج طبيعي رياضي احترافي ودعم طبي ميداني للرياضيين والفرق التنافسية.',
    cta: 'احجز تقييم',
    contactCta: 'تواصل معنا',
  },
  about: {
    title: 'عن Champiqo',
    subtitle: 'رعاية طبية رياضية متقدمة',
    description: 'تتخصص عيادة Champiqo في التأهيل الرياضي، تحسين الأداء، والتغطية الطبية الميدانية للبطولات والفرق الرياضية، مع بروتوكولات علاجية مبنية على الأدلة العلمية لتسريع التعافي وتحسين الأداء.',
    experience: 'سنوات الخبرة',
    projects: 'عدد الرياضيين',
    clients: 'تغطيات بطولات',
    experienceCount: '5+',
    projectsCount: '500+',
    clientsCount: '30+',
  },
  services: {
    title: 'خدماتنا',
    subtitle: 'الدعم الطبي والرياضي الاحترافي',

    service1: {
      title: 'العلاج الطبيعي',
      description: 'خدمات علاج طبيعي شاملة متخصصة في الإصابات العظمية والرياضية مع التركيز على الوقاية من الإصابات واستعادة الكفاءة الحركية.',
    },

    service2: {
      title: 'التأهيل الرياضي',
      description: 'برامج تأهيل متكاملة مصممة لإعادة الرياضيين إلى الملاعب بأمان ووفق بروتوكولات عودة للمنافسة مبنية على أسس علمية.',
    },

    service3: {
      title: 'الاستشفاء وتحسين الأداء',
      description: 'بروتوكولات استشفاء متقدمة تشمل العلاج اليدوي، تحسين الحركة، وبرامج تطوير الأداء البدني.',
    },

    service4: {
      title: 'الدعم الطبي الميداني',
      description: 'تغطية طبية فورية للمباريات والبطولات مع تقييم وإدارة الإصابات داخل الملعب.',
    },

    service5: {
      title: 'التغذية الرياضية',
      description: 'خطط غذائية مبنية على الأدلة العلمية لدعم الأداء الرياضي وتسريع التعافي.',
    },
  },
  specialists: {
    title: 'فريق التخصصات',
    subtitle: 'خبرات إكلينيكية وتجربة مهنية احترافية',

    specialist1: {
      title: 'أخصائي التأهيل العظمي',
      category: 'إصابات الملاعب والجهاز الحركي',
      description: 'متخصص في إدارة الإصابات العظمية وتنفيذ بروتوكولات العودة الآمنة للملاعب.',
    },

    specialist2: {
      title: 'إدارة الإصابات الرياضية',
      category: 'الرعاية الميدانية والطوارئ',
      description: 'تقييم فوري وإدارة احترافية للإصابات مع اتخاذ قرارات طبية دقيقة تتمحور حول اللاعب.',
    },

    specialist3: {
      title: 'تحسين الأداء الرياضي',
      category: 'الإعداد البدني',
      description: 'برامج مبنية على الأدلة العلمية لرفع كفاءة الأداء وتقليل مخاطر الإصابات.',
    },

    specialist4: {
      title: 'تأهيل ما بعد الجراحة والعناية المركزة',
      category: 'التأهيل الإكلينيكي',
      description: 'خطط تأهيل متكاملة للحالات الجراحية ومرضى الرعاية الحرجة.',
    },
  },
  testimonials: {
    title: 'آراء العملاء',
    subtitle: 'ماذا يقول عملائي',
    testimonial1: {
      quote: '"أنصح بها بشدة! جلسات العلاج الطبيعي كانت بالضبط ما أحتاجه للتعافي."',
      author: 'فاطمة علي',
      company: 'شركة ABC',
    },
    testimonial2: {
      quote: '"نتائج رائعة مع علاجات الليزر. محترفة وتهتم كثيراً بالعميل."',
      author: 'محمد حسن',
      company: 'شركة XYZ',
    },
  },
  blog: {
    title: 'مدونتي',
    subtitle: 'أحدث المقالات والرؤى',
    readMore: 'اقرأ المزيد',
    post1: {
      title: 'مستقبل تطوير الويب',
      date: '1 مايو 2023',
      summary: 'استكشاف الاتجاهات والتقنيات الناشئة التي ستشكل مستقبل تطوير الويب.',
    },
    post2: {
      title: 'تصميم لسهولة الوصول',
      date: '15 أبريل 2023',
      summary: 'أفضل الممارسات لإنشاء مواقع ويب يمكن الوصول إليها لجميع المستخدمين بغض النظر عن قدراتهم.',
    },
  },
  contact: {
    title: 'تواصل معنا',
    subtitle: 'التغطية الطبية الرياضية الاحترافية تبدأ من هنا',
    namePlaceholder: 'الاسم الكامل',
    emailPlaceholder: 'البريد الإلكتروني',
    messagePlaceholder: 'اكتب رسالتك هنا',
    sendButton: 'إرسال',
    address: 'الشيخ زايد، السادس من أكتوبر، مصر',
    phone: '+20 155 815 5330',
    email: 'info@champiqo.eg',
    responseNote: 'سيتم التواصل معك في أقرب وقت ممكن.',
    // successMessage: 'تم إرسال رسالتك. شكرًا لك!',
    // errorMessage: 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.',
  },
  footer: {
    copyright: '© 2025 CHAMPIQO CLINIC. جميع الحقوق محفوظة.',
    links: {
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
    },
  },
};

// Initialize i18next 
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      ar: {
        translation: arTranslations,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
