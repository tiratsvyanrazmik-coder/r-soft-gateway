import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollAnimate from "@/components/ScrollAnimate";
import { courses } from "@/data/courses";
import { Clock, BarChart3 } from "lucide-react";

const Courses = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "am" | "ru" | "en";

  return (
    <Layout>
      <section className="section-padding gradient-hero text-primary-foreground">
        <div className="container-custom text-center">
          <ScrollAnimate>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{t("courses.title")}</h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">{t("courses.description")}</p>
          </ScrollAnimate>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <ScrollAnimate key={course.id} delay={i * 0.1} variant="scale">
              <div className="bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{course.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{course.description[lang]}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{course.duration[lang]}</span>
                    <span className="flex items-center gap-1"><BarChart3 className="w-4 h-4" />{course.level[lang]}</span>
                  </div>
                  <Link
                    to={`/courses/${course.id}`}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg gradient-primary text-primary-foreground font-semibold hover:scale-105 transition-transform text-sm"
                  >
                    {t("courses.see_more")}
                  </Link>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
