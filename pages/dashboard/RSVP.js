import React from 'react';
import CloudImageUploader from './CloudImageUploader';

export default function RSVP({ formData = {}, handleChange, coupleId }) {
  return (
    <div>
      <h3>RSVP</h3>

      {/* Tipo de Regalo (conditional on activar_regalo) */}
      {formData.activar_regalo && (
        <div className="form-group">
          <label>Tipo de Regalo</label>
          <textarea
            name="tipo_de_regalo"
            className="form-control"
            value={formData.tipo_de_regalo || ''}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Tipo de Regalo Inglés (conditional on activar_regalo and activar_ingles) */}
      {formData.activar_regalo && formData.activar_ingles && (
        <div className="form-group">
          <label>Tipo de Regalo Inglés</label>
          <textarea
            name="tipo_de_regalo_ingles"
            className="form-control"
            value={formData.tipo_de_regalo_ingles || ''}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Fecha de confirmación (wysiwyg) */}
      <div className="form-group">
        <label>Fecha de confirmación</label>
        <textarea
          name="fecha_de_confirmacion"
          className="form-control"
          value={formData.fecha_de_confirmacion || ''}
          onChange={handleChange}
        />
      </div>

      {/* Fecha de confirmación Inglés (conditional on activar_ingles) */}
      {formData.activar_ingles && (
        <div className="form-group">
          <label>Fecha de confirmación Inglés</label>
          <textarea
            name="fecha_de_confirmacion_ingles"
            className="form-control"
            value={formData.fecha_de_confirmacion_ingles || ''}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Imagen RSVP (conditional on activar_confirmacion) */}
      {formData.activar_confirmacion && (
        <CloudImageUploader
          name="imagen_rsvp"
          label="Imagen RSVP"
          value={formData.imagen_rsvp || ''}
          onChange={handleChange}
          folder="rsvp"
          coupleId={coupleId}
        />
      )}

      {/* Solo para adultos? */}
      <div className="form-group">
        <label>¿Solo para adultos?</label>
        <input
          type="checkbox"
          name="solo_para_adultos"
          checked={Boolean(formData.solo_para_adultos)}
          onChange={handleChange}
        />
      </div>

      {/* Activar Comida en Formulario */}
      <div className="form-group">
        <label>Activar Comida en Formulario</label>
        <input
          type="checkbox"
          name="activar_comida_en_formulario"
          checked={Boolean(formData.activar_comida_en_formulario)}
          onChange={handleChange}
        />
      </div>

      {/* Adultos Texto (conditional on solo_para_adultos) */}
      {formData.solo_para_adultos && (
        <div className="form-group">
          <label>Adultos Texto</label>
          <textarea
            name="adultos_texto"
            className="form-control"
            value={formData.adultos_texto || ''}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Adultos Texto Inglés (conditional on solo_para_adultos and activar_ingles) */}
      {formData.solo_para_adultos && formData.activar_ingles && (
        <div className="form-group">
          <label>Adultos Texto Inglés</label>
          <textarea
            name="adultos_texto_ingles"
            className="form-control"
            value={formData.adultos_texto_ingles || ''}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
}
