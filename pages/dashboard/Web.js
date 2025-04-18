import React from 'react';
import CloudImageUploader from './CloudImageUploader';

export default function Web({
  formData = {},
  handleChange,
  handleJsonbChange,
  coupleId,
  lang
}) {
  const idiomas =
    formData.idiomas ||
    Object.keys(formData.titulo_del_evento || { es: '', en: '' });

  return (
    <div>
      <h3>Web Settings</h3>

      {/* Título del Evento (jsonb) */}
      <div className="form-group">
        <label>Título del Evento</label>
        {idiomas.map((code) => (
          <input
            key={`titulo_del_evento_${code}`}
            type="text"
            className="form-control mb-2"
            placeholder={`Título del Evento [${code.toUpperCase()}]`}
            value={formData.titulo_del_evento?.[code] || ''}
            onChange={(e) =>
              handleJsonbChange('titulo_del_evento', e.target.value, code)
            }
          />
        ))}
      </div>

      {/* Fecha de la Boda texto (jsonb) */}
      <div className="form-group">
        <label>Fecha de la Boda texto</label>
        {idiomas.map((code) => (
          <input
            key={`fecha_de_la_boda_texto_${code}`}
            type="text"
            className="form-control mb-2"
            placeholder={`Fecha de la Boda [${code.toUpperCase()}]`}
            value={formData.fecha_de_la_boda_texto?.[code] || ''}
            onChange={(e) =>
              handleJsonbChange(
                'fecha_de_la_boda_texto',
                e.target.value,
                code
              )
            }
          />
        ))}
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

      {/* Texto Hero (jsonb) */}
      <div className="form-group">
        <label>Texto Hero</label>
        {idiomas.map((code) => (
          <input
            key={`texto_hero_${code}`}
            type="text"
            className="form-control mb-2"
            placeholder={`Texto Hero [${code.toUpperCase()}]`}
            value={formData.texto_hero?.[code] || ''}
            onChange={(e) =>
              handleJsonbChange('texto_hero', e.target.value, code)
            }
          />
        ))}
      </div>

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

      {/* Media Inicial */}
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

      {/* Foto Principal */}
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

      {/* Video Inicial */}
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

      {/* Texto Inicial (jsonb) */}
      {formData.activar_texto_inicial && (
        <div className="form-group">
          <label>Texto Inicial</label>
          {idiomas.map((code) => (
            <textarea
              key={`texto_inicial_${code}`}
              className="form-control mb-2"
              placeholder={`Texto Inicial [${code.toUpperCase()}]`}
              value={formData.texto_inicial?.[code] || ''}
              onChange={(e) =>
                handleJsonbChange('texto_inicial', e.target.value, code)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
