"use client";

import { Profile } from "@/app/types/portfolio";
import { useLanguage } from "@/app/context/LanguageProvider";
import { translations } from "@/app/data/translations";

interface FooterProps {
  profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer id="contacto" className="border-t border-line pt-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold">{t.footer.contact}</h3>
          <p className="mt-2 text-muted">{t.footer.contactText}</p>
        </div>
        <div className="space-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="block text-sm font-medium text-slate-700 transition hover:text-slate-900"
          >
            ✉️ {profile.email}
          </a>
          {profile.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="block text-sm font-medium text-slate-700 transition hover:text-slate-900"
            >
              → {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 border-t border-line pt-8 text-center text-sm text-muted">
        <p>{t.footer.copyright.replace("%name%", profile.name)}</p>
      </div>
    </footer>
  );
}
