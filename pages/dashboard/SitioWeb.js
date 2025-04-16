import React from 'react';

export default function SitioWeb({ formData, handleChange }) {
  return (
    <div>
      <div className="form-group">
        <label>Título de la web (META)</label>
        <input
          type="text"
          name="titulo_de_la_web_meta_"
          className="form-control"
          value={formData.titulo_de_la_web_meta_}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Descripción de la web (META)</label>
        <input
          type="text"
          name="descripcion_de_la_web"
          className="form-control"
          value={formData.descripcion_de_la_web}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Título de la web (META) Inglés</label>
        <input
          type="text"
          name="titulo_de_la_web_meta_ingles"
          className="form-control"
          value={formData.titulo_de_la_web_meta_ingles}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Descripción de la web (META) Inglés</label>
        <input
          type="text"
          name="descripcion_de_la_web_meta_ingles"
          className="form-control"
          value={formData.descripcion_de_la_web_meta_ingles}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
