import React from 'react';
import CloudImageUploader from './CloudImageUploader';

export default function InformacionGeneral({ formData = {}, handleChange, coupleId }) {
  return (
    <div>
      {/* Tipo de Paquete */}
      <div className="form-group">
        <label>Tipo de Paquete</label>
        <select
          name="tipo_de_paquete"
          className="form-control"
          value={formData.tipo_de_paquete || ''}
          onChange={handleChange}
        >
          <option value="">Seleccione...</option>
          <option value="Oro">Oro</option>
          <option value="Plata">Plata</option>
        </select>
      </div>

      {/* Nombre del Novio */}
      <div className="form-group">
        <label>Nombre del Novio</label>
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
        <label>Nombre de la Novia</label>
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
        <label>Fecha de la Boda</label>
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
        <label>Espacios Invitados</label>
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
        <label>Color Títulos</label>
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
        <label>Color Fondo</label>
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
        <label>Slug de Invitación</label>
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
        label="Sobre Invitación Frente"
        value={formData.sobre_invitacion || ''}
        onChange={handleChange}
        folder="invitacion"
        coupleId={coupleId}
      />

      {/* Sobre Invitación Atrás */}
      <CloudImageUploader
        name="sobre_invitacion_atras"
        label="Sobre Invitación Atrás"
        value={formData.sobre_invitacion_atras || ''}
        onChange={handleChange}
        folder="invitacion"
        coupleId={coupleId}
      />

      {/* Solapa Cerrada */}
      <CloudImageUploader
        name="solapa_cerrada"
        label="Solapa Cerrada"
        value={formData.solapa_cerrada || ''}
        onChange={handleChange}
        folder="invitacion"
        coupleId={coupleId}
      />

      {/* Solapa Abierta */}
      <CloudImageUploader
        name="solapa_abierta"
        label="Solapa Abierta"
        value={formData.solapa_abierta || ''}
        onChange={handleChange}
        folder="invitacion"
        coupleId={coupleId}
      />

      {/* Fondo Sobre */}
      <CloudImageUploader
        name="fondo_sobre"
        label="Fondo Sobre"
        value={formData.fondo_sobre || ''}
        onChange={handleChange}
        folder="invitacion"
        coupleId={coupleId}
      />

      {/* Fondo Invitación */}
      <CloudImageUploader
        name="fondo_invitacion"
        label="Fondo Invitación"
        value={formData.fondo_invitacion || ''}
        onChange={handleChange}
        folder="invitacion"
        coupleId={coupleId}
      />

      {/* Título de la web (META) */}
      <div className="form-group">
        <label>Título de la web (META)</label>
        <input
          type="text"
          name="titulo_de_la_web_meta_"
          className="form-control"
          value={formData.titulo_de_la_web_meta_ || ''}
          onChange={handleChange}
        />
      </div>

      {/* Descripción de la web (META) */}
      <div className="form-group">
        <label>Descripción de la web (META)</label>
        <input
          type="text"
          name="descripcion_de_la_web"
          className="form-control"
          value={formData.descripcion_de_la_web || ''}
          onChange={handleChange}
        />
      </div>

      {/* Título de la web (META) Inglés */}
      {formData.activar_ingles && (
        <div className="form-group">
          <label>Título de la web (META) Inglés</label>
          <input
            type="text"
            name="titulo_de_la_web_meta_ingles"
            className="form-control"
            value={formData.titulo_de_la_web_meta_ingles || ''}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Descripción de la web (META) Inglés */}
      {formData.activar_ingles && (
        <div className="form-group">
          <label>Descripción de la web (META) Inglés</label>
          <input
            type="text"
            name="descripcion_de_la_web_meta_ingles"
            className="form-control"
            value={formData.descripcion_de_la_web_meta_ingles || ''}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
}
