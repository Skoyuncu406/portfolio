"use client";

import { useState } from "react";
import {
  useParams,
  usePathname,
  useRouter,
} from "next/navigation";

const translations = {
  tr: {
    home: "Ana Sayfa",
    about: "Hakkımda",
    services: "Hizmetler",
    projects: "Projeler",
    process: "Süreç",
    contact: "İletişim",

    navigation: "Navigasyon",
    language: "Dil",

    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",

    switchToEnglish: "İngilizceye geç",
    switchToTurkish: "Türkçeye geç",
  },

  en: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    process: "Process",
    contact: "Contact",

    navigation: "Navigation",
    language: "Language",

    openMenu: "Open menu",
    closeMenu: "Close menu",

    switchToEnglish: "Switch to English",
    switchToTurkish: "Switch to Turkish",
  },
};

export default function Navbar({
  activeSection,
  setActiveSection,
}) {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const locale =
    params?.locale === "en"
      ? "en"
      : "tr";

  const t = translations[locale];

  const [menuOpen, setMenuOpen] =
    useState(false);

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

  /* =====================================================
     SECTION CHANGE
  ===================================================== */

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  /* =====================================================
     LANGUAGE CHANGE
  ===================================================== */

  const changeLanguage = (
    targetLocale
  ) => {
    if (targetLocale === locale) {
      setMenuOpen(false);
      return;
    }

    const segments = pathname
      .split("/")
      .filter(Boolean);

    /*
      /tr -> /en
      /en -> /tr

      Eğer ileride başka path oluşursa da
      ilk segment locale olarak değiştirilir.
    */

    if (segments.length === 0) {
      router.push(
        `/${targetLocale}`
      );

      setMenuOpen(false);

      return;
    }

    segments[0] = targetLocale;

    const newPath =
      "/" + segments.join("/");

    router.push(newPath);

    setMenuOpen(false);
  };

  return (
    <header className="portfolio-navbar">
      <div className="navbar-inner">

        {/* =================================================
            BRAND
        ================================================= */}

        <button
          type="button"
          onClick={() =>
            handleSectionChange("home")
          }
          className="navbar-brand group"
          aria-label={t.home}
        >
          <span className="navbar-brand-mark">
            SK
          </span>

          <span className="navbar-brand-text">
            Selçuk Koyuncu
          </span>
        </button>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav
          className="desktop-navigation"
          aria-label={t.navigation}
        >
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
                className={`desktop-nav-link ${
                  isActive
                    ? "desktop-nav-link-active"
                    : ""
                }`}
              >
                <span>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* =================================================
            DESKTOP LANGUAGE
        ================================================= */}

        <div className="desktop-language-wrapper">
          <button
            type="button"
            onClick={() =>
              changeLanguage(
                locale === "tr"
                  ? "en"
                  : "tr"
              )
            }
            className="desktop-language"
            aria-label={
              locale === "tr"
                ? t.switchToEnglish
                : t.switchToTurkish
            }
          >
            <span className="desktop-language-current">
              {locale.toUpperCase()}
            </span>

            <span className="desktop-language-line" />

            <span className="desktop-language-next">
              {locale === "tr"
                ? "EN"
                : "TR"}
            </span>
          </button>
        </div>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={() =>
            setMenuOpen(
              (current) => !current
            )
          }
          className={`mobile-menu-button ${
            menuOpen
              ? "mobile-menu-button-open"
              : ""
          }`}
          aria-label={
            menuOpen
              ? t.closeMenu
              : t.openMenu
          }
          aria-expanded={menuOpen}
        >
          {/* HAMBURGER / CLOSE */}

          <span
            className="mobile-menu-icon"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </span>

          {/* DIVIDER */}

          <span className="mobile-menu-divider" />

          {/* CURRENT LANGUAGE */}

          <span className="mobile-menu-language">
            {locale.toUpperCase()}
          </span>
        </button>
      </div>

      {/* ===================================================
          MOBILE NAVIGATION
      =================================================== */}

      <div
        className={`mobile-navigation ${
          menuOpen
            ? "mobile-navigation-open"
            : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-navigation-inner">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="mobile-navigation-header">
            <span className="mobile-navigation-label">
              {t.navigation}
            </span>

            <span className="mobile-navigation-current">
              {locale.toUpperCase()}
            </span>
          </div>

          {/* =================================================
              LINKS
          ================================================= */}

          <nav
            className="mobile-navigation-links"
            aria-label={t.navigation}
          >
            {menuItems.map(
              (item, index) => {
                const isActive =
                  activeSection ===
                  item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      handleSectionChange(
                        item.id
                      )
                    }
                    tabIndex={
                      menuOpen ? 0 : -1
                    }
                    className={`mobile-nav-link ${
                      isActive
                        ? "mobile-nav-link-active"
                        : ""
                    }`}
                  >
                    <span className="mobile-nav-number">
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span className="mobile-nav-label">
                      {item.label}
                    </span>

                    <span
                      className="mobile-nav-arrow"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </button>
                );
              }
            )}
          </nav>

          {/* =================================================
              LANGUAGE
          ================================================= */}

          <div className="mobile-language-area">
            <span className="mobile-language-title">
              {t.language}
            </span>

            <div className="mobile-language-switch">

              {/* TR */}

              <button
                type="button"
                onClick={() =>
                  changeLanguage("tr")
                }
                tabIndex={
                  menuOpen ? 0 : -1
                }
                className={`mobile-language-option ${
                  locale === "tr"
                    ? "mobile-language-option-active"
                    : ""
                }`}
                aria-label={
                  t.switchToTurkish
                }
              >
                TR
              </button>

              <span className="language-slash">
                /
              </span>

              {/* EN */}

              <button
                type="button"
                onClick={() =>
                  changeLanguage("en")
                }
                tabIndex={
                  menuOpen ? 0 : -1
                }
                className={`mobile-language-option ${
                  locale === "en"
                    ? "mobile-language-option-active"
                    : ""
                }`}
                aria-label={
                  t.switchToEnglish
                }
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}