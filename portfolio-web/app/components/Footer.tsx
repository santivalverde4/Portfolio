"use client";

import { useLanguage } from "@/app/context/LanguageProvider";
import { portfolioData } from "@/app/data/portfolio-i18n";
import { translations } from "@/app/data/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const data = portfolioData[language];
  const profile = data.profile;

  return (
    <footer id="contacto" className="scroll-mt-28 pb-10">
      <div className="reveal-up relative overflow-hidden rounded-[34px] bg-[linear-gradient(145deg,#121a22_0%,#16202b_42%,#0b6f69_100%)] px-6 py-8 text-white shadow-[0_34px_90px_rgba(27,40,52,0.22)] sm:px-8 lg:px-10 lg:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(213,140,79,0.26),transparent_34%)]" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white/65">
              <span className="h-2 w-2 rounded-full bg-[#f0c07f] shadow-[0_0_0_6px_rgba(240,192,127,0.12)]" />
              {t.footer.eyebrow}
            </p>

            <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight tracking-[-0.05em] text-white sm:text-5xl">
              {t.footer.contact}
            </h2>

            <p className="mt-4 max-w-xl text-base leading-8 text-white/72">
              {t.footer.contactText}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(0,0,0,0.18)] hover:-translate-y-0.5"
              >
                {profile.email}
              </a>
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm font-semibold text-white/88 hover:-translate-y-0.5 hover:bg-white/12"
              >
                {t.nav.cv}
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <article className="rounded-[28px] border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/45">
                {t.footer.followMe}
              </p>

              <div className="mt-4 space-y-3">
                {profile.socialLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-[22px] border border-white/8 bg-white/7 px-4 py-3 text-sm font-medium text-white/82 hover:-translate-y-0.5 hover:bg-white/12"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/38">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </a>
                ))}
              </div>
            </article>

            <article className="rounded-[28px] border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
              <p className="text-sm text-white/55">{profile.location}</p>
              <p className="mt-3 font-display text-2xl leading-tight tracking-[-0.04em] text-white">
                {profile.role}
              </p>
              <p className="mt-3 text-sm leading-7 text-white/68">{profile.availability}</p>
            </article>
          </div>
        </div>

        <div className="relative z-10 mt-10 border-t border-white/10 pt-6 text-sm text-white/45">
          {t.footer.copyright.replace("%name%", profile.name)}
        </div>
      </div>
    </footer>
  );
}
