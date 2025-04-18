import React from 'react';
import CloudImageUploader from './CloudImageUploader';
import enCommon from '../../locales/en/common.json';
import esCommon from '../../locales/es/common.json';

export default function TextoRomantico({
  formData = {},
  handleChange,
  handleJsonbChange,
  coupleId,
  lang
}) {
  const common = lang === 'es' ? esCommon : enCommon;
  const labels = common.sections;
  const idiomas =
    formData.idiomas || Object.keys(formData.texto_romantico || { es: '', en: '' });

  const romanticTexts = formData.texto_romantico || {};

  return (
    <div>
      <h3>{labels.romanticText}</h3>

      {/* Activar Texto Sobre Imagen */}
      <div className="form-group">
        <label>{labels.enableTextOverImage}</label>
        <input
          type="checkbox"
          name="activar_texto_sobre_imagen"
          checked={Boolean(formData.activar_texto_sobre_imagen)}
          onChange={handleChange}
        />
      </div>

      {/* Fondo Imagen Romántico */}
      <div className="form-group">
        <label>{labels.romanticTextBackground}</label>
        <CloudImageUploader
          name="fondo_texto_biblico"
          value={formData.fondo_texto_biblico || ''}
          onChange={handleChange}
          folder="texto_romantico"
          coupleId={coupleId}
        />
      </div>

      {/* Texto Romántico JSONB */}
      <div className="form-group">
        <label>{labels.romanticTextWysiwyg}</label>
        {idiomas.map((code) => (
          <textarea
            key={`texto_romantico_${code}`}
            name="texto_romantico"
            className="form-control mb-2"
            placeholder={`${labels.romanticText} [${code.toUpperCase()}]`}
            value={romanticTexts[code] || ''}
            onChange={(e) =>
              handleJsonbChange('texto_romantico', e.target.value, code)
            }
          />
        ))}
      </div>
    </div>
  );
}
