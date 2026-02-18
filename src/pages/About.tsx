import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import ScrollAnimate from "@/components/ScrollAnimate";
import AnimatedCounter from "@/components/AnimatedCounter";
import { team } from "@/data/team";
import { Target, Eye, CheckCircle } from "lucide-react";

const About = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "am" | "ru" | "en";
  const whyReasons = t("about.why_reasons", { returnObjects: true }) as string[];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero text-primary-foreground">
        <div className="container-custom text-center">
          <ScrollAnimate>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{t("about.title")}</h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">{t("about.description")}</p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollAnimate variant="fade-left">
            <div className="p-8 rounded-2xl bg-accent border border-border">
              <Target className="w-10 h-10 text-primary mb-4" />
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">{t("about.mission_title")}</h2>
              <p className="text-muted-foreground">{t("about.mission_desc")}</p>
            </div>
          </ScrollAnimate>
          <ScrollAnimate variant="fade-right">
            <div className="p-8 rounded-2xl bg-accent border border-border">
              <Eye className="w-10 h-10 text-secondary mb-4" />
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">{t("about.vision_title")}</h2>
              <p className="text-muted-foreground">{t("about.vision_desc")}</p>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-muted">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={500} label={t("about.stats.students")} />
          <AnimatedCounter end={20} label={t("about.stats.courses")} />
          <AnimatedCounter end={100} label={t("about.stats.projects")} />
          <AnimatedCounter end={5} label={t("about.stats.years")} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <ScrollAnimate>
            <h2 className="font-display text-3xl font-bold text-center text-foreground mb-12">{t("about.why_title")}</h2>
          </ScrollAnimate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {Array.isArray(whyReasons) && whyReasons.map((reason, i) => (
              <ScrollAnimate key={i} delay={i * 0.1}>
                <div className="flex items-start gap-3 p-5 rounded-xl bg-card card-shadow">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{reason}</span>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <ScrollAnimate>
            <h2 className="font-display text-3xl font-bold text-center text-foreground mb-12">{t("about.team_title")}</h2>
          </ScrollAnimate>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <ScrollAnimate key={i} delay={i * 0.1} variant="scale">
                <div className="bg-card rounded-xl overflow-hidden card-shadow text-center p-6 hover:-translate-y-1 transition-transform">
                  <img
                    src={member.image}
                    alt={member.name[lang]}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-primary/20"
                    loading="lazy"
                  />
                  <h3 className="font-display font-semibold text-foreground">{member.name[lang]}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{member.role[lang]}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
