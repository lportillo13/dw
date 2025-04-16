import React from 'react';
import CloudImageUploader from './CloudImageUploader';

export default function Calendario({ formData = {}, handleChange, coupleId }) {
  return (
    <div>
      <CloudImageUploader
        name="foto_calendario"
        label="Foto Calendario"
        value={formData.foto_calendario || ''}
        onChange={handleChange}
        folder="calendario"
        coupleId={coupleId}
      />
      <div className="form-group">
        <label>Texto Calendario</label>
        <textarea
          name="texto_calendario"
          className="form-control"
          value={formData.texto_calendario || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Texto Calendario Inglés</label>
        <textarea
          name="texto_calendario_ingles"
          className="form-control"
          value={formData.texto_calendario_ingles || ''}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
