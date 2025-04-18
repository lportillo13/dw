import React from 'react';
import CloudImageUploader from './CloudImageUploader';
import enCommon from '../../locales/en/common.json';
import esCommon from '../../locales/es/common.json';

export default function Calendario({ formData = {}, handleChange, handleJsonbChange, lang, coupleId }) {
  const common = lang === 'es' ? esCommon : enCommon;
  const labels = common.sections;
  const idiomas = formData.idiomas || Object.keys(formData.texto_calendario || { es: '', en: '' });

  return (
    <div>
      <h3>{labels.calendarTitle}</h3>

      {/* Foto Calendario */}
      <div className="form-group">
        <label>{labels.calendarPhoto}</label>
        <CloudImageUploader
          name="foto_calendario"
          value={formData.foto_calendario || ''}
          onChange={handleChange}
          folder="calendario"
          coupleId={coupleId}
        />
      </div>

      {/* Texto Calendario (jsonb per idioma) */}
      <div className="form-group">
        <label>{labels.calendarText}</label>
        {idiomas.map((code) => (
          <textarea
            key={`texto_calendario_${code}`}
            name="texto_calendario"
            className="form-control mb-2"
            value={formData.texto_calendario?.[code] || ''}
            onChange={(e) =>
              handleJsonbChange('texto_calendario', e.target.value, code)
            }
            placeholder={`${labels.calendarText} [${code.toUpperCase()}]`}
          />
        ))}
      </div>
    </div>
  );
}
