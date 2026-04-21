"use client";
import { useState } from "react";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjlgjpq";

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    attending: "",
    guests: "0",
    message: "",
  });

  const [status, setStatus] = useState("idle"); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.attending) {
      alert("Por favor completa los campos obligatorios.");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Nombre: form.name,
          Teléfono: form.phone,
          Asistencia: form.attending === "yes" ? "Sí asiste" : "No asiste",
          Acompañantes: form.attending === "yes" ? form.guests : "—",
          Mensaje: form.message || "—",
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="rsvp-section reveal" id="rsvp">
        <h2 className="rsvp-title">Confirmación de Asistencia</h2>
        <div className="rsvp-success">
          {form.attending === "yes" ? (
            <>
              <h3 className="rsvp-success-title">
                ¡Gracias por confirmar tu asistencia!
              </h3>
              <p className="rsvp-success-text">
                Nos alegra muchísimo que puedas acompañarnos en este día tan
                especial.
                {form.guests !== "0" &&
                  ` Vendrás con ${form.guests} acompañante(s).`}
              </p>
            </>
          ) : (
            <>
              <h3 className="rsvp-success-title">¡Gracias por avisarnos!</h3>
              <p className="rsvp-success-text">
                Lamentamos que no puedas asistir, pero agradecemos mucho que lo
                hayas confirmado.
              </p>
            </>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="rsvp-section reveal" id="rsvp">
      <h2 className="rsvp-title">Confirmación de Asistencia</h2>

      <form className="rsvp-form" onSubmit={handleSubmit} noValidate>
        <div className="rsvp-field">
          <label htmlFor="name">Nombre completo *</label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </div>

        <div className="rsvp-field">
          <label htmlFor="phone">Número de teléfono *</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            autoComplete="tel"
          />
        </div>

        <div className="rsvp-field">
          <label htmlFor="attending">¿Asistirás? *</label>
          <select
            id="attending"
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

        {form.attending === "yes" && (
          <div className="rsvp-field">
            <label htmlFor="guests">Número de acompañantes (máx. 3)</label>
            <select
              id="guests"
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

        <div className="rsvp-field">
          <label htmlFor="message">Mensaje (opcional)</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
          />
        </div>

        {status === "error" && (
          <p style={{ color: "red", marginBottom: "10px", fontSize: "0.9rem" }}>
            Hubo un error al enviar. Por favor inténtalo de nuevo.
          </p>
        )}

        <button
          type="submit"
          className="rsvp-button"
          disabled={status === "sending"}
          style={{ opacity: status === "sending" ? 0.7 : 1 }}
        >
          {status === "sending" ? "Enviando..." : "Enviar confirmación"}
        </button>
      </form>
    </section>
  );
}
