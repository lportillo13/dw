import React from 'react';
import CloudImageUploader from './CloudImageUploader';
import enCommon from '../../locales/en/common.json';
import esCommon from '../../locales/es/common.json';

export default function RSVP({ formData = {}, handleChange, handleJsonbChange, coupleId, lang }) {
  const common = lang === 'es' ? esCommon : enCommon;
  const labels = common.sections;
  const idiomas = formData.idiomas || Object.keys(formData.tipo_de_regalo || { es: '', en: '' });

  return (
    <div>
      <h3>{labels.rsvpTitle}</h3>

      {/* Tipo de Regalo (jsonb, conditional) */}
      {formData.activar_regalo && (
        <div className="form-group">
          <label>{labels.giftType}</label>
          {idiomas.map((code) => (
            <textarea
              key={`tipo_de_regalo_${code}`}
              name="tipo_de_regalo"
              className="form-control mb-2"
              placeholder={`${labels.giftType} [${code.toUpperCase()}]`}
              value={formData.tipo_de_regalo?.[code] || ''}
              onChange={(e) =>
                handleJsonbChange('tipo_de_regalo', e.target.value, code)
              }
            />
          ))}
        </div>
      )}

      {/* Fecha de confirmación (date field) */}
      <div className="form-group">
        <label>{labels.confirmationDate}</label>
        <input
          type="date"
          name="fecha_de_confirmacion"
          className="form-control"
          value={formData.fecha_de_confirmacion || ''}
          onChange={handleChange}
        />
      </div>

      {/* Imagen RSVP (conditional) */}
      {formData.activar_confirmacion && (
        <CloudImageUploader
          name="imagen_rsvp"
          label={labels.rsvpImage}
          value={formData.imagen_rsvp || ''}
          onChange={handleChange}
          folder="rsvp"
          coupleId={coupleId}
        />
      )}

      {/* Solo para adultos */}
      <div className="form-group">
        <label>{labels.adultsOnly}</label>
        <input
          type="checkbox"
          name="solo_para_adultos"
          checked={Boolean(formData.solo_para_adultos)}
          onChange={handleChange}
        />
      </div>

      {/* Activar Comida en Formulario */}
      <div className="form-group">
        <label>{labels.enableFoodOption}</label>
        <input
          type="checkbox"
          name="activar_comida_en_formulario"
          checked={Boolean(formData.activar_comida_en_formulario)}
          onChange={handleChange}
        />
      </div>

      {/* Adultos Texto (jsonb, conditional) */}
      {formData.solo_para_adultos && (
        <div className="form-group">
          <label>{labels.adultsText}</label>
          {idiomas.map((code) => (
            <textarea
              key={`adultos_texto_${code}`}
              name="adultos_texto"
              className="form-control mb-2"
              placeholder={`${labels.adultsText} [${code.toUpperCase()}]`}
              value={formData.adultos_texto?.[code] || ''}
              onChange={(e) =>
                handleJsonbChange('adultos_texto', e.target.value, code)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
