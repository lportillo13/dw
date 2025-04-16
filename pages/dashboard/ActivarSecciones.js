import React from 'react';

export default function ActivarSecciones({ formData = {}, handleChange }) {
  return (
    <div>
      <h3>Activar Secciones</h3>
      <div className="form-group">
        <label>Activar Canción</label>
        <input 
          type="checkbox"
          name="activar_cancion"
          checked={Boolean(formData.activar_cancion)}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Activar Texto Romántico</label>
        <input 
          type="checkbox"
          name="activar_texto_romantico"
          checked={Boolean(formData.activar_texto_romantico)}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Activar Ceremonia</label>
        <input 
          type="checkbox"
          name="activar_ceremonia"
          checked={Boolean(formData.activar_ceremonia)}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Activar Recepción</label>
        <input 
          type="checkbox"
          name="activar_recepcion"
          checked={Boolean(formData.activar_recepcion)}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Activar Vestimenta</label>
        <input 
          type="checkbox"
          name="activar_vestimenta"
          checked={Boolean(formData.activar_vestimenta)}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Activar Regalos</label>
        <input 
          type="checkbox"
          name="activar_regalo"
          checked={Boolean(formData.activar_regalo)}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Activar Hospedaje</label>
        <input 
          type="checkbox"
          name="activar_hospedaje"
          checked={Boolean(formData.activar_hospedaje)}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Activar Info Extra</label>
        <input 
          type="checkbox"
          name="activar_info_extra"
          checked={Boolean(formData.activar_info_extra)}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Activar RSVP</label>
        <input 
          type="checkbox"
          name="activar_rsvp_button"
          checked={Boolean(formData.activar_rsvp_button)}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Activar Confirmación</label>
        <input 
          type="checkbox"
          name="activar_confirmacion"
          checked={Boolean(formData.activar_confirmacion)}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
