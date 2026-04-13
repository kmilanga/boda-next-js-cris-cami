export default function Story() {
  return (
    <section className="story-section reveal" id="story">
      <div className="story-container">
        <div className="story-image-wrapper">
          <img 
            src="/gallery2.jpg" 
            alt="Ana y Jose" 
            className="story-img"
          />
        </div>

        <div className="story-content">
          <h2 className="story-title">Nuestra Historia</h2>
          <div className="story-body">
            <p>
              Todo comenzó con una conversación inesperada, una de esas que no
              buscas pero que cambian tu vida para siempre. Desde ese día, cada
              momento juntos ha sido una mezcla perfecta de risas, complicidad y
              sueños compartidos.
            </p>
            <p>
              Hemos recorrido caminos, ciudades y etapas que nos han hecho más
              fuertes, más pacientes y más nosotros. Hoy celebramos no solo el
              amor, sino la historia que hemos construido paso a paso.
            </p>
            <p className="story-highlight">
              Y este es apenas el comienzo de una vida entera que queremos seguir
              escribiendo juntos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}