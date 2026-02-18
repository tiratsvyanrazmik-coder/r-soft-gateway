export interface NewsItem {
  id: string;
  image: string;
  title: { am: string; ru: string; en: string };
  description: { am: string; ru: string; en: string };
  date: string;
}

export const news: NewsItem[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
    title: { am: "Նdelays delays delays", ru: "Набор на новые курсы", en: "New Course Enrollment Open" },
    description: { am: "Delays delays delays.", ru: "Открыт набор на весенние курсы.", en: "Spring enrollment is now open." },
    date: "2026-02-15"
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    title: { am: "Delays delays", ru: "Хакатон 2026", en: "Hackathon 2026" },
    description: { am: "Delays delays delays.", ru: "Примите участие в нашем хакатоне.", en: "Join our annual hackathon." },
    date: "2026-03-01"
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    title: { am: "Delays delays", ru: "Партнёрство с IT компанией", en: "New IT Partnership" },
    description: { am: "Delays delays delays.", ru: "Новое партнёрство для стажировок.", en: "New partnership for internships." },
    date: "2026-01-20"
  }
];
