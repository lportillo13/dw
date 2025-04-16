import React from 'react';

export default function Recepcion({ formData = {}, handleChange }) {
  return (
    <div>
      <div className="form-group">
        <label>Lugar de la Recepción</label>
        <input
          type="text"
          name="lugar_de_la_recepcion"
          className="form-control"
          value={formData.lugar_de_la_recepcion || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Hora de la Recepción</label>
        <input
          type="time"
          name="hora_de_la_recepcion"
          className="form-control"
          value={formData.hora_de_la_recepcion || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Mapa de la Recepción (URL)</label>
        <input
          type="text"
          name="mapa_de_la_recepcion"
          className="form-control"
          value={formData.mapa_de_la_recepcion || ''}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
