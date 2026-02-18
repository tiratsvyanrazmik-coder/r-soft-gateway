import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollAnimate from "@/components/ScrollAnimate";
import AnimatedCounter from "@/components/AnimatedCounter";
import { courses } from "@/data/courses";
import { projects } from "@/data/projects";
import { news } from "@/data/news";
import heroBg from "@/assets/hero-bg.jpg";

const techLogos = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Node.js",
  "Python", "PHP", "Vue.js", "Angular", "MongoDB", "PostgreSQL",
  "Docker", "Git", "Figma", "AWS",
];

const Index = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "am" | "ru" | "en";

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/60" />

        {/* Floating shapes */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/4 right-[15%] w-20 h-20 rounded-full bg-primary/20 blur-xl hidden md:block"
        />
        <motion.div
          animate={{ y: [15, -15, 15] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-1/3 right-[25%] w-32 h-32 rounded-full bg-secondary/20 blur-xl hidden md:block"
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6"
            >
              <Code className="w-4 h-4" />
              {t("hero.subtitle")}
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg gradient-primary text-primary-foreground font-semibold button-shadow hover:scale-105 transition-transform"
              >
                <BookOpen className="w-5 h-5" />
                {t("hero.cta_courses")}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                {t("hero.cta_contact")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Marquee */}
      <section className="py-12 bg-muted overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {[...techLogos, ...techLogos].map((tech, i) => (
            <span
              key={i}
              className="text-lg font-semibold text-muted-foreground/60 hover:text-primary transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-background">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8">
          <ScrollAnimate delay={0}><AnimatedCounter end={500} label={t("about.stats.students")} /></ScrollAnimate>
          <ScrollAnimate delay={0.1}><AnimatedCounter end={20} label={t("about.stats.courses")} /></ScrollAnimate>
          <ScrollAnimate delay={0.2}><AnimatedCounter end={100} label={t("about.stats.projects")} /></ScrollAnimate>
          <ScrollAnimate delay={0.3}><AnimatedCounter end={5} label={t("about.stats.years")} /></ScrollAnimate>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <ScrollAnimate>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("sections.courses_title")}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">{t("sections.courses_desc")}</p>
            </div>
          </ScrollAnimate>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.slice(0, 4).map((course, i) => (
              <ScrollAnimate key={course.id} delay={i * 0.1} variant="scale">
                <Link
                  to={`/courses/${course.id}`}
                  className="block bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title[lang]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-foreground mb-2">{course.title[lang]}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{course.description[lang]}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{course.duration[lang]}</span>
                      <span>{course.level[lang]}</span>
                    </div>
                  </div>
                </Link>
              </ScrollAnimate>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              {t("courses.see_more")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <ScrollAnimate>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("sections.projects_title")}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">{t("sections.projects_desc")}</p>
            </div>
          </ScrollAnimate>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.slice(0, 4).map((project, i) => (
              <ScrollAnimate key={project.id} delay={i * 0.1} variant="scale">
                <Link
                  to={`/projects/${project.id}`}
                  className="block bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title[lang]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-foreground mb-2">{project.title[lang]}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.description[lang]}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <ScrollAnimate>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("sections.news_title")}
              </h2>
            </div>
          </ScrollAnimate>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <ScrollAnimate key={item.id} delay={i * 0.1}>
                <div className="bg-card rounded-xl overflow-hidden card-shadow group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title[lang]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                    <h3 className="font-display font-semibold text-foreground mt-1 mb-2">{item.title[lang]}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.description[lang]}</p>
                    <button className="text-sm text-primary font-semibold hover:underline">
                      {t("common.read_more")} →
                    </button>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding gradient-primary text-primary-foreground">
        <div className="container-custom text-center">
          <ScrollAnimate>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t("sections.contact_title")}
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              {t("sections.contact_desc")}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:scale-105 transition-transform"
            >
              {t("hero.cta_contact")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollAnimate>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
