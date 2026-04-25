"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  portfolioContent,
  type ContactMethod,
  type ExperienceItem,
  type HeroAction,
  type ProjectItem,
  type WritingItem,
} from "../../data/portfolio-content";
import { Icon, type IconName } from "../ui/icons";
import { ThemeToggle } from "../ui/theme-toggle";
import styles from "./homepage.module.scss";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function ExternalAnchor({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  const opensNewTab = href.startsWith("http");

  return (
    <a href={href} target={opensNewTab ? "_blank" : undefined} rel={opensNewTab ? "noreferrer" : undefined} className={className}>
      {children}
    </a>
  );
}

function ActionLink({ action, className }: { action: HeroAction; className: string }) {
  if (action.href.startsWith("#") || action.href.startsWith("/")) {
    return <Link href={action.href} className={className}>{action.label}</Link>;
  }

  return <ExternalAnchor href={action.href} className={className}>{action.label}</ExternalAnchor>;
}

function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));

      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -48px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;
  const revealClassName = className ? `${styles.reveal} ${className}` : styles.reveal;

  return (
    <div ref={ref} className={`${revealClassName} ${isVisible ? styles.revealVisible : ""}`} style={style}>
      {children}
    </div>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className={styles.sectionHeading}>
      <span className={styles.sectionLabel}>{label}</span>
      <h2 className={styles.sectionTitle}>{title}</h2>
    </div>
  );
}

function getContactIconName(label: ContactMethod["label"]): IconName {
  switch (label) {
    case "Email":
      return "mail";
    case "LinkedIn":
      return "linkedin";
    case "GitHub":
      return "github";
    case "Stack Overflow":
      return "stackOverflow";
    default:
      return "link";
  }
}

function getContactBackdropAsset(label: ContactMethod["label"]) {
  switch (label) {
    case "LinkedIn":
      return "/icons/linkedin.svg";
    case "GitHub":
      return "/icons/github.svg";
    case "Stack Overflow":
      return "/icons/stack-overflow.svg";
    default:
      return null;
  }
}

function ExperienceRow({ item }: { item: ExperienceItem }) {
  return (
    <li className={styles.experienceItem}>
      <div className={styles.logoFrame}>
        <Image
          src={item.logo}
          alt={item.logoAlt}
          width={44}
          height={44}
          unoptimized={item.logo.endsWith(".gif")}
          className={styles.logoImage}
        />
      </div>
      <div className={styles.experienceBody}>
        <div className={styles.experienceHeader}>
          <h3 className={styles.experienceCompany}>{item.company}</h3>
          <span className={styles.experiencePeriod}>{item.period}</span>
        </div>
        <div className={styles.experienceMeta}>
          <span className={styles.experienceRole}>{item.role}</span>
          <span className={styles.experienceMetaCluster}>
            <span className={styles.metaDivider} aria-hidden="true">/</span>
            <span className={styles.experienceLocation}>{item.location}</span>
          </span>
        </div>
        <p className={styles.experienceSummary}>{item.summary}</p>
      </div>
    </li>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <ExternalAnchor href={project.href} className={styles.projectCard}>
      <div className={styles.projectMedia}>
        <Image
          src={project.image}
          alt={project.alt}
          width={960}
          height={720}
          sizes="(max-width: 820px) 100vw, 50vw"
          className={styles.projectImage}
        />
      </div>
      <div className={styles.projectBody}>
        <div className={styles.projectHeading}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <Icon name="arrowUpRight" width={18} height={18} />
        </div>
        <p className={styles.projectDescription}>{project.description}</p>
        <span className={styles.projectTag}>{project.tag}</span>
      </div>
    </ExternalAnchor>
  );
}

function WritingRow({ item }: { item: WritingItem }) {
  const linkClassName = item.readTime
    ? styles.writingLink
    : `${styles.writingLink} ${styles.writingLinkCompact}`;

  return (
    <li className={styles.writingItem}>
      <ExternalAnchor href={item.href} className={linkClassName}>
        <span className={styles.writingDate}>{item.date}</span>
        <span className={styles.writingTitle}>{item.title}</span>
        {item.readTime ? <span className={styles.writingMeta}>{item.readTime}</span> : null}
        <Icon name="arrowUpRight" width={16} height={16} />
      </ExternalAnchor>
    </li>
  );
}

function ContactCard({ method }: { method: ContactMethod }) {
  const backdropIcon = getContactIconName(method.label);
  const backdropAsset = getContactBackdropAsset(method.label);

  return (
    <ExternalAnchor href={method.href} className={styles.contactCard}>
      <span className={styles.contactBackdrop} aria-hidden="true">
        {backdropAsset ? (
          <Image
            src={backdropAsset}
            alt=""
            width={128}
            height={128}
            className={styles.contactBackdropImage}
          />
        ) : (
          <Icon name={backdropIcon} width={128} height={128} strokeWidth={1.35} />
        )}
      </span>
      <div className={styles.contactContent}>
        <span className={styles.contactLabel}>{method.label}</span>
        <div className={styles.contactValueRow}>
          <strong className={styles.contactValue}>{method.value}</strong>
          <Icon name="arrowUpRight" width={18} height={18} />
        </div>
      </div>
    </ExternalAnchor>
  );
}

export function Homepage() {
  const { about, contact, experience, footer, hero, navigation, projects, site, writing } = portfolioContent;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("disable-scroll", isMenuOpen);
    document.documentElement.classList.toggle("disable-scroll", isMenuOpen);

    return () => {
      document.body.classList.remove("disable-scroll");
      document.documentElement.classList.remove("disable-scroll");
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={styles.page} id="top">
      <header className={styles.header}>
        <div className={styles.headerShell}>
          <Link href="#top" className={styles.brand}>
            <span className={styles.brandDot} aria-hidden="true" />
            <span className={styles.brandName}>{site.name}</span>
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.headerActions}>
            <ExternalAnchor href={site.blogUrl} className={styles.blogPill}>
              Read my blog
              <Icon name="arrowUpRight" width={16} height={16} />
            </ExternalAnchor>
            <ThemeToggle />
          </div>

          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            data-open={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className={styles.menuButtonLine} />
            <span className={styles.menuButtonLine} />
          </button>
        </div>

        <div className={styles.mobileDrawer} id="mobile-menu" data-open={isMenuOpen}>
          <nav className={styles.mobileNav} aria-label="Mobile primary">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className={styles.mobileNavLink} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
            <ExternalAnchor href={site.blogUrl} className={styles.mobileNavLink}>
              Read my blog
              <Icon name="arrowUpRight" width={15} height={15} />
            </ExternalAnchor>
          </nav>
          <div className={styles.mobileDrawerActions}>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.statusPill}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span>{hero.location}</span>
          </div>
          <h1 className={styles.heroTitle}>{site.name}</h1>
          <p className={styles.heroRole}>
            {hero.rolePrefix} <span className={styles.heroRoleAccent}>{hero.company}</span>
          </p>
          <div className={styles.heroActions}>
            <ActionLink action={hero.primaryCta} className={`${styles.actionPill} ${styles.primaryPill}`} />
            <ActionLink action={hero.secondaryCta} className={`${styles.actionPill} ${styles.secondaryPill}`} />
            <ActionLink action={hero.tertiaryCta} className={`${styles.actionPill} ${styles.ghostPill}`} />
          </div>
        </section>

        <section className={styles.section} id="about">
          <Reveal>
            <SectionHeading label={about.label} title={about.title} />
          </Reveal>
          <div className={styles.aboutGrid}>
            <Reveal className={styles.aboutPortrait} delay={70}>
              <Image
                src={about.image}
                alt={about.imageAlt}
                width={1440}
                height={1080}
                sizes="(max-width: 820px) 100vw, 32vw"
                className={styles.aboutImage}
              />
            </Reveal>
            <Reveal className={styles.aboutBody} delay={130}>
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className={styles.aboutCopy}>{paragraph}</p>
              ))}
              <div className={styles.skillList}>
                {about.skills.map((skill) => (
                  <span key={skill} className={styles.skillChip}>{skill}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className={styles.section} id="experience">
          <Reveal>
            <SectionHeading label={experience.label} title={experience.title} />
          </Reveal>
          <ul className={styles.experienceList}>
            {experience.items.map((item, index) => (
              <Reveal key={`${item.company}-${item.period}`} delay={index * 55}>
                <ExperienceRow item={item} />
              </Reveal>
            ))}
          </ul>
        </section>

        <section className={styles.section} id="projects">
          <Reveal>
            <SectionHeading label={projects.label} title={projects.title} />
          </Reveal>
          <div className={styles.projectsGrid}>
            {projects.items.map((project, index) => (
              <Reveal key={project.title} delay={index * 45}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className={styles.section} id="writing">
          <Reveal>
            <SectionHeading label={writing.label} title={writing.title} />
          </Reveal>
          {writing.items.length > 0 ? (
            <ul className={styles.writingList}>
              {writing.items.map((item, index) => (
                <Reveal key={item.title} delay={index * 45}>
                  <WritingRow item={item} />
                </Reveal>
              ))}
            </ul>
          ) : null}
          <Reveal delay={180}>
            <ExternalAnchor href={writing.allPostsHref} className={`${styles.writingMore} ${writing.items.length === 0 ? styles.writingMoreSolo : ""}`}>
              {writing.ctaLabel}
              <Icon name="arrowUpRight" width={16} height={16} />
            </ExternalAnchor>
          </Reveal>
        </section>

        <section className={styles.section} id="contact">
          <Reveal>
            <SectionHeading label={contact.label} title={contact.title} />
          </Reveal>
          <Reveal delay={70}>
            <p className={styles.contactIntro}>{contact.intro}</p>
          </Reveal>
          <div className={styles.contactGrid}>
            {contact.methods.map((method, index) => (
              <Reveal key={method.label} delay={index * 55}>
                <ContactCard method={method} />
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>{`© ${currentYear} ${site.name}`}</span>
        <span>{footer.location}</span>
      </footer>
    </div>
  );
}
