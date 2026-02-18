import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import ScrollAnimate from "@/components/ScrollAnimate";
import { courses } from "@/data/courses";
import { ArrowLeft, Clock, BarChart3, DollarSign, User, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CourseDetail = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "am" | "ru" | "en";

  const course = courses.find((c) => c.id === id);
  if (!course) {
    return (
      <Layout>
        <div className="section-padding container-custom text-center">
          <p className="text-muted-foreground">Course not found</p>
          <Link to="/courses" className="text-primary mt-4 inline-block">{t("common.back")}</Link>
        </div>
      </Layout>
    );
  }

  const related = courses.filter((c) => c.id !== id).slice(0, 3);

  return (
    <Layout>
      <section className="section-padding gradient-hero text-primary-foreground">
        <div className="container-custom">
          <Link to="/courses" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> {t("common.back")}
          </Link>
          <ScrollAnimate>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">{course.title[lang]}</h1>
            <p className="text-primary-foreground/70 max-w-2xl text-lg">{course.fullDescription[lang]}</p>
          </ScrollAnimate>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ScrollAnimate>
              <img src={course.image} alt={course.title[lang]} className="w-full rounded-xl" loading="lazy" />
            </ScrollAnimate>

            {/* What you'll learn */}
            <ScrollAnimate>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t("courses.what_learn")}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.whatYouLearn[lang].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollAnimate>

            {/* Curriculum */}
            <ScrollAnimate>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t("courses.curriculum")}</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {course.curriculum.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-lg border border-border px-4">
                    <AccordionTrigger className="font-semibold text-foreground">{item.title[lang]}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{item.content[lang]}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollAnimate>
          </div>

          {/* Sidebar */}
          <div>
            <ScrollAnimate variant="fade-right">
              <div className="bg-card rounded-xl p-6 card-shadow sticky top-24 space-y-5">
                <div className="flex items-center gap-3 text-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <span className="text-sm text-muted-foreground">{t("courses.duration")}</span>
                    <p className="font-semibold">{course.duration[lang]}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <div>
                    <span className="text-sm text-muted-foreground">{t("courses.level")}</span>
                    <p className="font-semibold">{course.level[lang]}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <div>
                    <span className="text-sm text-muted-foreground">{t("courses.price")}</span>
                    <p className="font-semibold">{course.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <User className="w-5 h-5 text-primary" />
                  <div>
                    <span className="text-sm text-muted-foreground">{t("courses.instructor")}</span>
                    <p className="font-semibold">{course.instructor[lang]}</p>
                  </div>
                </div>
                <button className="w-full py-3 rounded-lg gradient-primary text-primary-foreground font-semibold button-shadow hover:scale-105 transition-transform">
                  {t("courses.enroll")}
                </button>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      {related.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">{t("courses.related")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((c) => (
                <Link
                  key={c.id}
                  to={`/courses/${c.id}`}
                  className="bg-card rounded-xl overflow-hidden card-shadow hover:-translate-y-1 transition-transform group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={c.image} alt={c.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-semibold text-foreground">{c.title[lang]}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{c.description[lang]}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default CourseDetail;
