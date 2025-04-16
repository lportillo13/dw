import React from 'react';

export default function Links({ formData = {}, handleChange }) {
  return (
    <div>
      <div className="form-group">
        <label>Activar Links Inglés</label>
        <input
          type="checkbox"
          name="activar_links_ingles"
          checked={Boolean(formData.activar_links_ingles)}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Texto Cantidad de Invitados</label>
        <input
          type="text"
          name="texto_cantidad_invitados"
          className="form-control"
          value={formData.texto_cantidad_invitados || ''}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
