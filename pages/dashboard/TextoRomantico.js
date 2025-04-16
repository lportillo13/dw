// TextoRomantico.js
import React from 'react';
import CloudImageUploader from './CloudImageUploader';

export default function TextoRomantico({ formData = {}, handleChange, coupleId }) {
  return (
    <div>
      <h3>Texto Romántico</h3>
      <div className="form-group">
        <label>Activar Texto Sobre Imagen</label>
        <input
          type="checkbox"
          name="activar_texto_sobre_imagen"
          checked={Boolean(formData.activar_texto_sobre_imagen)}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Fondo Texto Romántico</label>
        <CloudImageUploader
          name="fondo_texto_biblico"
          label=""
          value={formData.fondo_texto_biblico || ''}
          onChange={handleChange}
          folder="texto_romantico"
          coupleId={coupleId}
        />
      </div>
      <div className="form-group">
        <label>Texto Romántico (WYSIWYG)</label>
        <textarea
          name="texto_romantico"
          className="form-control"
          value={formData.texto_romantico || ''}
          onChange={handleChange}
          placeholder="Enter the romantic message here..."
        />
      </div>
      {formData.activar_ingles && (
        <div className="form-group">
          <label>Texto Romántico Inglés (WYSIWYG)</label>
          <textarea
            name="texto_romantico_ingles"
            className="form-control"
            value={formData.texto_romantico_ingles || ''}
            onChange={handleChange}
            placeholder="Enter the romantic message in English..."
          />
        </div>
      )}
    </div>
  );
}
