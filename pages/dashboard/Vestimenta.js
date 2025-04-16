import React from 'react';

export default function Vestimenta({ formData, handleChange }) {
  return (
    <div>
      <div className="form-group">
        <label>Tipo de Vestimenta</label>
        <textarea
          name="tipo_de_vestimenta"
          className="form-control"
          value={formData.tipo_de_vestimenta || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Tipo de Vestimenta Inglés</label>
        <textarea
          name="tipo_de_vestimenta_ingles"
          className="form-control"
          value={formData.tipo_de_vestimenta_ingles || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Activar Icono Vestimenta</label>
        <input
          type="checkbox"
          name="activar_icono_vestimenta"
          checked={formData.activar_icono_vestimenta}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Icono Vestimenta (URL)</label>
        <input
          type="text"
          name="icono_vestimenta"
          className="form-control"
          value={formData.icono_vestimenta}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
