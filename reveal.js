"use client";

import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!elements.length) return;

    const fallback = setTimeout(() => {
      elements.forEach((el) => el.classList.add("visible"));
    }, 1500);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,  
        rootMargin: "0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);
}
