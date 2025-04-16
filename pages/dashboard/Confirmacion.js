import React from 'react';

export default function Confirmacion({ formData = {}, handleChange }) {
  return (
    <div>
      <div className="form-group">
        <label>Título Confirmación</label>
        <input
          type="text"
          name="titulo_confirmacion"
          className="form-control"
          value={formData.titulo_confirmacion || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Título Confirmación Inglés</label>
        <input
          type="text"
          name="titulo_confirmacion_in"
          className="form-control"
          value={formData.titulo_confirmacion_in || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Activar Icono Confirmación</label>
        <input
          type="checkbox"
          name="activar_icono_confirmacion"
          checked={Boolean(formData.activar_icono_confirmacion)}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Icono Confirmación (URL)</label>
        <input
          type="text"
          name="icono_confirmacion"
          className="form-control"
          value={formData.icono_confirmacion || ''}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
