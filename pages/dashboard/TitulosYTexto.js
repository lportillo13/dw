import React from 'react';
import CloudImageUploader from './CloudImageUploader';
import enCommon from '../../locales/en/common.json';
import esCommon from '../../locales/es/common.json';

export default function TitulosYTexto({
  formData = {},
  handleChange,
  handleJsonbChange,
  coupleId,
  lang
}) {
  const common = lang === 'es' ? esCommon : enCommon;
  const labels = common.sections;
  const idiomas =
    formData.idiomas || Object.keys(formData.boton_confirmar || { es: '', en: '' });

  return (
    <div>
      <h3>{labels.titlesText}</h3>

      {/* Botón Confirmar */}
      <div className="form-group">
        <label>{labels.confirmButton}</label>
        {idiomas.map((code) => (
          <input
            key={`boton_confirmar_${code}`}
            name="boton_confirmar"
            className="form-control mb-2"
            value={formData.boton_confirmar?.[code] || ''}
            onChange={(e) =>
              handleJsonbChange('boton_confirmar', e.target.value, code)
            }
            placeholder={`${labels.confirmButton} [${code.toUpperCase()}]`}
          />
        ))}
      </div>

      {/* Título Intro Invitación */}
      <div className="form-group">
        <label>{labels.introTitle}</label>
        {idiomas.map((code) => (
          <input
            key={`titulo_intro_invitacion_${code}`}
            name="titulo_intro_invitacion"
            className="form-control mb-2"
            value={formData.titulo_intro_invitacion?.[code] || ''}
            onChange={(e) =>
              handleJsonbChange('titulo_intro_invitacion', e.target.value, code)
            }
            placeholder={`${labels.introTitle} [${code.toUpperCase()}]`}
          />
        ))}
      </div>

      {/* Título Intro Invitación Plural */}
      <div className="form-group">
        <label>{labels.introTitlePlural}</label>
        {idiomas.map((code) => (
          <input
            key={`titulo_intro_invitacion_plural_${code}`}
            name="titulo_intro_invitacion_plural"
            className="form-control mb-2"
            value={formData.titulo_intro_invitacion_plural?.[code] || ''}
            onChange={(e) =>
              handleJsonbChange('titulo_intro_invitacion_plural', e.target.value, code)
            }
            placeholder={`${labels.introTitlePlural} [${code.toUpperCase()}]`}
          />
        ))}
      </div>

      {/* Título Evento */}
      <div className="form-group">
        <label>{labels.eventTitle}</label>
        {idiomas.map((code) => (
          <input
            key={`titulo_evento_${code}`}
            name="titulo_evento"
            className="form-control mb-2"
            value={formData.titulo_evento?.[code] || ''}
            onChange={(e) =>
              handleJsonbChange('titulo_evento', e.target.value, code)
            }
            placeholder={`${labels.eventTitle} [${code.toUpperCase()}]`}
          />
        ))}
      </div>

      {/* Icono Evento */}
      <div className="form-group">
        <label>{labels.activateIcon} {labels.eventTitle}</label>
        <input
          type="checkbox"
          name="activar_icono_evento"
          checked={Boolean(formData.activar_icono_evento)}
          onChange={handleChange}
        />
      </div>
      {formData.activar_icono_evento && (
        <CloudImageUploader
          name="icono_evento"
          label={`Icono ${labels.eventTitle}`}
          value={formData.icono_evento || ''}
          onChange={handleChange}
          folder="iconos"
          coupleId={coupleId}
        />
      )}

      {/* REPEAT for each section like Ceremonia, Recepción, etc. */}
      {[
        { key: 'ceremonia', label: labels.ceremonyTitle },
        { key: 'recepcion', label: labels.receptionTitle },
        { key: 'vestimenta', label: labels.dressCodeTitle },
        { key: 'regalos', label: labels.giftsTitle },
        { key: 'hospedaje', label: labels.accommodationTitle },
        { key: 'confirmacion', label: labels.confirmationTitle }
      ].map(({ key, label }) => (
        <div key={key}>
          <div className="form-group">
            <label>{label}</label>
            {idiomas.map((code) => (
              <input
                key={`titulo_${key}_${code}`}
                name={`titulo_${key}`}
                className="form-control mb-2"
                value={formData[`titulo_${key}`]?.[code] || ''}
                onChange={(e) =>
                  handleJsonbChange(`titulo_${key}`, e.target.value, code)
                }
                placeholder={`${label} [${code.toUpperCase()}]`}
              />
            ))}
          </div>
          <div className="form-group">
            <label>{labels.activateIcon} {label}</label>
            <input
              type="checkbox"
              name={`activar_icono_${key}`}
              checked={Boolean(formData[`activar_icono_${key}`])}
              onChange={handleChange}
            />
          </div>
          {formData[`activar_icono_${key}`] && (
            <CloudImageUploader
              name={`icono_${key}`}
              label={`Icono ${label}`}
              value={formData[`icono_${key}`] || ''}
              onChange={handleChange}
              folder="iconos"
              coupleId={coupleId}
            />
          )}
        </div>
      ))}
    </div>
  );
}
