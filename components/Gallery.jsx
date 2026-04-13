export default function Gallery() {
  const images = [
    { src: "/gallery1.jpg", alt: "Nuestros momentos 1" },
    { src: "/gallery2.jpg", alt: "Nuestros momentos 2" },
    { src: "/gallery3.jpg", alt: "Nuestros momentos 3" },
    { src: "/gallery4.jpg", alt: "Nuestros momentos 4" },
    { src: "/gallery5.jpg", alt: "Nuestros momentos 5" },
  ];

  return (
    <section className="gallery-section reveal" id="gallery">
      <h2 className="gallery-title">Nuestros Momentos</h2>
      
      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span>❤</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}