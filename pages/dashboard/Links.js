import React from 'react';

export default function Links({ formData = {}, handleChange }) {
  // Only render this section if 'Activar Confirmación' is enabled (source tab conditional logic)
  if (!formData.activar_confirmacion) return null;

  return (
    <div>
      <h3>Links & Layout</h3>

      {/* Activar Links Inglés toggle */}
      <div className="form-group">
        <label>Activar Links Inglés</label>
        <input
          type="checkbox"
          name="activar_links_ingles"
          checked={Boolean(formData.activar_links_ingles)}
          onChange={handleChange}
        />
      </div>

      {/* Texto Cantidad de Invitados */}
      <div className="form-group">
        <label>Texto Cantidad de Invitados (usar {`{cantidad}`})</label>
        <input
          type="text"
          name="texto_cantidad_invitados"
          className="form-control"
          value={formData.texto_cantidad_invitados || ''}
          onChange={handleChange}
        />
      </div>

      {/* Invitación Posición Vertical */}
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

      {/* Invitación Posición Horizontal */}
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

      {/* Invitación Tamaño de Letra */}
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
    </div>
  );
}
