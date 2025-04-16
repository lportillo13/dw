import React from 'react';
import CloudImageUploader from './CloudImageUploader';

export default function RSVP({ formData = {}, handleChange, coupleId }) {
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
      <CloudImageUploader
        name="imagen_rsvp"
        label="Imagen RSVP"
        value={formData.imagen_rsvp || ''}
        onChange={handleChange}
        folder="rsvp"
        coupleId={coupleId}
      />
    </div>
  );
}
