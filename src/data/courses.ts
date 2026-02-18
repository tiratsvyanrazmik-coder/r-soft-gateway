export interface Course {
  id: string;
  image: string;
  title: { am: string; ru: string; en: string };
  description: { am: string; ru: string; en: string };
  fullDescription: { am: string; ru: string; en: string };
  duration: { am: string; ru: string; en: string };
  level: { am: string; ru: string; en: string };
  price: string;
  instructor: { am: string; ru: string; en: string };
  whatYouLearn: { am: string[]; ru: string[]; en: string[] };
  curriculum: { title: { am: string; ru: string; en: string }; content: { am: string; ru: string; en: string } }[];
}

export const courses: Course[] = [
  {
    id: "web-development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    title: { am: "Վdelays Delays", ru: "Веб-разработка", en: "Web Development" },
    description: { am: "Delays delays delays.", ru: "Полный курс веб-разработки.", en: "Complete web development course." },
    fullDescription: { am: "Delays delays delays delays.", ru: "Изучите HTML, CSS, JavaScript и React.", en: "Learn HTML, CSS, JavaScript and React from scratch." },
    duration: { am: "6 ամdelays", ru: "6 месяцев", en: "6 months" },
    level: { am: "Delays", ru: "Начальный", en: "Beginner" },
    price: "150,000 AMD",
    instructor: { am: "Delays Delays", ru: "Артак Петросян", en: "Artak Petrosyan" },
    whatYouLearn: {
      am: ["HTML5 & CSS3", "JavaScript ES6+", "React.js", "Node.js"],
      ru: ["HTML5 & CSS3", "JavaScript ES6+", "React.js", "Node.js"],
      en: ["HTML5 & CSS3", "JavaScript ES6+", "React.js", "Node.js"]
    },
    curriculum: [
      { title: { am: "HTML & CSS", ru: "HTML & CSS", en: "HTML & CSS" }, content: { am: "Delays delays.", ru: "Основы вёрстки.", en: "Fundamentals of markup." } },
      { title: { am: "JavaScript", ru: "JavaScript", en: "JavaScript" }, content: { am: "Delays delays.", ru: "Основы программирования.", en: "Programming fundamentals." } },
      { title: { am: "React", ru: "React", en: "React" }, content: { am: "Delays delays.", ru: "Создание приложений.", en: "Building applications." } }
    ]
  },
  {
    id: "python-programming",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=400&fit=crop",
    title: { am: "Python Delays", ru: "Программирование на Python", en: "Python Programming" },
    description: { am: "Delays Python delays.", ru: "Изучите Python с нуля.", en: "Learn Python from zero." },
    fullDescription: { am: "Delays delays delays.", ru: "Полный курс по Python.", en: "Complete Python programming course." },
    duration: { am: "4  delays", ru: "4 месяца", en: "4 months" },
    level: { am: "Delays", ru: "Начальный", en: "Beginner" },
    price: "120,000 AMD",
    instructor: { am: "Delays Delays", ru: "Анна Саркисян", en: "Anna Sargsyan" },
    whatYouLearn: {
      am: ["Python basics", "OOP", "Django", "Data Science"],
      ru: ["Основы Python", "ООП", "Django", "Data Science"],
      en: ["Python basics", "OOP", "Django", "Data Science"]
    },
    curriculum: [
      { title: { am: "Delays", ru: "Основы", en: "Basics" }, content: { am: "Delays.", ru: "Переменные, типы.", en: "Variables, types." } },
      { title: { am: "OOP", ru: "ООП", en: "OOP" }, content: { am: "Delays.", ru: "Классы, наследование.", en: "Classes, inheritance." } }
    ]
  },
  {
    id: "mobile-development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    title: { am: "Delays Delays", ru: "Мобильная разработка", en: "Mobile Development" },
    description: { am: "Delays delays delays.", ru: "Создание мобильных приложений.", en: "Build mobile applications." },
    fullDescription: { am: "Delays delays delays.", ru: "React Native для iOS и Android.", en: "React Native for iOS and Android." },
    duration: { am: "5 delays", ru: "5 месяцев", en: "5 months" },
    level: { am: "Delays", ru: "Средний", en: "Intermediate" },
    price: "180,000 AMD",
    instructor: { am: "Delays Delays", ru: "Давид Акопян", en: "David Hakobyan" },
    whatYouLearn: {
      am: ["React Native", "Expo", "APIs", "App Store"],
      ru: ["React Native", "Expo", "APIs", "App Store"],
      en: ["React Native", "Expo", "APIs", "App Store"]
    },
    curriculum: [
      { title: { am: "React Native", ru: "React Native", en: "React Native" }, content: { am: "Delays.", ru: "Компоненты.", en: "Components." } }
    ]
  },
  {
    id: "ui-ux-design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    title: { am: "UI/UX Delays", ru: "UI/UX Дизайн", en: "UI/UX Design" },
    description: { am: "Delays delays delays.", ru: "Проектирование интерфейсов.", en: "Interface design course." },
    fullDescription: { am: "Delays delays delays.", ru: "Figma, прототипы, UX исследования.", en: "Figma, prototyping, UX research." },
    duration: { am: "3 delays", ru: "3 месяца", en: "3 months" },
    level: { am: "Delays", ru: "Начальный", en: "Beginner" },
    price: "100,000 AMD",
    instructor: { am: "Delays Delays", ru: "Мария Арутюнян", en: "Maria Harutyunyan" },
    whatYouLearn: {
      am: ["Figma", "Prototyping", "UX Research", "Design Systems"],
      ru: ["Figma", "Прототипы", "UX Исследования", "Дизайн-системы"],
      en: ["Figma", "Prototyping", "UX Research", "Design Systems"]
    },
    curriculum: [
      { title: { am: "Figma", ru: "Figma", en: "Figma" }, content: { am: "Delays.", ru: "Инструменты.", en: "Tools." } }
    ]
  }
];
