"use client";

import { useEffect, useState } from "react";

export default function StickyMenu() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      // Ocultar si bajamos, mostrar si subimos
      setVisible(current < lastScroll || current < 150);
      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const menuItems = [
    { id: "hero", label: "Inicio" },
    { id: "story", label: "Historia" },
    { id: "details", label: "Detalles" },
    { id: "map", label: "Ubicación" },
    { id: "gallery", label: "Galería" },
    { id: "rsvp", label: "Confirmación" },
  ];

  return (
    <nav className={`sticky-menu ${visible ? "show" : "hide"}`}>
      <div className="menu-inner">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={active === item.id ? "active" : ""}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}