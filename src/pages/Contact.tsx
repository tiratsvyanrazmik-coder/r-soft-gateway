import { useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import ScrollAnimate from "@/components/ScrollAnimate";
import { MapPin, Phone, Mail, Send, Facebook, Instagram, Linkedin } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(1000),
});

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({ title: t("contact.success") });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="section-padding gradient-hero text-primary-foreground">
        <div className="container-custom text-center">
          <ScrollAnimate>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{t("contact.title")}</h1>
          </ScrollAnimate>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <ScrollAnimate variant="fade-left">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact.name")}</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition-shadow"
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact.email")}</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition-shadow"
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">{t("contact.message")}</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:outline-none transition-shadow resize-none"
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg gradient-primary text-primary-foreground font-semibold button-shadow hover:scale-105 transition-transform"
              >
                <Send className="w-4 h-4" />
                {t("contact.send")}
              </button>
            </form>
          </ScrollAnimate>

          {/* Info + Map */}
          <ScrollAnimate variant="fade-right">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">{t("contact.address")}</p>
                    <p className="text-sm text-muted-foreground">Yerevan, Armenia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">{t("contact.phone")}</p>
                    <p className="text-sm text-muted-foreground">+374 XX XXX XXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">info@rsoft.am</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all text-foreground"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Google Map */}
              <div className="rounded-xl overflow-hidden border border-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48891.27!2d44.4913!3d40.1872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2sYerevan!5e0!3m2!1sen!2sam!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="R'SOFT Location"
                />
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
