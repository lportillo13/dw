import React from 'react';

export default function Ceremonia({ formData, handleChange }) {
  return (
    <div>
      <div className="form-group">
        <label>Lugar de la Ceremonia</label>
        <input
          type="text"
          name="lugar_de_la_ceremonia"
          className="form-control"
          value={formData.lugar_de_la_ceremonia}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Hora de la Ceremonia</label>
        <input
          type="time"
          name="hora_de_la_ceremonia"
          className="form-control"
          value={formData.hora_de_la_ceremonia}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Mapa de la Ceremonia (URL)</label>
        <input
          type="text"
          name="mapa_de_la_ceremonia"
          className="form-control"
          value={formData.mapa_de_la_ceremonia}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
