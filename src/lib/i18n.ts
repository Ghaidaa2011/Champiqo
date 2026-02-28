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
    greeting: 'Hello, I am',
    name: 'Alaa Hegazy',
    title: 'Physiotherapist working at Diamond clinic',
    description: 'Non-invasive aesthetic treatments and nutrition coaching specialist',
    cta: 'View My Work',
    contactCta: 'Contact Me',
  },
  about: {
    title: 'About Me',
    subtitle: 'Get to know me better',
    description: 'Physical Therapy graduate with 3 years of experience in non-invasive aesthetic treatments and nutrition coaching. I am passionate about helping clients achieve their health and body goals through advanced therapeutic techniques. With expertise in laser therapy, body contouring, and personalized nutrition plans, I provide comprehensive care that combines medical knowledge with aesthetic treatments to deliver optimal results for my clients.',
    experience: 'Years of Experience',
    projects: "Satisfied Clients",
    clients: 'Treatments Provided',
    experienceCount: '+3',
    projectsCount: '50+',
    clientsCount: '30+',
  },
  services: {
    title: 'My Services',
    subtitle: 'What I can do for you',
    service1: {
      title: 'Laser Therapy',
      description: 'Advanced laser treatments for fat reduction and skin rejuvenation using state-of-the-art devices.',
    },
    service2: {
      title: 'Body Contouring',
      description: 'Non-invasive body contouring techniques including cavitation, radiofrequency, and vacuum therapy.',
    },
    service3: {
      title: 'Nutrition Coaching',
      description: 'Personalized nutrition plans tailored to complement your treatment goals and lifestyle.',
    },
  },
  portfolio: {
    title: 'My Work',
    subtitle: 'Experience and expertise in action',
    viewAll: 'View All Projects',
    project1: {
      title: 'Diamond Clinic Experience',
      category: 'Professional Experience',
      description: 'Non-invasive body contouring specialist with 3+ years of experience',
    },
    project2: {
      title: 'Laser Therapy Treatments',
      category: 'Laser Therapy',
      description: 'Expertise in operating advanced laser devices for fat reduction',
    },
    project3: {
      title: 'Nutrition Consultation',
      category: 'Nutrition Coaching',
      description: 'Personalized nutrition plans for optimal health and wellness',
    },
    project4: {
      title: 'Physical Therapy Practice',
      category: 'Physical Therapy',
      description: 'Comprehensive physiotherapy treatments and rehabilitation',
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
    title: 'Contact Me',
    subtitle: 'Let\'s work together',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    messagePlaceholder: 'Your Message',
    sendButton: 'Send Message',
    address: 'Cairo, Egypt',
    phone: '+20 111 110 6322',
    email: 'alaahegazy962002@gmail.com',
    responseNote: "I'll respond to your message as soon as possible. Thank you for reaching out!",

    // successMessage: 'Your message has been sent. Thank you!',
    // errorMessage: 'There was an error sending your message. Please try again.',
  },
  footer: {
    copyright: '© 2025 Alaa Hegazy. All rights reserved.',
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
    greeting: 'مرحباً، أنا',
    name: 'الاء حجازي',
    title: 'أخصائية علاج طبيعي في عيادة دايموند',
    description: 'متخصصة في العلاجات التجميلية غير الجراحية والتغذية العلاجية',
    cta: 'شاهد أعمالي',
    contactCta: 'اتصل بي',
  },
  about: {
    title: 'عنّي',
    subtitle: 'تعرف عليّ أكثر',
    description: 'خريجة علاج طبيعي مع خبرة 3 سنوات في العلاجات التجميلية غير الجراحية والتغذية العلاجية. شغوفة بمساعدة العملاء على تحقيق أهدافهم الصحية والجمالية من خلال تقنيات علاجية متقدمة. لدي خبرة في العلاج بالليزر، نحت الجسم، وخطط التغذية الشخصية، وأقدم رعاية شاملة تجمع بين المعرفة الطبية والعلاجات التجميلية لتحقيق أفضل النتائج.',
    experience: 'سنوات الخبرة',
    projects: 'العملاء الراضون',
    clients: 'العلاجات المقدمة',
    experienceCount: '+3',
    projectsCount: '50+',
    clientsCount: '30+',
  },
  services: {
    title: 'خدماتي',
    subtitle: 'ماذا يمكنني أن أقدم لك',
    service1: {
      title: 'العلاج بالليزر',
      description: 'علاجات ليزر متقدمة لتقليل الدهون وتجديد البشرة باستخدام أحدث الأجهزة.',
    },
    service2: {
      title: 'نحت الجسم',
      description: 'تقنيات نحت الجسم غير الجراحية مثل الكافيتيشن، الترددات الراديوية، والعلاج بالشفط.',
    },
    service3: {
      title: 'التغذية العلاجية',
      description: 'خطط تغذية شخصية مصممة لتكمل أهداف علاجك ونمط حياتك.',
    },
  },
  portfolio: {
    title: 'أعمالي',
    subtitle: 'الخبرة والاحترافية في العمل',
    viewAll: 'عرض جميع الأعمال',
    project1: {
      title: 'خبرة في عيادة دايموند',
      category: 'خبرة مهنية',
      description: 'متخصصة في نحت الجسم غير الجراحي مع خبرة أكثر من 3 سنوات',
    },
    project2: {
      title: 'علاجات الليزر',
      category: 'العلاج بالليزر',
      description: 'خبرة في تشغيل أجهزة الليزر المتقدمة لتقليل الدهون',
    },
    project3: {
      title: 'استشارات التغذية',
      category: 'التغذية العلاجية',
      description: 'خطط تغذية شخصية لصحة ورفاهية مثالية',
    },
    project4: {
      title: 'ممارسة العلاج الطبيعي',
      category: 'العلاج الطبيعي',
      description: 'علاجات علاج طبيعي شاملة وإعادة تأهيل',
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
    title: 'اتصل بي',
    subtitle: 'لنعمل معًا',
    namePlaceholder: 'اسمك',
    emailPlaceholder: 'بريدك الإلكتروني',
    messagePlaceholder: 'رسالتك',
    sendButton: 'إرسال الرسالة',
    address: 'القاهرة، مصر',
    phone: '+1 234 567 890',
    email: 'alaahegazy962002@gmail.com',
    responseNote: "سأرد على رسالتك في أقرب وقت ممكن. شكرًا لتواصلك!",
    // successMessage: 'تم إرسال رسالتك. شكرًا لك!',
    // errorMessage: 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.',
  },
  footer: {
    copyright: '© 2025 الاء حجازي. جميع الحقوق محفوظة.',
    links: {
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
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
