import React from 'react';
import CloudImageUploader from './CloudImageUploader';

export default function Web({ formData = {}, handleChange, coupleId }) {
  return (
    <div>
      <h3>Web Settings</h3>

      {/* Título del Evento */}
      <div className="form-group">
        <label>Título del Evento</label>
        <input
          type="text"
          name="titulo_del_evento"
          className="form-control"
          value={formData.titulo_del_evento || ''}
          onChange={handleChange}
        />
      </div>

      {/* Título del Evento Inglés (conditional) */}
      {formData.activar_ingles && (
        <div className="form-group">
          <label>Título del Evento Inglés</label>
          <input
            type="text"
            name="titulo_del_evento_ingles"
            className="form-control"
            value={formData.titulo_del_evento_ingles || ''}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Fecha de la Boda texto */}
      <div className="form-group">
        <label>Fecha de la Boda texto</label>
        <input
          type="text"
          name="fecha_de_la_boda_texto"
          className="form-control"
          value={formData.fecha_de_la_boda_texto || ''}
          onChange={handleChange}
        />
      </div>

      {/* Fecha de la Boda texto Inglés (conditional) */}
      {formData.activar_ingles && (
        <div className="form-group">
          <label>Fecha de la Boda texto Inglés</label>
          <input
            type="text"
            name="fecha_de_la_boda_texto_ingles"
            className="form-control"
            value={formData.fecha_de_la_boda_texto_ingles || ''}
            onChange={handleChange}
          />
        </div>
      )}

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

      {/* Texto Hero */}
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

      {/* Texto Hero Inglés (conditional) */}
      {formData.activar_ingles && (
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
      )}

      {/* Logo Inicial (conditional) */}
      {formData.activar_logo && (
        <CloudImageUploader
          name="logo_inicial"
          label="Logo Inicial"
          value={formData.logo_inicial || ''}
          onChange={handleChange}
          folder="logos"
          coupleId={coupleId}
        />
      )}

      {/* Media Inicial (conditional on Hero) */}
      {formData.activar_hero && (
        <div className="form-group">
          <label>Media Inicial</label>
          <select
            name="media_inicial"
            className="form-control"
            value={formData.media_inicial || ''}
            onChange={handleChange}
          >
            <option value="">Seleccione...</option>
            <option value="foto">Foto</option>
            <option value="video">Video</option>
            <option value="nada">Nada</option>
          </select>
        </div>
      )}

      {/* Foto Principal (if media photo) */}
      {formData.activar_hero && formData.media_inicial === 'foto' && (
        <CloudImageUploader
          name="foto_principal"
          label="Foto Principal"
          value={formData.foto_principal || ''}
          onChange={handleChange}
          folder="media_inicial"
          coupleId={coupleId}
        />
      )}

      {/* Video Inicial (if media video) */}
      {formData.activar_hero && formData.media_inicial === 'video' && (
        <div className="form-group">
          <label>Video Inicial (URL)</label>
          <input
            type="text"
            name="video_inicial"
            className="form-control"
            value={formData.video_inicial || ''}
            onChange={handleChange}
            placeholder="https://..."
          />
        </div>
      )}

      {/* Texto Inicial (conditional) */}
      {formData.activar_texto_inicial && (
        <div className="form-group">
          <label>Texto Inicial</label>
          <textarea
            name="texto_inicial"
            className="form-control"
            value={formData.texto_inicial || ''}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Texto Inicial Inglés (conditional) */}
      {formData.activar_texto_inicial && formData.activar_ingles && (
        <div className="form-group">
          <label>Texto Inicial Inglés</label>
          <textarea
            name="texto_inicial_ingles"
            className="form-control"
            value={formData.texto_inicial_ingles || ''}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
}
