"use client";
import { useState } from "react";

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    attending: "",
    guests: "0",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.attending) {
      alert("Por favor completa los campos obligatorios.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <section className="rsvp-section reveal" id="rsvp">
      <h2 className="rsvp-title">Confirmación de Asistencia</h2>

      {!submitted ? (
        <form className="rsvp-form" onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="rsvp-field">
            <label>Nombre completo</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Teléfono */}
          <div className="rsvp-field">
            <label>Número de teléfono</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder=""
            />
          </div>

          {/* Asistencia */}
          <div className="rsvp-field">
            <label>¿Asistirás?</label>
            <select
              name="attending"
              value={form.attending}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="yes">Sí, asistiré</option>
              <option value="no">No podré asistir</option>
            </select>
          </div>

          {/* Acompañantes (solo si asiste) */}
          {form.attending === "yes" && (
            <div className="rsvp-field">
              <label>Número de acompañantes (máx. 3)</label>
              <select
                name="guests"
                value={form.guests}
                onChange={handleChange}
              >
                <option value="0">Ninguno</option>
                <option value="1">1 acompañante</option>
                <option value="2">2 acompañantes</option>
                <option value="3">3 acompañantes</option>
              </select>
            </div>
          )}

          {/* Mensaje */}
          <div className="rsvp-field">
            <label>Mensaje (opcional)</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="rsvp-button">
            Enviar
          </button>
        </form>
      ) : (
        <div className="rsvp-success">
          {form.attending === "yes" ? (
            <>
              <h3 className="rsvp-success-title">¡Gracias por confirmar tu asistencia!</h3>
              <p className="rsvp-success-text">
                Nos alegra muchísimo que puedas acompañarnos en este día tan especial.
                {form.guests !== "0" &&
                  ` Vendrás con ${form.guests} acompañante(s).`}
              </p>
            </>
          ) : (
            <>
              <h3 className="rsvp-success-title">¡Gracias por avisarnos!</h3>
              <p className="rsvp-success-text">
                Lamentamos que no puedas asistir, pero agradecemos mucho que lo hayas confirmado.
              </p>
            </>
          )}
        </div>
      )}
    </section>
  );
}
