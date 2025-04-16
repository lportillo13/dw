// Evento.js
import React from 'react';

export default function Evento({ formData = {}, handleChange }) {
  return (
    <div>
      <h3>Evento</h3>
      {formData.es_evento ? (
        <div>
          <div className="form-group">
            <label>Lugar del Evento</label>
            <input
              type="text"
              name="lugar_del_evento"
              className="form-control"
              value={formData.lugar_del_evento || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Hora del Evento</label>
            <input
              type="time"
              name="hora_del_evento"
              className="form-control"
              value={formData.hora_del_evento || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Mapa del Evento (URL)</label>
            <input
              type="text"
              name="mapa_del_evento"
              className="form-control"
              value={formData.mapa_del_evento || ''}
              onChange={handleChange}
            />
          </div>
        </div>
      ) : (
        <>
          {formData.activar_ceremonia && (
            <div>
              <h4>Ceremonia</h4>
              <div className="form-group">
                <label>Lugar de la Ceremonia</label>
                <input
                  type="text"
                  name="lugar_de_la_ceremonia"
                  className="form-control"
                  value={formData.lugar_de_la_ceremonia || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Hora de la Ceremonia</label>
                <input
                  type="time"
                  name="hora_de_la_ceremonia"
                  className="form-control"
                  value={formData.hora_de_la_ceremonia || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Mapa de la Ceremonia (URL)</label>
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
              <h4>Recepción</h4>
              <div className="form-group">
                <label>Lugar de la Recepción</label>
                <input
                  type="text"
                  name="lugar_de_la_recepcion"
                  className="form-control"
                  value={formData.lugar_de_la_recepcion || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Hora de la Recepción</label>
                <input
                  type="time"
                  name="hora_de_la_recepcion"
                  className="form-control"
                  value={formData.hora_de_la_recepcion || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Mapa de la Recepción (URL)</label>
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
    </div>
  );
}
