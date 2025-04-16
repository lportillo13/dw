import React from 'react';
import CloudImageUploader from './CloudImageUploader';

export default function TextoRomantico({ formData = {}, handleChange, coupleId }) {
  return (
    <div>
      <div className="form-group">
        <label>Fondo Texto Romántico</label>
        <CloudImageUploader
          name="fondo_texto_biblico"
          value={formData.fondo_texto_biblico || ''}
          onChange={handleChange}
          folder="textoRomantico"
          coupleId={coupleId}
        />
      </div>
      <div className="form-group">
        <label>Texto Romántico</label>
        <textarea
          name="texto_romantico"
          className="form-control"
          value={formData.texto_romantico || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Texto Romántico Inglés</label>
        <textarea
          name="texto_romantico_ingles"
          className="form-control"
          value={formData.texto_romantico_ingles || ''}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
