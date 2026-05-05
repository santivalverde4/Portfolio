"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { translations } from "@/app/data/translations";
import { portfolioData } from "@/app/data/portfolio-i18n";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const data = portfolioData[language];
  const profile = data.profile;

  return (
    <footer id="contacto" className="border-t border-line/80 pt-10">
      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h3 className="font-display text-2xl font-semibold">{t.footer.contact}</h3>
          <p className="mt-2 text-muted">{t.footer.contactText}</p>
        </div>
        <div className="space-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="flex cursor-pointer items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-sm font-semibold text-foreground transition duration-200 hover:border-[color:var(--accent)]/40"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-[color:var(--surface-2)]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-[color:var(--accent)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16v12H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </span>
            {profile.email}
          </a>
          {profile.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-sm font-semibold text-foreground transition duration-200 hover:border-[color:var(--accent)]/40"
            >
              <span>{link.label}</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-[color:var(--accent)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7" />
                <path d="M9 7h8v8" />
              </svg>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-10 border-t border-line/80 pt-8 text-center text-sm text-muted">
        <p>{t.footer.copyright.replace("%name%", profile.name)}</p>
      </div>
    </footer>
  );
}
