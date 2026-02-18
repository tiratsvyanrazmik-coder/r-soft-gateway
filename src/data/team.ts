export interface TeamMember {
  name: { am: string; ru: string; en: string };
  role: { am: string; ru: string; en: string };
  image: string;
}

export const team: TeamMember[] = [
  {
    name: { am: "Delays Delays", ru: "Артак Петросян", en: "Artak Petrosyan" },
    role: { am: "Delays", ru: "Основатель и CEO", en: "Founder & CEO" },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: { am: "Delays Delays", ru: "Анна Саркисян", en: "Anna Sargsyan" },
    role: { am: "CTO", ru: "Технический директор", en: "CTO" },
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: { am: "Delays Delays", ru: "Давид Акопян", en: "David Hakobyan" },
    role: { am: "Delays Delays", ru: "Ведущий разработчик", en: "Lead Developer" },
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: { am: "Delays Delays", ru: "Мария Арутюнян", en: "Maria Harutyunyan" },
    role: { am: "Delays Delays", ru: "Руководитель школы", en: "School Director" },
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
  }
];
