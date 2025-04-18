import React from 'react';
import enCommon from '../../locales/en/common.json';
import esCommon from '../../locales/es/common.json';

export default function ActivarSecciones({
  formData = {},
  handleChange,
  lang
}) {
  const common = lang === 'es' ? esCommon : enCommon;
  const labels = common.sections;

  return (
    <div>
      <h3>{labels.activateSections}</h3>

      <div className="form-group">
        <label>{labels.isEvent}</label>
        <input
          type="checkbox"
          name="es_evento"
          checked={Boolean(formData.es_evento)}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>{labels.activateEnglish}</label>
        <input
          type="checkbox"
          name="activar_ingles"
          checked={Boolean(formData.activar_ingles)}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>{labels.activateHero}</label>
        <input
          type="checkbox"
          name="activar_hero"
          checked={Boolean(formData.activar_hero)}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>{labels.activateSong}</label>
        <input
          type="checkbox"
          name="activar_cancion"
          checked={Boolean(formData.activar_cancion)}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>{labels.activateLogo}</label>
        <input
          type="checkbox"
          name="activar_logo"
          checked={Boolean(formData.activar_logo)}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>{labels.activateCounter}</label>
        <input
          type="checkbox"
          name="activar_contador"
          checked={Boolean(formData.activar_contador)}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>{labels.activateInitialText}</label>
        <input
          type="checkbox"
          name="activar_texto_inicial"
          checked={Boolean(formData.activar_texto_inicial)}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>{labels.activateRomanticText}</label>
        <input
          type="checkbox"
          name="activar_texto_romantico"
          checked={Boolean(formData.activar_texto_romantico)}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>{labels.activateCeremony}</label>
        <input
          type="checkbox"
          name="activar_ceremonia"
          checked={Boolean(formData.activar_ceremonia)}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>{labels.activateReception}</label>
        <input
          type="checkbox"
          name="activar_recepcion"
          checked={Boolean(formData.activar_recepcion)}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>{labels.activateDressCode}</label>
        <input
          type="checkbox"
          name="activar_vestimenta"
          checked={Boolean(formData.activar_vestimenta)}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>{labels.activateGifts}</label>
        <input
          type="checkbox"
          name="activar_regalo"
          checked={Boolean(formData.activar_regalo)}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>{labels.activateAccommodation}</label>
        <input
          type="checkbox"
          name="activar_hospedaje"
          checked={Boolean(formData.activar_hospedaje)}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>{labels.activateExtraInfo}</label>
        <input
          type="checkbox"
          name="activar_info_extra"
          checked={Boolean(formData.activar_info_extra)}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>{labels.activateGallery}</label>
        <input
          type="checkbox"
          name="activar_galeria"
          checked={Boolean(formData.activar_galeria)}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>{labels.activateConfirmation}</label>
        <input
          type="checkbox"
          name="activar_confirmacion"
          checked={Boolean(formData.activar_confirmacion)}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>{labels.activateCalendar}</label>
        <input
          type="checkbox"
          name="activar_calendario"
          checked={Boolean(formData.activar_calendario)}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>{labels.activateHashtag}</label>
        <input
          type="checkbox"
          name="activar_hashtag"
          checked={Boolean(formData.activar_hashtag)}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>{labels.activateRsvpButton}</label>
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
