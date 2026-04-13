export default function Details() {
  return (
    <section className="details-section reveal" id="details">
      <h2 className="details-title">Detalles del Evento</h2>

      <div className="details-grid">
        {/* Ceremonia */}
        <div className="details-card">
          <div className="details-icon">
            <i className='bx bx-church'></i>
          </div>
          <h3>Ceremonia</h3>
          <p className="details-place">Mezquita-Catedral de Córdoba</p>
          <p className="details-time">17:00h</p>
          <p className="details-city">Córdoba</p>
        </div>

        {/* Recepción */}
        <div className="details-card">
          <div className="details-icon">
            <i className='bx bx-wine'></i>
          </div>
          <h3>Celebración</h3>
          <p className="details-place">Hacienda de la Albaida</p>
          <p className="details-time">19:00h</p>
          <p className="details-city">Córdoba</p>
        </div>

        {/* Dress Code */}
        <div className="details-card">
          <div className="details-icon">
            <i className='bx bx-closet'></i>
          </div>
          <h3>Dress Code</h3>
          <p>Elegante</p>
          <p className="details-note">Se recomiendan tonos claros</p>
        </div>

        {/* Información adicional */}
        <div className="details-card">
          <div className="details-icon">
            <i className='bx bx-info-circle'></i>
          </div>
          <h3>Información</h3>
          <p>Aparcamiento gratuito</p>
          <p>Servicio de autobuses</p>
          <p className="details-note">Favor confirmar con antelación</p>
        </div>
      </div>
    </section>
  );
}