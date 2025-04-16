import React from 'react';

export default function Regalos({ formData, handleChange }) {
  return (
    <div>
      <div className="form-group">
        <label>Tipo de Regalo (HTML)</label>
        <textarea
          name="tipo_de_regalo"
          className="form-control"
          value={formData.tipo_de_regalo || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Título Regalos</label>
        <input
          type="text"
          name="titulo_regalos"
          className="form-control"
          value={formData.titulo_regalos}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Título Regalos Inglés</label>
        <input
          type="text"
          name="titulo_regalos_in"
          className="form-control"
          value={formData.titulo_regalos_in}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Activar Icono Regalos</label>
        <input
          type="checkbox"
          name="activar_icono_regalos"
          checked={formData.activar_icono_regalos}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Icono Regalos (URL)</label>
        <input
          type="text"
          name="icono_regalos"
          className="form-control"
          value={formData.icono_regalos}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
