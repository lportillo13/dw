// TextoRomantico.js
import React from 'react';
import CloudImageUploader from './CloudImageUploader';

export default function TextoRomantico({
  formData = {},
  handleChange,
  handleJsonbChange,
  coupleId
}) {
  // You might store an array of active languages in formData.idiomas;
  // otherwise we fall back to whatever keys exist in texto_romantico.
  const languages =
    formData.idiomas ||
    Object.keys(formData.texto_romantico || { es: '', en: '' });

  const romanticTexts = formData.texto_romantico || {};

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
          value={formData.fondo_texto_biblico || ''}
          onChange={handleChange}
          folder="texto_romantico"
          coupleId={coupleId}
        />
      </div>

      <div className="form-group">
        <label>Texto Romántico (WYSIWYG)</label>

        {languages.map((code) => (
          <div className="mt-2" key={code}>
            <label>
              Texto Romántico [{code.toUpperCase()}]
            </label>
            <textarea
              name="texto_romantico"
              className="form-control"
              value={romanticTexts[code] || ''}
              onChange={(e) =>
                handleJsonbChange('texto_romantico', e.target.value, code)
              }
              placeholder={`Enter the romantic message for ${code}…`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
