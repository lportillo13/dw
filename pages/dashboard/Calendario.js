// Calendario.js
import React from 'react';
import CloudImageUploader from './CloudImageUploader';

export default function Calendario({ formData = {}, handleChange, coupleId }) {
  return (
    <div>
      <h3>Calendario</h3>
      <div className="form-group">
        <label>Foto Calendario</label>
        <CloudImageUploader
          name="foto_calendario"
          label=""
          value={formData.foto_calendario || ''}
          onChange={handleChange}
          folder="calendario"
          coupleId={coupleId}
        />
      </div>
      <div className="form-group">
        <label>Texto Calendario (HTML)</label>
        <textarea
          name="texto_calendario"
          className="form-control"
          value={formData.texto_calendario || ''}
          onChange={handleChange}
        />
      </div>
      {formData.activar_ingles && (
        <div className="form-group">
          <label>Texto Calendario Inglés (HTML)</label>
          <textarea
            name="texto_calendario_ingles"
            className="form-control"
            value={formData.texto_calendario_ingles || ''}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
}
