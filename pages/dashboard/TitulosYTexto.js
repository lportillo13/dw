// TitulosYTexto.js
import React from 'react';
import CloudImageUploader from './CloudImageUploader';

export default function TitulosYTexto({ formData = {}, handleChange, coupleId }) {
  return (
    <div>
      <h3>Títulos & Texto</h3>
      <div className="form-group">
        <label>Título Intro Invitación</label>
        <input
          type="text"
          name="titulo_intro_invitacion"
          className="form-control"
          value={formData.titulo_intro_invitacion || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Título Intro Invitación (Plural)</label>
        <input
          type="text"
          name="titulo_intro_invitacion_plural"
          className="form-control"
          value={formData.titulo_intro_invitacion_plural || ''}
          onChange={handleChange}
        />
      </div>
      {formData.activar_ingles && (
        <>
          <div className="form-group">
            <label>Título Intro Invitación Inglés</label>
            <input
              type="text"
              name="titulo_intro_invitacion_in"
              className="form-control"
              value={formData.titulo_intro_invitacion_in || ''}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Título Intro Invitación Inglés (Plural)</label>
            <input
              type="text"
              name="titulo_intro_invitacion_in_plural"
              className="form-control"
              value={formData.titulo_intro_invitacion_in_plural || ''}
              onChange={handleChange}
            />
          </div>
        </>
      )}
      {/* Example for an icon upload: */}
      <div className="form-group">
        <label>Activar Icono Evento</label>
        <input
          type="checkbox"
          name="activar_icono_evento"
          checked={Boolean(formData.activar_icono_evento)}
          onChange={handleChange}
        />
      </div>
      {formData.activar_icono_evento && (
        <div className="form-group">
          <label>Icono Evento</label>
          <CloudImageUploader
            name="icono_evento"
            label=""
            value={formData.icono_evento || ''}
            onChange={handleChange}
            folder="icons"
            coupleId={coupleId}
          />
        </div>
      )}
      {/* Additional title/icon fields for Ceremonia, Recepción, Vestimenta, etc. can be added similarly */}
    </div>
  );
}
