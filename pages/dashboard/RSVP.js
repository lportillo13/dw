// RSVP.js
import React from 'react';

export default function RSVP({ formData = {}, handleChange, coupleId }) {
  return (
    <div>
      <h3>RSVP</h3>
      <div className="form-group">
        <label>¿Solo para adultos?</label>
        <input
          type="checkbox"
          name="solo_para_adultos"
          checked={Boolean(formData.solo_para_adultos)}
          onChange={handleChange}
        />
      </div>
      {formData.solo_para_adultos && (
        <>
          <div className="form-group">
            <label>Texto para Adultos (Mensaje)</label>
            <textarea
              name="adultos_texto"
              className="form-control"
              value={formData.adultos_texto || ''}
              onChange={handleChange}
            />
          </div>
          {formData.activar_ingles && (
            <div className="form-group">
              <label>Texto para Adultos (Inglés)</label>
              <textarea
                name="adultos_texto_ingles"
                className="form-control"
                value={formData.adultos_texto_ingles || ''}
                onChange={handleChange}
              />
            </div>
          )}
        </>
      )}
      <div className="form-group">
        <label>Imagen RSVP</label>
        {/* You can use CloudImageUploader here if needed */}
        <input
          type="text"
          name="imagen_rsvp"
          className="form-control"
          value={formData.imagen_rsvp || ''}
          onChange={handleChange}
          placeholder="Image URL for RSVP"
        />
      </div>
      <div className="form-group">
        <label>Botón Confirmar</label>
        <input
          type="text"
          name="boton_confirmar"
          className="form-control"
          value={formData.boton_confirmar || ''}
          onChange={handleChange}
        />
      </div>
      {formData.activar_ingles && (
        <div className="form-group">
          <label>Botón Confirmar Inglés</label>
          <input
            type="text"
            name="boton_confirmar_in"
            className="form-control"
            value={formData.boton_confirmar_in || ''}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
}
