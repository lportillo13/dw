// Evento.js
import React from 'react';
import enCommon from '../../locales/en/common.json';
import esCommon from '../../locales/es/common.json';

export default function Evento({
  formData = {},
  handleChange,
  handleJsonbChange,
  lang
}) {
  const common = lang === 'es' ? esCommon : enCommon;
  const labels = common.sections;

  // jsonb languages for dress code
  const dressLangs =
    formData.idiomas ||
    Object.keys(formData.tipo_de_vestimenta || { es: '', en: '' });

  return (
    <div>
      <h3>{labels.eventTitle}</h3>

      {formData.es_evento ? (
        <>
          <div className="form-group">
            <label>{labels.eventWeddingLocation}</label>
            <input
              type="text"
              name="ubicacion_de_la_boda"
              className="form-control"
              value={formData.ubicacion_de_la_boda || ''}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>{labels.eventPlace}</label>
            <input
              type="text"
              name="lugar_del_evento"
              className="form-control"
              value={formData.lugar_del_evento || ''}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>{labels.eventTime}</label>
            <input
              type="time"
              name="hora_del_evento"
              className="form-control"
              value={formData.hora_del_evento || ''}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>{labels.eventMap}</label>
            <input
              type="text"
              name="mapa_del_evento"
              className="form-control"
              value={formData.mapa_del_evento || ''}
              onChange={handleChange}
            />
          </div>
        </>
      ) : (
        <>
          {formData.activar_ceremonia && (
            <div>
              <h4>{labels.ceremonyTitle}</h4>
              <div className="form-group">
                <label>{labels.ceremonyLocation}</label>
                <input
                  type="text"
                  name="lugar_de_la_ceremonia"
                  className="form-control"
                  value={formData.lugar_de_la_ceremonia || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>{labels.ceremonyTime}</label>
                <input
                  type="time"
                  name="hora_de_la_ceremonia"
                  className="form-control"
                  value={formData.hora_de_la_ceremonia || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>{labels.ceremonyMap}</label>
                <input
                  type="text"
                  name="mapa_de_la_ceremonia"
                  className="form-control"
                  value={formData.mapa_de_la_ceremonia || ''}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          {formData.activar_recepcion && (
            <div>
              <h4>{labels.receptionTitle}</h4>
              <div className="form-group">
                <label>{labels.receptionLocation}</label>
                <input
                  type="text"
                  name="lugar_de_la_recepcion"
                  className="form-control"
                  value={formData.lugar_de_la_recepcion || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>{labels.receptionTime}</label>
                <input
                  type="time"
                  name="hora_de_la_recepcion"
                  className="form-control"
                  value={formData.hora_de_la_recepcion || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>{labels.receptionMap}</label>
                <input
                  type="text"
                  name="mapa_de_la_recepcion"
                  className="form-control"
                  value={formData.mapa_de_la_recepcion || ''}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
        </>
      )}

      {/* Dress‑code JSONB */}
      {formData.activar_vestimenta && (
        <div>
          <h4>{labels.dressTitle}</h4>
          {dressLangs.map((code) => (
            <div className="form-group" key={code}>
              <label>
                {labels.dressType} [{code.toUpperCase()}]
              </label>
              <textarea
                name="tipo_de_vestimenta"
                className="form-control"
                value={formData.tipo_de_vestimenta?.[code] || ''}
                onChange={(e) =>
                  handleJsonbChange(
                    'tipo_de_vestimenta',
                    e.target.value,
                    code
                  )
                }
                placeholder={`${labels.dressType} [${code.toUpperCase()}]`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
