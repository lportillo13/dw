import React from 'react';

export default function RSVP({ formData = {}, handleChange }) {
  return (
    <div>
      <div className="form-group">
        <label>Fecha de Confirmación</label>
        <input
          type="date"
          name="fecha_de_confirmacion"
          className="form-control"
          value={formData.fecha_de_confirmacion || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Fecha de Confirmación Inglés</label>
        <input
          type="date"
          name="fecha_de_confirmacion_ingles"
          className="form-control"
          value={formData.fecha_de_confirmacion_ingles || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Imagen RSVP (URL)</label>
        <input
          type="text"
          name="imagen_rsvp"
          className="form-control"
          value={formData.imagen_rsvp || ''}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
