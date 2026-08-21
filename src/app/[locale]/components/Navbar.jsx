"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";

const labels = {
  tr: {
    home: "Ana Sayfa",
    about: "Hakkımda",
    services: "Hizmetler",
    projects: "Projeler",
    process: "Süreç",
    contact: "İletişim",
    lang: "EN",
  },

  en: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    process: "Process",
    contact: "Contact",
    lang: "TR",
  },
};

export default function Navbar({
  activeSection,
  setActiveSection,
}) {
  const { locale } = useParams();
  const pathname = usePathname();

  const currentLocale = locale === "en" ? "en" : "tr";
  const targetLocale = currentLocale === "tr" ? "en" : "tr";

  const t = labels[currentLocale];

  const [open, setOpen] = useState(false);

  const languageHref = pathname.startsWith(`/${currentLocale}`)
    ? pathname.replace(
        `/${currentLocale}`,
        `/${targetLocale}`
      )
    : `/${targetLocale}`;

  const menuItems = [
    {
      id: "home",
      label: t.home,
    },
    {
      id: "about",
      label: t.about,
    },
    {
      id: "services",
      label: t.services,
    },
    {
      id: "projects",
      label: t.projects,
    },
    {
      id: "process",
      label: t.process,
    },
    {
      id: "contact",
      label: t.contact,
    },
  ];

  const handleSectionChange = (id) => {
    setActiveSection(id);
    setOpen(false);
  };

  return (
    <header className="portfolio-navbar">
      <nav className="flex min-h-[76px] items-center justify-between px-5 md:px-8 lg:px-10">
        {/* LOGO */}
        <button
          type="button"
          onClick={() =>
            handleSectionChange("home")
          }
          className="group relative flex items-center"
          aria-label="Ana sayfa"
        >
          <span className="heading-font relative z-10 text-xl font-bold tracking-tight text-[#10213A] transition-all duration-300 group-hover:text-[#C8A45D] md:text-2xl">
            SK
          </span>

          <span className="absolute -inset-3 scale-75 rounded-full bg-[#C8A45D]/0 blur-xl transition-all duration-500 group-hover:scale-100 group-hover:bg-[#C8A45D]/15" />
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-7 lg:flex">
          {menuItems.map((item) => {
            const isActive =
              activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  handleSectionChange(item.id)
                }
                className={`group relative px-1 py-2 text-[12px] font-bold uppercase tracking-[0.13em] transition-all duration-300 ${
                  isActive
                    ? "text-[#C8A45D]"
                    : "text-[#10213A]"
                }`}
              >
                <span
                  className={`relative z-10 inline-block transition-all duration-300 ${
                    isActive
                      ? "-translate-y-[1px]"
                      : "group-hover:-translate-y-[1px] group-hover:text-[#C8A45D]"
                  }`}
                >
                  {item.label}
                </span>

                {/* HAFİF ALTIN GLOW */}
                <span className="pointer-events-none absolute inset-x-[-8px] inset-y-1 scale-75 rounded-full bg-[#C8A45D]/0 blur-lg transition-all duration-500 group-hover:scale-100 group-hover:bg-[#C8A45D]/10" />

                {/* ALT ÇİZGİ */}
                <span
                  className={`absolute -bottom-[2px] left-1/2 h-[1px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent transition-all duration-300 ${
                    isActive
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
                />

                {/* AKTİF NOKTA */}
                <span
                  className={`absolute -bottom-[7px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-[#C8A45D] transition-all duration-300 ${
                    isActive
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* DESKTOP LANGUAGE */}
        <div className="hidden lg:flex">
          <Link
            href={languageHref}
            className="group relative inline-flex h-10 min-w-[48px] items-center justify-center overflow-hidden rounded-full border border-[#10213A]/10 bg-white px-4 text-xs font-bold tracking-[0.13em] text-[#10213A] transition-all duration-300 hover:border-[#C8A45D]/70 hover:text-white"
          >
            <span className="relative z-10">
              {t.lang}
            </span>

            <span className="absolute inset-0 translate-y-full bg-[#C8A45D] transition-transform duration-300 ease-out group-hover:translate-y-0" />
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() =>
            setOpen((current) => !current)
          }
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#10213A]/10 bg-white transition-all duration-300 hover:border-[#C8A45D]/60 lg:hidden"
        >
          <span className="flex flex-col gap-[5px]">
            <span
              className={`h-[2px] w-5 rounded-full bg-[#10213A] transition-all duration-300 ${
                open
                  ? "translate-y-[7px] rotate-45 bg-[#C8A45D]"
                  : ""
              }`}
            />

            <span
              className={`h-[2px] w-4 rounded-full bg-[#10213A] transition-all duration-300 ${
                open
                  ? "opacity-0"
                  : "ml-auto"
              }`}
            />

            <span
              className={`h-[2px] w-5 rounded-full bg-[#10213A] transition-all duration-300 ${
                open
                  ? "-translate-y-[7px] -rotate-45 bg-[#C8A45D]"
                  : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`grid transition-all duration-300 lg:hidden ${
          open
            ? "grid-rows-[1fr] border-t border-[#10213A]/10 opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="bg-white/95 px-5 pb-5 pt-3">
            <div className="flex flex-col">
              {menuItems.map((item) => {
                const isActive =
                  activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      handleSectionChange(
                        item.id
                      )
                    }
                    className={`group relative flex items-center justify-between border-b border-[#10213A]/8 py-4 text-left text-sm font-bold uppercase tracking-[0.12em] transition-colors duration-300 last:border-b-0 ${
                      isActive
                        ? "text-[#C8A45D]"
                        : "text-[#10213A]"
                    }`}
                  >
                    <span>
                      {item.label}
                    </span>

                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "scale-100 bg-[#C8A45D]"
                          : "scale-0 bg-[#C8A45D]/0 group-hover:scale-100 group-hover:bg-[#C8A45D]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <Link
              href={languageHref}
              onClick={() =>
                setOpen(false)
              }
              className="mt-5 flex w-full items-center justify-center rounded-full bg-[#10213A] px-5 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#C8A45D]"
            >
              {currentLocale === "tr"
                ? "English"
                : "Türkçe"}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}