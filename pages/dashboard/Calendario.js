import React from 'react';
import CloudImageUploader from './CloudImageUploader';
import enCommon from '../../locales/en/common.json';
import esCommon from '../../locales/es/common.json';

export default function Calendario({ formData = {}, handleChange, lang, coupleId }) {
  const common = lang === 'es' ? esCommon : enCommon;
  const labels = common.sections;

  return (
    <div>
      <h3>{labels.calendarTitle}</h3>

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

      <div className="form-group">
        <label>{labels.calendarText}</label>
        <textarea
          name="texto_calendario"
          className="form-control"
          value={formData.texto_calendario || ''}
          onChange={handleChange}
        />
      </div>

      {formData.activar_ingles && (
        <div className="form-group">
          <label>{labels.calendarTextEnglish}</label>
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
