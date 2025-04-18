import React from 'react';
import CloudImageUploader from './CloudImageUploader';
import enCommon from '../../locales/en/common.json';
import esCommon from '../../locales/es/common.json';

export default function InformacionGeneral({
  formData = {},
  handleChange,
  handleJsonbChange,
  coupleId,
  lang
}) {
  const common = lang === 'es' ? esCommon : enCommon;
  const labels = common.sections;
  const idiomas =
    formData.idiomas || Object.keys(formData.titulo_de_la_web_meta_ || { es: '', en: '' });

  return (
    <div>
      {/* Tipo de Paquete */}
      <div className="form-group">
        <label>{labels.packageType}</label>
        <select
          name="tipo_de_paquete"
          className="form-control"
          value={formData.tipo_de_paquete || ''}
          onChange={handleChange}
        >
          <option value="">{labels.select}</option>
          <option value="Oro">Oro</option>
          <option value="Plata">Plata</option>
        </select>
      </div>

      {/* Nombre del Novio */}
      <div className="form-group">
        <label>{labels.groomName}</label>
        <input
          type="text"
          name="nombre_del_novio"
          className="form-control"
          value={formData.nombre_del_novio || ''}
          onChange={handleChange}
        />
      </div>

      {/* Nombre de la Novia */}
      <div className="form-group">
        <label>{labels.brideName}</label>
        <input
          type="text"
          name="nombre_de_la_novia"
          className="form-control"
          value={formData.nombre_de_la_novia || ''}
          onChange={handleChange}
        />
      </div>

      {/* Fecha de la Boda */}
      <div className="form-group">
        <label>{labels.weddingDate}</label>
        <input
          type="date"
          name="fecha_de_la_boda"
          className="form-control"
          value={formData.fecha_de_la_boda || ''}
          onChange={handleChange}
        />
      </div>

      {/* Espacios Invitados */}
      <div className="form-group">
        <label>{labels.guestSpaces}</label>
        <input
          type="number"
          name="espacios_invitados"
          className="form-control"
          value={formData.espacios_invitados || ''}
          onChange={handleChange}
        />
      </div>

      {/* Color Títulos */}
      <div className="form-group">
        <label>{labels.titleColor}</label>
        <input
          type="color"
          name="color_titulos"
          className="form-control"
          value={formData.color_titulos || '#000000'}
          onChange={handleChange}
        />
      </div>

      {/* Color Fondo */}
      <div className="form-group">
        <label>{labels.backgroundColor}</label>
        <input
          type="color"
          name="color_fondo"
          className="form-control"
          value={formData.color_fondo || '#ffffff'}
          onChange={handleChange}
        />
      </div>

      {/* Slug de Invitación */}
      <div className="form-group">
        <label>{labels.inviteSlug}</label>
        <input
          type="text"
          name="slug_de_invitacion"
          className="form-control"
          value={formData.slug_de_invitacion || ''}
          onChange={handleChange}
        />
      </div>

      {/* Sobre Invitación Frente */}
      <CloudImageUploader
        name="sobre_invitacion"
        label={labels.inviteFront}
        value={formData.sobre_invitacion || ''}
        onChange={handleChange}
        folder="invitacion"
        coupleId={coupleId}
      />

      {/* Sobre Invitación Atrás */}
      <CloudImageUploader
        name="sobre_invitacion_atras"
        label={labels.inviteBack}
        value={formData.sobre_invitacion_atras || ''}
        onChange={handleChange}
        folder="invitacion"
        coupleId={coupleId}
      />

      {/* Solapa Cerrada */}
      <CloudImageUploader
        name="solapa_cerrada"
        label={labels.closedFlap}
        value={formData.solapa_cerrada || ''}
        onChange={handleChange}
        folder="invitacion"
        coupleId={coupleId}
      />

      {/* Solapa Abierta */}
      <CloudImageUploader
        name="solapa_abierta"
        label={labels.openFlap}
        value={formData.solapa_abierta || ''}
        onChange={handleChange}
        folder="invitacion"
        coupleId={coupleId}
      />

      {/* Fondo Sobre */}
      <CloudImageUploader
        name="fondo_sobre"
        label={labels.envelopeBackground}
        value={formData.fondo_sobre || ''}
        onChange={handleChange}
        folder="invitacion"
        coupleId={coupleId}
      />

      {/* Fondo Invitación */}
      <CloudImageUploader
        name="fondo_invitacion"
        label={labels.inviteBackground}
        value={formData.fondo_invitacion || ''}
        onChange={handleChange}
        folder="invitacion"
        coupleId={coupleId}
      />

      {/* Título de la web (META) - jsonb */}
      <div className="form-group">
        <label>{labels.webTitle}</label>
        {idiomas.map((code) => (
          <input
            key={`titulo_de_la_web_meta_${code}`}
            type="text"
            className="form-control mb-2"
            placeholder={`${labels.webTitle} [${code.toUpperCase()}]`}
            value={formData.titulo_de_la_web_meta_?.[code] || ''}
            onChange={(e) =>
              handleJsonbChange('titulo_de_la_web_meta_', e.target.value, code)
            }
          />
        ))}
      </div>

      {/* Descripción de la web (META) - jsonb */}
      <div className="form-group">
        <label>{labels.webDescription}</label>
        {idiomas.map((code) => (
          <input
            key={`descripcion_de_la_web_${code}`}
            type="text"
            className="form-control mb-2"
            placeholder={`${labels.webDescription} [${code.toUpperCase()}]`}
            value={formData.descripcion_de_la_web?.[code] || ''}
            onChange={(e) =>
              handleJsonbChange('descripcion_de_la_web', e.target.value, code)
            }
          />
        ))}
      </div>
    </div>
  );
}
