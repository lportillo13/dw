import React from 'react';

export default function Evento({ formData = {}, handleChange }) {
  return (
    <div>
      <div className="form-group">
        <label>Es Evento</label>
        <input
          type="checkbox"
          name="es_evento"
          checked={Boolean(formData.es_evento)}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Activar Inglés</label>
        <input
          type="checkbox"
          name="activar_ingles"
          checked={Boolean(formData.activar_ingles)}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Ubicación de la Boda</label>
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
  );
}
