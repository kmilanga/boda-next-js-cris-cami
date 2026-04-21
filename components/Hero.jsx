"use client";
import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2028-01-21T17:00:00").getTime();

function calculateTimeLeft() {
  const diff = TARGET_DATE - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (n) => String(n).padStart(2, "0");

  return (
    <section className="hero-section" id="inicio">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">Valeria & Adrián</h1>
        <p className="hero-subtitle">21 de Enero de 2028 · Córdoba</p>

        <div className="hero-countdown">
          {timeLeft ? (
            <>
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
            </>
          ) : (
            <>
              {["Días", "Horas", "Min", "Seg"].map((label, i) => (
                <div key={label} className="h-count-item" style={{ opacity: 0 }}>
                  <span>00</span>
                  <small>{label}</small>
                  {i < 3 && <div className="h-count-sep">:</div>}
                </div>
              ))}
            </>
          )}
        </div>

        <a href="#story" className="hero-button">
          Nuestra Historia
        </a>
      </div>
    </section>
  );
}
