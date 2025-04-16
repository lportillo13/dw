import React from 'react';
import CloudImageUploader from './CloudImageUploader';

export default function TitulosYTexto({ formData = {}, handleChange, coupleId }) {
  return (
    <div>
      <h3>Títulos & Texto</h3>

      {/* Botón Confirmar */}
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

      {/* Botón Confirmar Inglés */}
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

      {/* Título Intro Invitación */}
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

      {/* Título Intro Invitación Plural */}
      <div className="form-group">
        <label>Título Intro Invitación Plural</label>
        <input
          type="text"
          name="titulo_intro_invitacion_plural"
          className="form-control"
          value={formData.titulo_intro_invitacion_plural || ''}
          onChange={handleChange}
        />
      </div>

      {/* Título Intro Invitación Inglés */}
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
            <label>Título Intro Invitación Inglés Plural</label>
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

      {/* Título Evento */}
      <div className="form-group">
        <label>Título Evento</label>
        <input
          type="text"
          name="titulo_evento"
          className="form-control"
          value={formData.titulo_evento || ''}
          onChange={handleChange}
        />
      </div>

      {/* Título Evento Inglés */}
      {formData.activar_ingles && (
        <div className="form-group">
          <label>Título Evento Inglés</label>
          <input
            type="text"
            name="titulo_evento_in"
            className="form-control"
            value={formData.titulo_evento_in || ''}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Icono Evento */}
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
        <CloudImageUploader
          name="icono_evento"
          label="Icono Evento"
          value={formData.icono_evento || ''}
          onChange={handleChange}
          folder="iconos"
          coupleId={coupleId}
        />
      )}

      {/* Ceremonia */}
      <div className="form-group">
        <label>Título Ceremonia</label>
        <input
          type="text"
          name="titulo_ceremonia"
          className="form-control"
          value={formData.titulo_ceremonia || ''}
          onChange={handleChange}
        />
      </div>
      {formData.activar_ingles && (
        <div className="form-group">
          <label>Título Ceremonia Inglés</label>
          <input
            type="text"
            name="titulo_ceremonia_in"
            className="form-control"
            value={formData.titulo_ceremonia_in || ''}
            onChange={handleChange}
          />
        </div>
      )}
      <div className="form-group">
        <label>Activar Icono Ceremonia</label>
        <input
          type="checkbox"
          name="activar_icono_ceremonia"
          checked={Boolean(formData.activar_icono_ceremonia)}
          onChange={handleChange}
        />
      </div>
      {formData.activar_icono_ceremonia && (
        <CloudImageUploader
          name="icono_ceremonia"
          label="Icono Ceremonia"
          value={formData.icono_ceremonia || ''}
          onChange={handleChange}
          folder="iconos"
          coupleId={coupleId}
        />
      )}

      {/* Recepción */}
      <div className="form-group">
        <label>Título Recepción</label>
        <input
          type="text"
          name="titulo_recepcion"
          className="form-control"
          value={formData.titulo_recepcion || ''}
          onChange={handleChange}
        />
      </div>
      {formData.activar_ingles && (
        <div className="form-group">
          <label>Título Recepción Inglés</label>
          <input
            type="text"
            name="titulo_recepcion_in"
            className="form-control"
            value={formData.titulo_recepcion_in || ''}
            onChange={handleChange}
          />
        </div>
      )}
      <div className="form-group">
        <label>Activar Icono Recepción</label>
        <input
          type="checkbox"
          name="activar_icono_recepcion"
          checked={Boolean(formData.activar_icono_recepcion)}
          onChange={handleChange}
        />
      </div>
      {formData.activar_icono_recepcion && (
        <CloudImageUploader
          name="icono_recepcion"
          label="Icono Recepción"
          value={formData.icono_recepcion || ''}
          onChange={handleChange}
          folder="iconos"
          coupleId={coupleId}
        />
      )}

      {/* Vestimenta */}
      <div className="form-group">
        <label>Título Vestimenta</label>
        <input
          type="text"
          name="titulo_vestimenta"
          className="form-control"
          value={formData.titulo_vestimenta || ''}
          onChange={handleChange}
        />
      </div>
      {formData.activar_ingles && (
        <div className="form-group">
          <label>Título Vestimenta Inglés</label>
          <input
            type="text"
            name="titulo_vestimenta_in"
            className="form-control"
            value={formData.titulo_vestimenta_in || ''}
            onChange={handleChange}
          />
        </div>
      )}
      <div className="form-group">
        <label>Activar Icono Vestimenta</label>
        <input
          type="checkbox"
          name="activar_icono_vestimenta"
          checked={Boolean(formData.activar_icono_vestimenta)}
          onChange={handleChange}
        />
      </div>
      {formData.activar_icono_vestimenta && (
        <CloudImageUploader
          name="icono_vestimenta"
          label="Icono Vestimenta"
          value={formData.icono_vestimenta || ''}
          onChange={handleChange}
          folder="iconos"
          coupleId={coupleId}
        />
      )}

      {/* Regalos */}
      <div className="form-group">
        <label>Título Regalos</label>
        <input
          type="text"
          name="titulo_regalos"
          className="form-control"
          value={formData.titulo_regalos || ''}
          onChange={handleChange}
        />
      </div>
      {formData.activar_ingles && (
        <div className="form-group">
          <label>Título Regalos Inglés</label>
          <input
            type="text"
            name="titulo_regalos_in"
            className="form-control"
            value={formData.titulo_regalos_in || ''}
            onChange={handleChange}
          />
        </div>
      )}
      <div className="form-group">
        <label>Activar Icono Regalos</label>
        <input
          type="checkbox"
          name="activar_icono_regalos"
          checked={Boolean(formData.activar_icono_regalos)}
          onChange={handleChange}
        />
      </div>
      {formData.activar_icono_regalos && (
        <CloudImageUploader
          name="icono_regalos"
          label="Icono Regalos"
          value={formData.icono_regalos || ''}
          onChange={handleChange}
          folder="iconos"
          coupleId={coupleId}
        />
      )}

      {/* Hospedaje */}
      <div className="form-group">
        <label>Título Hospedaje</label>
        <input
          type="text"
          name="titulo_hospedaje"
          className="form-control"
          value={formData.titulo_hospedaje || ''}
          onChange={handleChange}
        />
      </div>
      {formData.activar_ingles && (
        <div className="form-group">
          <label>Título Hospedaje Inglés</label>
          <input
            type="text"
            name="titulo_hospedaje_in"
            className="form-control"
            value={formData.titulo_hospedaje_in || ''}
            onChange={handleChange}
          />
        </div>
      )}
      <div className="form-group">
        <label>Activar Icono Hospedaje</label>
        <input
          type="checkbox"
          name="activar_icono_hospedaje"
          checked={Boolean(formData.activar_icono_hospedaje)}
          onChange={handleChange}
        />
      </div>
      {formData.activar_icono_hospedaje && (
        <CloudImageUploader
          name="icono_hospedaje"
          label="Icono Hospedaje"
          value={formData.icono_hospedaje || ''}
          onChange={handleChange}
          folder="iconos"
          coupleId={coupleId}
        />
      )}

      {/* Confirmación */}
      <div className="form-group">
        <label>Título Confirmación</label>
        <input
          type="text"
          name="titulo_confirmacion"
          className="form-control"
          value={formData.titulo_confirmacion || ''}
          onChange={handleChange}
        />
      </div>
      {formData.activar_ingles && (
        <div className="form-group">
          <label>Título Confirmación Inglés</label>
          <input
            type="text"
            name="titulo_confirmacion_in"
            className="form-control"
            value={formData.titulo_confirmacion_in || ''}
            onChange={handleChange}
          />
        </div>
      )}
      <div className="form-group">
        <label>Activar Icono Confirmación</label>
        <input
          type="checkbox"
          name="activar_icono_confirmacion"
          checked={Boolean(formData.activar_icono_confirmacion)}
          onChange={handleChange}
        />
      </div>
      {formData.activar_icono_confirmacion && (
        <CloudImageUploader
          name="icono_confirmacion"
          label="Icono Confirmación"
          value={formData.icono_confirmacion || ''}
          onChange={handleChange}
          folder="iconos"
          coupleId={coupleId}
        />
      )}
    </div>
  );
}
