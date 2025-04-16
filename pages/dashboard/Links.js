// Links.js
import React from 'react';

export default function Links({ formData = {}, handleChange }) {
  return (
    <div>
      <h3>Links & Layout</h3>
      <div className="form-group">
        <label>Texto Cantidad de Invitados (Use {`{cantidad}`} as placeholder)</label>
        <input
          type="text"
          name="texto_cantidad_invitados"
          className="form-control"
          value={formData.texto_cantidad_invitados || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Invitación Posición Vertical</label>
        <input
          type="number"
          name="numerada_bottom"
          className="form-control"
          value={formData.numerada_bottom || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Invitación Posición Horizontal</label>
        <input
          type="number"
          name="numerada_left"
          className="form-control"
          value={formData.numerada_left || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Invitación Tamaño de Letra</label>
        <input
          type="number"
          name="numerada_font_size"
          className="form-control"
          value={formData.numerada_font_size || ''}
          onChange={handleChange}
        />
      </div>
      {formData.activar_links_ingles && (
        <div className="form-group">
          <label>Activar Links Inglés (Toggle Enabled)</label>
          <input
            type="checkbox"
            name="activar_links_ingles"
            checked={Boolean(formData.activar_links_ingles)}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
}
