import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import ScrollAnimate from "@/components/ScrollAnimate";
import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "am" | "ru" | "en";

  const project = projects.find((p) => p.id === id);
  if (!project) {
    return (
      <Layout>
        <div className="section-padding container-custom text-center">
          <p className="text-muted-foreground">Project not found</p>
          <Link to="/projects" className="text-primary mt-4 inline-block">{t("common.back")}</Link>
        </div>
      </Layout>
    );
  }

  const related = projects.filter((p) => p.id !== id).slice(0, 3);

  return (
    <Layout>
      <section className="section-padding gradient-hero text-primary-foreground">
        <div className="container-custom">
          <Link to="/projects" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> {t("common.back")}
          </Link>
          <ScrollAnimate>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">{project.title[lang]}</h1>
            <p className="text-primary-foreground/70 max-w-2xl text-lg">{project.fullDescription[lang]}</p>
          </ScrollAnimate>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <ScrollAnimate>
                <img src={project.image} alt={project.title[lang]} className="w-full rounded-xl" loading="lazy" />
              </ScrollAnimate>

              {/* Screenshots */}
              {project.screenshots.length > 1 && (
                <ScrollAnimate>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t("projects.screenshots")}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.screenshots.map((ss, i) => (
                      <img key={i} src={ss} alt={`Screenshot ${i + 1}`} className="rounded-lg w-full" loading="lazy" />
                    ))}
                  </div>
                </ScrollAnimate>
              )}
            </div>

            <div>
              <ScrollAnimate variant="fade-right">
                <div className="bg-card rounded-xl p-6 card-shadow sticky top-24 space-y-5">
                  <div>
                    <span className="text-sm text-muted-foreground">{t("projects.tech_stack")}</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-lg gradient-primary text-primary-foreground font-semibold button-shadow hover:scale-105 transition-transform flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" /> {t("projects.live_demo")}
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-lg border-2 border-border text-foreground font-semibold hover:bg-accent transition-colors flex items-center justify-center gap-2"
                      >
                        <Github className="w-4 h-4" /> {t("projects.github")}
                      </a>
                    )}
                  </div>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">{t("projects.related")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/projects/${p.id}`}
                  className="bg-card rounded-xl overflow-hidden card-shadow hover:-translate-y-1 transition-transform group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={p.image} alt={p.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-semibold text-foreground">{p.title[lang]}</h3>
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

export default ProjectDetail;
