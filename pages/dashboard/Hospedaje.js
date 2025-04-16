import React from 'react';

export default function Hospedaje({ formData, handleChange }) {
  return (
    <div>
      <div className="form-group">
        <label>Hospedaje</label>
        <textarea
          name="hospedaje"
          className="form-control"
          value={formData.hospedaje || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Hospedaje Inglés</label>
        <textarea
          name="hospedaje_ingles"
          className="form-control"
          value={formData.hospedaje_ingles || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Activar Icono Hospedaje</label>
        <input
          type="checkbox"
          name="activar_icono_hospedaje"
          checked={formData.activar_icono_hospedaje}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Icono Hospedaje (URL)</label>
        <input
          type="text"
          name="icono_hospedaje"
          className="form-control"
          value={formData.icono_hospedaje}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
