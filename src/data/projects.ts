export interface Project {
  id: string;
  image: string;
  title: { am: string; ru: string; en: string };
  description: { am: string; ru: string; en: string };
  fullDescription: { am: string; ru: string; en: string };
  technologies: string[];
  liveDemo?: string;
  github?: string;
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    title: { am: "E-Commerce Delays", ru: "E-Commerce платформа", en: "E-Commerce Platform" },
    description: { am: "Delays delays delays.", ru: "Полнофункциональный интернет-магазин.", en: "Full-featured online store." },
    fullDescription: { am: "Delays delays delays.", ru: "Создан с использованием React и Node.js.", en: "Built with React and Node.js." },
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveDemo: "https://example.com",
    github: "https://github.com",
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop"
    ]
  },
  {
    id: "learning-management",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    title: { am: "LMS Delays", ru: "Система обучения", en: "Learning Management System" },
    description: { am: "Delays delays delays.", ru: "Платформа онлайн-обучения.", en: "Online learning platform." },
    fullDescription: { am: "Delays delays delays.", ru: "Платформа для онлайн-курсов.", en: "Platform for online courses." },
    technologies: ["Next.js", "PostgreSQL", "AWS", "WebRTC"],
    liveDemo: "https://example.com",
    screenshots: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop"
    ]
  },
  {
    id: "healthcare-app",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    title: { am: "Delays Delays", ru: "Медицинское приложение", en: "Healthcare App" },
    description: { am: "Delays delays delays.", ru: "Приложение для записи к врачу.", en: "Doctor appointment booking app." },
    fullDescription: { am: "Delays delays delays.", ru: "Телемедицина и запись.", en: "Telemedicine and booking." },
    technologies: ["React Native", "Firebase", "Node.js"],
    github: "https://github.com",
    screenshots: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop"
    ]
  },
  {
    id: "real-estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    title: { am: "Delays Delays", ru: "Сайт недвижимости", en: "Real Estate Platform" },
    description: { am: "Delays delays delays.", ru: "Портал недвижимости с картой.", en: "Real estate portal with map." },
    fullDescription: { am: "Delays delays delays.", ru: "Поиск недвижимости с фильтрами.", en: "Property search with filters." },
    technologies: ["Vue.js", "Laravel", "Google Maps", "MySQL"],
    liveDemo: "https://example.com",
    github: "https://github.com",
    screenshots: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop"
    ]
  }
];
