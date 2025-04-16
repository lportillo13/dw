import React from 'react';
import CloudImageUploader from './CloudImageUploader';

export default function TitulosYTexto({ formData = {}, handleChange, coupleId }) {
  return (
    <div>
      {/* Buttons */}
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
      {/* Intro Invitación */}
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
        <label>Título Intro Invitación Plural</label>
        <input
          type="text"
          name="titulo_intro_invitacion_plural"
          className="form-control"
          value={formData.titulo_intro_invitacion_plural || ''}
          onChange={handleChange}
        />
      </div>
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
      {/* Evento Titles */}
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
      {/* Fechas de texto */}
      <div className="form-group">
        <label>Fecha de la Boda (Texto)</label>
        <input
          type="text"
          name="fecha_de_la_boda_texto"
          className="form-control"
          value={formData.fecha_de_la_boda_texto || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Fecha de la Boda (Texto) Inglés</label>
        <input
          type="text"
          name="fecha_de_la_boda_texto_ingles"
          className="form-control"
          value={formData.fecha_de_la_boda_texto_ingles || ''}
          onChange={handleChange}
        />
      </div>
      {/* Nombre que aparezca primero */}
      <div className="form-group">
        <label>Nombre que aparezca primero</label>
        <select
          name="nombre_que_aparezca_primero"
          className="form-control"
          value={formData.nombre_que_aparezca_primero || ''}
          onChange={handleChange}
        >
          <option value="">Seleccione...</option>
          <option value="novio">Novio</option>
          <option value="novia">Novia</option>
        </select>
      </div>
      {/* Hero Text */}
      <div className="form-group">
        <label>Texto Hero</label>
        <input
          type="text"
          name="texto_hero"
          className="form-control"
          value={formData.texto_hero || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Texto Hero Inglés</label>
        <input
          type="text"
          name="texto_hero_ingles"
          className="form-control"
          value={formData.texto_hero_ingles || ''}
          onChange={handleChange}
        />
      </div>
      {/* Logo and Media Inicial */}
      <CloudImageUploader
        name="logo_inicial"
        label="Logo"
        value={formData.logo_inicial || ''}
        onChange={handleChange}
        folder="titulosYTexto"
        coupleId={coupleId}
      />
      <div className="form-group">
        <label>Media Inicial</label>
        <select
          name="media_inicial"
          className="form-control"
          value={formData.media_inicial || 'nada'}
          onChange={handleChange}
        >
          <option value="foto">Foto</option>
          <option value="video">Video</option>
          <option value="nada">Nada</option>
        </select>
      </div>
      {formData.media_inicial === 'foto' && (
        <CloudImageUploader
          name="foto_principal"
          label="Foto Principal"
          value={formData.foto_principal || ''}
          onChange={handleChange}
          folder="titulosYTexto"
          coupleId={coupleId}
        />
      )}
      {formData.media_inicial === 'video' && (
        <div className="form-group">
          <label>Video Inicial (URL)</label>
          <input
            type="text"
            name="video_inicial"
            className="form-control"
            value={formData.video_inicial || ''}
            onChange={handleChange}
          />
        </div>
      )}
      <div className="form-group">
        <label>Texto Inicial</label>
        <input
          type="text"
          name="texto_inicial"
          className="form-control"
          value={formData.texto_inicial || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Texto Inicial Inglés</label>
        <input
          type="text"
          name="texto_inicial_ingles"
          className="form-control"
          value={formData.texto_inicial_ingles || ''}
          onChange={handleChange}
        />
      </div>
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
          folder="titulosYTexto"
          coupleId={coupleId}
        />
      )}
      {/* Ceremonia Titles */}
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
          folder="titulosYTexto"
          coupleId={coupleId}
        />
      )}
      {/* Recepcion Titles */}
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
          folder="titulosYTexto"
          coupleId={coupleId}
        />
      )}
      {/* Vestimenta Titles */}
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
          folder="titulosYTexto"
          coupleId={coupleId}
        />
      )}
      {/* Regalos Titles */}
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
          folder="titulosYTexto"
          coupleId={coupleId}
        />
      )}
      {/* Hospedaje Titles */}
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
          folder="titulosYTexto"
          coupleId={coupleId}
        />
      )}
      {/* Confirmacion Titles */}
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
          folder="titulosYTexto"
          coupleId={coupleId}
        />
      )}
    </div>
  );
}
