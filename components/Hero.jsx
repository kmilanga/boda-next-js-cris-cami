"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const targetDate = new Date("2028-01-21T17:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculate = () => {
      const now = Date.now();
      const diff = targetDate - now;
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculate());
    const timer = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const format = (n) => String(n).padStart(2, '0');

  return (
    <section className="hero-section" id="inicio">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">Valeria & Adrián</h1>
        <p className="hero-subtitle">21 de Enero de 2028 · Córdoba</p>

        {/* CONTADOR INTEGRADO */}
        <div className="hero-countdown">
          <div className="h-count-item">
            <span>{format(timeLeft.days)}</span>
            <small>Días</small>
          </div>
          <div className="h-count-sep">:</div>
          <div className="h-count-item">
            <span>{format(timeLeft.hours)}</span>
            <small>Horas</small>
          </div>
          <div className="h-count-sep">:</div>
          <div className="h-count-item">
            <span>{format(timeLeft.minutes)}</span>
            <small>Min</small>
          </div>
          <div className="h-count-sep">:</div>
          <div className="h-count-item">
            <span>{format(timeLeft.seconds)}</span>
            <small>Seg</small>
          </div>
        </div>

        <a href="#historia" className="hero-button">Nuestra Historia</a>
      </div>
    </section>
  );
}