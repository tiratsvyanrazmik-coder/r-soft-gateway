import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollAnimate from "@/components/ScrollAnimate";
import { projects } from "@/data/projects";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "am" | "ru" | "en";

  return (
    <Layout>
      <section className="section-padding gradient-hero text-primary-foreground">
        <div className="container-custom text-center">
          <ScrollAnimate>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{t("projects.title")}</h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">{t("projects.description")}</p>
          </ScrollAnimate>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
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
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{project.title[lang]}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description[lang]}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </ScrollAnimate>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
