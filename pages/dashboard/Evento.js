import React from 'react';

export default function Evento({ formData = {}, handleChange }) {
  return (
    <div>
      <h3>Evento</h3>

      {/* General event details if "Es Evento" is active */}
      {formData.es_evento ? (
        <>
          <div className="form-group">
            <label>Ubicación de la boda</label>
            <input
              type="text"
              name="ubicacion_de_la_boda"
              className="form-control"
              value={formData.ubicacion_de_la_boda || ''}
              onChange={handleChange}
            />
          </div>
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
        </>
      ) : (
        <>
          {/* Ceremonia fields */}
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

          {/* Recepción fields */}
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

      {/* Vestimenta fields */}
      {formData.activar_vestimenta && (
        <div>
          <h4>Vestimenta</h4>
          <div className="form-group">
            <label>Tipo de Vestimenta</label>
            <textarea
              name="tipo_de_vestimenta"
              className="form-control"
              value={formData.tipo_de_vestimenta || ''}
              onChange={handleChange}
            />
          </div>
          {formData.activar_ingles && (
            <div className="form-group">
              <label>Tipo de Vestimenta Inglés</label>
              <textarea
                name="tipo_de_vestimenta_ingles"
                className="form-control"
                value={formData.tipo_de_vestimenta_ingles || ''}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
