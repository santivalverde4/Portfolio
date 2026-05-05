"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PageMotion() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobileMotion =
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(max-width: 768px)").matches;

    if (reducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const nav = document.querySelector<HTMLElement>("[data-nav-shell]");

      if (nav) {
        gsap.fromTo(
          nav,
          { autoAlpha: 0, y: -24 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" },
        );
      }

      gsap.utils
        .toArray<HTMLElement>("[data-reveal='section']")
        .forEach((section) => {
          gsap.fromTo(
            section,
            { autoAlpha: 0, y: 48 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                once: true,
              },
            },
          );
        });

      gsap.utils
        .toArray<HTMLElement>("[data-reveal-group]")
        .forEach((group) => {
          const items = group.querySelectorAll<HTMLElement>("[data-reveal-item]");

          if (!items.length) {
            return;
          }

          gsap.fromTo(
            items,
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.78,
              ease: "power3.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: group,
                start: "top 84%",
                once: true,
              },
            },
          );
        });

      if (!mobileMotion) {
        gsap.utils
          .toArray<HTMLElement>("[data-parallax='soft']")
          .forEach((element) => {
            const trigger = element.closest<HTMLElement>("[data-parallax-scope]") ?? element;

            gsap.to(element, {
              yPercent: -10,
              xPercent: 2,
              ease: "none",
              scrollTrigger: {
                trigger,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.1,
              },
            });
          });
      }
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const progress = document.getElementById("scroll-progress");
    const nav = document.querySelector<HTMLElement>("[data-nav-shell]");

    if (!progress && !nav) {
      return;
    }

    let frameId = 0;

    const updateUi = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progressValue = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      if (progress) {
        progress.style.transform = `scaleX(${Math.min(Math.max(progressValue, 0), 1)})`;
      }

      nav?.classList.toggle("is-condensed", window.scrollY > 24);
      frameId = 0;
    };

    const scheduleUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateUi);
    };

    updateUi();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return <div id="scroll-progress" aria-hidden="true" className="scroll-progress" />;
}
