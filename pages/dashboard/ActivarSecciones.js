import React from 'react';

export default function ActivarSecciones({ formData = {}, handleChange }) {
  return (
    <div>
      <h3>Activar Secciones</h3>
      {/** Es Evento **/}
      <div className="form-group">
        <label>Es Evento</label>
        <input
          type="checkbox"
          name="es_evento"
          checked={Boolean(formData.es_evento)}
          onChange={handleChange}
        />
      </div>

      {/** Activar Inglés **/}
      <div className="form-group">
        <label>Activar Inglés</label>
        <input
          type="checkbox"
          name="activar_ingles"
          checked={Boolean(formData.activar_ingles)}
          onChange={handleChange}
        />
      </div>

      {/** Activar Hero **/}
      <div className="form-group">
        <label>Activar Hero</label>
        <input
          type="checkbox"
          name="activar_hero"
          checked={Boolean(formData.activar_hero)}
          onChange={handleChange}
        />
      </div>

      {/** Activar Canción **/}
      <div className="form-group">
        <label>Activar Canción</label>
        <input
          type="checkbox"
          name="activar_cancion"
          checked={Boolean(formData.activar_cancion)}
          onChange={handleChange}
        />
      </div>

      {/** Activar Logo **/}
      <div className="form-group">
        <label>Activar Logo</label>
        <input
          type="checkbox"
          name="activar_logo"
          checked={Boolean(formData.activar_logo)}
          onChange={handleChange}
        />
      </div>

      {/** Activar Contador **/}
      <div className="form-group">
        <label>Activar Contador</label>
        <input
          type="checkbox"
          name="activar_contador"
          checked={Boolean(formData.activar_contador)}
          onChange={handleChange}
        />
      </div>

      {/** Activar Texto Inicial **/}
      <div className="form-group">
        <label>Activar Texto Inicial</label>
        <input
          type="checkbox"
          name="activar_texto_inicial"
          checked={Boolean(formData.activar_texto_inicial)}
          onChange={handleChange}
        />
      </div>

      {/** Activar Texto Romántico **/}
      <div className="form-group">
        <label>Activar Texto Romántico</label>
        <input
          type="checkbox"
          name="activar_texto_romantico"
          checked={Boolean(formData.activar_texto_romantico)}
          onChange={handleChange}
        />
      </div>

      {/** Activar Ceremonia **/}
      <div className="form-group">
        <label>Activar Ceremonia</label>
        <input
          type="checkbox"
          name="activar_ceremonia"
          checked={Boolean(formData.activar_ceremonia)}
          onChange={handleChange}
        />
      </div>

      {/** Activar Recepción **/}
      <div className="form-group">
        <label>Activar Recepción</label>
        <input
          type="checkbox"
          name="activar_recepcion"
          checked={Boolean(formData.activar_recepcion)}
          onChange={handleChange}
        />
      </div>

      {/** Activar Vestimenta **/}
      <div className="form-group">
        <label>Activar Vestimenta</label>
        <input
          type="checkbox"
          name="activar_vestimenta"
          checked={Boolean(formData.activar_vestimenta)}
          onChange={handleChange}
        />
      </div>

      {/** Activar Regalo **/}
      <div className="form-group">
        <label>Activar Regalo</label>
        <input
          type="checkbox"
          name="activar_regalo"
          checked={Boolean(formData.activar_regalo)}
          onChange={handleChange}
        />
      </div>

      {/** Activar Hospedaje **/}
      <div className="form-group">
        <label>Activar Hospedaje</label>
        <input
          type="checkbox"
          name="activar_hospedaje"
          checked={Boolean(formData.activar_hospedaje)}
          onChange={handleChange}
        />
      </div>

      {/** Activar Info Extra **/}
      <div className="form-group">
        <label>Activar Info Extra</label>
        <input
          type="checkbox"
          name="activar_info_extra"
          checked={Boolean(formData.activar_info_extra)}
          onChange={handleChange}
        />
      </div>

      {/** Activar Galería **/}
      <div className="form-group">
        <label>Activar Galería</label>
        <input
          type="checkbox"
          name="activar_galeria"
          checked={Boolean(formData.activar_galeria)}
          onChange={handleChange}
        />
      </div>

      {/** Activar Confirmación **/}
      <div className="form-group">
        <label>Activar Confirmación</label>
        <input
          type="checkbox"
          name="activar_confirmacion"
          checked={Boolean(formData.activar_confirmacion)}
          onChange={handleChange}
        />
      </div>

      {/** Activar Calendario **/}
      <div className="form-group">
        <label>Activar Calendario</label>
        <input
          type="checkbox"
          name="activar_calendario"
          checked={Boolean(formData.activar_calendario)}
          onChange={handleChange}
        />
      </div>

      {/** Activar Hashtag **/}
      <div className="form-group">
        <label>Activar Hashtag</label>
        <input
          type="checkbox"
          name="activar_hashtag"
          checked={Boolean(formData.activar_hashtag)}
          onChange={handleChange}
        />
      </div>

      {/** Activar RSVP Button **/}
      <div className="form-group">
        <label>Activar RSVP Button</label>
        <input
          type="checkbox"
          name="activar_rsvp_button"
          checked={Boolean(formData.activar_rsvp_button)}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
