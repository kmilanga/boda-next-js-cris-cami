"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  { src: "/gallery1.jpg", alt: "Valeria y Adrián — momento 1" },
  { src: "/gallery2.jpg", alt: "Valeria y Adrián — momento 2" },
  { src: "/gallery3.jpg", alt: "Valeria y Adrián — momento 3" },
  { src: "/gallery4.jpg", alt: "Valeria y Adrián — momento 4" },
  { src: "/gallery5.jpg", alt: "Valeria y Adrián — momento 5" },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <section className="gallery-section reveal" id="gallery">
      <h2 className="gallery-title">Nuestros Momentos</h2>

      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map((img, i) => (
            <div
              key={i}
              className="gallery-item"
              onClick={() => openAt(i)}
              role="button"
              aria-label={`Ver foto ${i + 1}`}
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openAt(i)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-overlay">
                <i className="bx bx-zoom-in" style={{ fontSize: "2rem" }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.92)" },
        }}
      />
    </section>
  );
}
