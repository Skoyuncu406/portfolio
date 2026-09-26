"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import PhotoSlider from "./components/PhotoSlider";
import PageLoader from "./components/PageLoader";

const content = {
  tr: {
    home: {
      eyebrow: "Proje Yönetimi • Yazılım Geliştirme",
      title:
        "Fikirleri planlıyor, geliştiriyor ve güçlü dijital ürünlere dönüştürüyorum.",
      description:
        "Proje yönetimi deneyimimi modern yazılım geliştirme yaklaşımıyla birleştiriyorum. İş hedeflerini analiz ediyor, süreci planlıyor ve fikirleri yayına hazır dijital çözümlere dönüştürüyorum.",
    },

    about: {
      eyebrow: "Hakkımda",
      title: "Teknik bilgi ile iş hedefleri arasında köprü kuruyorum.",
      description:
        "Proje yönetimi ve yazılım geliştirme deneyimimi aynı bakış açısında birleştiriyorum. Bir fikrin yalnızca teknik olarak çalışması değil, doğru planlanması, kullanıcı ihtiyaçlarına cevap vermesi ve sürdürülebilir olması gerektiğine inanıyorum.",

      highlights: [
        {
          label: "Yaklaşım",
          value: "Strateji + Teknik Uygulama",
        },
        {
          label: "Odak",
          value: "Sonuç Odaklı Proje Yönetimi",
        },
        {
          label: "Geliştirme",
          value: "Modern Web Teknolojileri",
        },
      ],

      cvLabel: "Özgeçmiş",
      cvTitle: "CV'mi Görüntüle",
    },

    services: {
      eyebrow: "Hizmetler",
      title: "Dijital projeleri uçtan uca ele alıyorum.",
      description:
        "Proje yönetimi, web geliştirme, yapay zeka destekli çözümler ve dijital danışmanlık alanlarında işletmeler için sürdürülebilir ve sonuç odaklı çalışmalar yürütüyorum.",

      items: [
        {
          number: "01",
          title: "Proje Yönetimi",
          description:
            "Keşif, kapsam, zaman planı, önceliklendirme ve teslim süreçlerini kontrollü şekilde yönetirim.",
        },
        {
          number: "02",
          title: "Web Geliştirme",
          description:
            "Modern, hızlı, responsive ve ölçeklenebilir web uygulamaları geliştiririm.",
        },
        {
          number: "03",
          title: "Yapay Zeka & Otomasyon",
          description:
            "İş süreçlerini hızlandıran yapay zeka destekli çözümler ve otomasyonlar tasarlarım.",
        },
        {
          number: "04",
          title: "Dijital Danışmanlık",
          description:
            "Teknik kararlar ve dijital ürün geliştirme süreçleri için stratejik yol haritaları oluştururum.",
        },
      ],
    },

    projects: {
      eyebrow: "Projeler",
      title: "Problemden sonuca giden dijital çözümler.",
      description:
        "Farklı ihtiyaçlara yönelik geliştirdiğim projelerde kullanıcı deneyimi, teknik sürdürülebilirlik ve iş hedefleri arasında denge kurmaya odaklanıyorum.",

      items: [
        {
          title: "E-Ticaret Platformu",
          type: "Web Development",
          href: "https://professional-e-commerce.vercel.app/",
        },
        {
          title: "Premium Kurumsal Site",
          type: "Corporate Website",
          href: "https://premiuminsaat.vercel.app/tr",
        },
        {
          title: "Ürün Tanıtım Sitesi",
          type: "Product Website",
          href: "https://hediyelik.vercel.app/",
        },
        {
          title: "Premium Kişisel Website",
          type: "Personal Brand",
          href: "https://hukuk-nine.vercel.app/",
        },
        {
          title: "Uzman Portföy Sitesi",
          type: "Portfolio Website",
          href: "https://psikolog-pw3b.vercel.app/",
        },
      ],
    },

    process: {
      eyebrow: "Süreç",
      title: "Her başarılı proje, doğru yönetilen bir süreçle başlar.",
      description:
        "Projeleri analizden yayına kadar kontrollü, şeffaf ve ölçülebilir bir yöntemle ele alıyorum.",

      items: [
        "Keşif",
        "Planlama",
        "Geliştirme",
        "Test",
        "Yayınlama",
        "Destek",
      ],
    },

    contact: {
      eyebrow: "İletişim",
      title: "Yeni bir proje veya iş birliği hakkında konuşalım.",
      description:
        "Projeniz, dijital ürün fikriniz veya iş birliği öneriniz hakkında mesajınızı iletebilirsiniz.",

      form: {
        name: "Ad Soyad",
        namePlaceholder: "Adınız ve soyadınız",

        email: "E-posta",
        emailPlaceholder: "ornek@mail.com",

        subject: "Konu",
        subjectPlaceholder: "Kısaca projenizden bahsedin",

        message: "Mesajınız",
        messagePlaceholder: "Mesajınızı buraya yazın...",

        submit: "Mesajı Gönder",
        sending: "Gönderiliyor...",
        success: "Mesajınız başarıyla gönderildi.",
        error: "Mesaj gönderilirken bir hata oluştu.",
      },
    },

    info: {
      focusLabel: "Odak",
      focusValue: "Project Management",

      developmentLabel: "Geliştirme",
      developmentValue: "Full-Stack Development",

      approachLabel: "Yaklaşım",
      approachValue: "Uçtan Uca Teslim",
    },
  },

  en: {
    home: {
      eyebrow: "Project Management • Software Development",
      title:
        "I plan, develop and transform ideas into strong digital products.",
      description:
        "I combine project management experience with modern software development. I analyze business goals, plan the process and transform ideas into launch-ready digital solutions.",
    },

    about: {
      eyebrow: "About",
      title: "I bridge technical knowledge with business goals.",
      description:
        "I combine project management and software development experience within one perspective. I believe a digital product should not only work technically, but also be well planned, user-focused and sustainable.",

      highlights: [
        {
          label: "Approach",
          value: "Strategy + Technical Execution",
        },
        {
          label: "Focus",
          value: "Results-Driven Project Management",
        },
        {
          label: "Development",
          value: "Modern Web Technologies",
        },
      ],

      cvLabel: "Curriculum Vitae",
      cvTitle: "View My CV",
    },

    services: {
      eyebrow: "Services",
      title: "I manage digital projects end to end.",
      description:
        "I deliver sustainable and results-oriented solutions across project management, web development, AI-powered solutions and digital consulting.",

      items: [
        {
          number: "01",
          title: "Project Management",
          description:
            "I manage discovery, scope, timelines, prioritization and delivery processes in a controlled way.",
        },
        {
          number: "02",
          title: "Web Development",
          description:
            "I build modern, fast, responsive and scalable web applications.",
        },
        {
          number: "03",
          title: "AI & Automation",
          description:
            "I design AI-powered solutions and automations that accelerate business processes.",
        },
        {
          number: "04",
          title: "Digital Consulting",
          description:
            "I create strategic roadmaps for technical decisions and digital product development.",
        },
      ],
    },

    projects: {
      eyebrow: "Projects",
      title: "Digital solutions from problem to result.",
      description:
        "Across different project types, I focus on balancing user experience, technical sustainability and business goals.",

      items: [
        {
          title: "E-Commerce Platform",
          type: "Web Development",
          href: "https://premium-erkek.vercel.app/",
        },
        {
          title: "Premium Corporate Website",
          type: "Corporate Website",
          href: "https://premiuminsaat.vercel.app/tr",
        },
        {
          title: "Product Promotion Website",
          type: "Product Website",
          href: "https://hediyelik.vercel.app/",
        },
        {
          title: "Premium Personal Website",
          type: "Personal Brand",
          href: "https://hukuk-nine.vercel.app/",
        },
        {
          title: "Professional Portfolio Website",
          type: "Portfolio Website",
          href: "https://psikolog-pw3b.vercel.app/",
        },
      ],
    },

    process: {
      eyebrow: "Process",
      title: "Every successful project starts with a well-managed process.",
      description:
        "I approach projects from analysis to launch through a controlled, transparent and measurable methodology.",

      items: [
        "Discovery",
        "Planning",
        "Development",
        "Testing",
        "Launch",
        "Support",
      ],
    },

    contact: {
      eyebrow: "Contact",
      title: "Let’s talk about a new project or collaboration.",
      description:
        "You can send me a message about your project, digital product idea or collaboration proposal.",

      form: {
        name: "Full Name",
        namePlaceholder: "Your full name",

        email: "Email",
        emailPlaceholder: "example@email.com",

        subject: "Subject",
        subjectPlaceholder: "Tell me briefly about your project",

        message: "Message",
        messagePlaceholder: "Write your message here...",

        submit: "Send Message",
        sending: "Sending...",
        success: "Your message has been sent successfully.",
        error: "An error occurred while sending your message.",
      },
    },

    info: {
      focusLabel: "Focus",
      focusValue: "Project Management",

      developmentLabel: "Development",
      developmentValue: "Full-Stack Development",

      approachLabel: "Approach",
      approachValue: "End-to-End Delivery",
    },
  },
};

export default function HomeClient({ locale }) {
  const currentLocale = locale === "en" ? "en" : "tr";
  const t = content[currentLocale];

  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      <PageLoader />

      <div className="portfolio-page">
        <main className="portfolio-shell">
          <Navbar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          <section className="hero-layout">
            {/* SOL DİKEY KİMLİK */}
            <aside className="vertical-identity">
              <div className="identity-name-slot">
                <span className="vertical-name">
                  Selçuk Koyuncu
                </span>
              </div>

              <span className="vertical-separator" />

              <div className="identity-role-slot">
                <span className="vertical-role">
                  Software Developer & Project Manager
                </span>
              </div>
            </aside>

            {/* FOTOĞRAF SLIDER */}
            <div className="hero-photo">
              <PhotoSlider />
            </div>

            {/* SAĞ İÇERİK */}
            <div className="hero-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -6,
                  }}
                  transition={{
                    duration: 0.22,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-full"
                >
                  <RightContent
                    activeSection={activeSection}
                    t={t}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

/* =========================================================
   RIGHT CONTENT
========================================================= */

function RightContent({ activeSection, t }) {
  if (activeSection === "home") {
    return (
      <div>
        <ContentHeader section={t.home} />

        <div className="hero-info-grid">
          <InfoItem
            label={t.info.focusLabel}
            value={t.info.focusValue}
          />

          <InfoItem
            label={t.info.developmentLabel}
            value={t.info.developmentValue}
          />

          <InfoItem
            label={t.info.approachLabel}
            value={t.info.approachValue}
          />
        </div>
      </div>
    );
  }

  if (activeSection === "about") {
    return (
      <div>
        <ContentHeader section={t.about} />

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {t.about.highlights.map((item) => (
            <div
              key={item.label}
              className="border-t border-[#10213A]/10 pt-5"
            >
              <span className="hero-info-label">
                {item.label}
              </span>

              <p className="hero-info-value">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-9 border-t border-[#10213A]/10 pt-6">
          <a
            href="/Selcuk_KOYUNCU_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-link group"
          >
            <div className="cv-link-content">
              <span className="cv-link-label">
                {t.about.cvLabel}
              </span>

              <span className="cv-link-separator">
                /
              </span>

              <span className="cv-link-title">
                {t.about.cvTitle}
              </span>
            </div>

            <span className="cv-link-arrow">
              <ArrowRight
                size={16}
                strokeWidth={1.8}
              />
            </span>
          </a>
        </div>
      </div>
    );
  }

  if (activeSection === "services") {
    return (
      <div>
        <ContentHeader section={t.services} />

        <div className="mt-9 grid gap-x-8 sm:grid-cols-2">
          {t.services.items.map((item) => (
            <div
              key={item.number}
              className="border-t border-[#10213A]/10 py-5"
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 text-[10px] font-bold tracking-[0.2em] text-[#C8A45D]">
                  {item.number}
                </span>

                <div>
                  <h3 className="heading-font text-xl font-semibold text-[#10213A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-[#667085]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (activeSection === "projects") {
    return (
      <div>
        <ContentHeader section={t.projects} />

        <div className="mt-8">
          {t.projects.items.map((project) => (
            <a
              key={project.href}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-t border-[#10213A]/10 py-4"
            >
              <div>
                <span className="text-[9px] font-bold uppercase tracking-[0.19em] text-[#C8A45D]">
                  {project.type}
                </span>

                <h3 className="heading-font mt-1 text-lg font-semibold text-[#10213A] transition-colors duration-300 group-hover:text-[#C8A45D]">
                  {project.title}
                </h3>
              </div>

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#10213A]/10
                  text-[#10213A]
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:border-[#C8A45D]
                  group-hover:bg-[#C8A45D]
                  group-hover:text-white
                "
              >
                <ArrowRight
                  size={15}
                  strokeWidth={1.8}
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  if (activeSection === "process") {
    return (
      <div>
        <ContentHeader section={t.process} />

        <div className="mt-10 grid grid-cols-2 gap-x-7 sm:grid-cols-3">
          {t.process.items.map((step, index) => (
            <div
              key={step}
              className="border-t border-[#10213A]/10 py-5"
            >
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#C8A45D]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="heading-font mt-3 text-xl font-semibold text-[#10213A]">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (activeSection === "contact") {
    return (
      <ContactSection contact={t.contact} />
    );
  }

  return null;
}

/* =========================================================
   CONTACT SECTION
========================================================= */

function ContactSection({ contact }) {
  const form = contact.form;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (
      status === "success" ||
      status === "error"
    ) {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (status === "sending") {
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(
        "https://formspree.io/f/xzepokkb",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _subject:
              "Selçuk Koyuncu Portfolio - Yeni Mesaj",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Formspree request failed."
        );
      }

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setStatus("success");
    } catch (error) {
      console.error(
        "Formspree error:",
        error
      );

      setStatus("error");
    }
  };

  return (
    <div>
      <ContentHeader section={contact} />

      <form
        onSubmit={handleSubmit}
        className="mt-8 grid gap-4"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            label={form.name}
            type="text"
            name="name"
            autoComplete="name"
            placeholder={form.namePlaceholder}
            value={formData.name}
            onChange={handleChange}
          />

          <FormField
            label={form.email}
            type="email"
            name="email"
            autoComplete="email"
            placeholder={form.emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <FormField
          label={form.subject}
          type="text"
          name="subject"
          placeholder={form.subjectPlaceholder}
          value={formData.subject}
          onChange={handleChange}
        />

        <div>
          <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#10213A]">
            {form.message}
          </label>

          <textarea
            name="message"
            rows={4}
            required
            maxLength={3000}
            value={formData.message}
            onChange={handleChange}
            placeholder={form.messagePlaceholder}
            className="form-field resize-none"
          />
        </div>

        <div className="mt-1 flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="
              inline-flex
              min-h-[44px]
              w-fit
              items-center
              justify-center
              rounded-full
              bg-[#10213A]
              px-6
              text-sm
              font-bold
              text-white
              transition-all
              duration-300
              hover:-translate-y-[1px]
              hover:bg-[#C8A45D]
              hover:shadow-[0_10px_24px_rgba(200,164,93,0.20)]
              disabled:cursor-not-allowed
              disabled:opacity-60
              disabled:hover:translate-y-0
              disabled:hover:bg-[#10213A]
            "
          >
            {status === "sending"
              ? form.sending
              : form.submit}
          </button>

          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.p
                key="success"
                initial={{
                  opacity: 0,
                  y: 4,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                className="text-sm font-semibold text-emerald-600"
              >
                {form.success}
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                key="error"
                initial={{
                  opacity: 0,
                  y: 4,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                className="text-sm font-semibold text-red-600"
              >
                {form.error}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
}

/* =========================================================
   CONTENT HEADER
========================================================= */

function ContentHeader({ section }) {
  return (
    <>
      <span className="hero-eyebrow">
        {section.eyebrow}
      </span>

      <h1 className="hero-title">
        {section.title}
      </h1>

      <p className="hero-description">
        {section.description}
      </p>
    </>
  );
}

/* =========================================================
   INFO ITEM
========================================================= */

function InfoItem({
  label,
  value,
}) {
  return (
    <div>
      <span className="hero-info-label">
        {label}
      </span>

      <p className="hero-info-value">
        {value}
      </p>
    </div>
  );
}

/* =========================================================
   FORM FIELD
========================================================= */

function FormField({
  label,
  type,
  name,
  placeholder,
  autoComplete,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#10213A]">
        {label}
      </label>

      <input
        type={type}
        name={name}
        required
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-field"
      />
    </div>
  );
}