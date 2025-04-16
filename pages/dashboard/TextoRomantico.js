import React from 'react';

export default function TextoRomantico({ formData = {}, handleChange }) {
  return (
    <div>
      <div className="form-group">
        <label>Activar Texto Romántico</label>
        <input
          type="checkbox"
          name="activar_texto_romantico"
          checked={Boolean(formData.activar_texto_romantico)}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Fondo Texto Romántico (URL de imagen)</label>
        <input
          type="text"
          name="fondo_texto_biblico"
          className="form-control"
          value={formData.fondo_texto_biblico || ''}
          onChange={handleChange}
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
