import React from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

// Dynamically import ReactQuill to disable SSR
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function Web({ formData = {}, handleChange }) {
  // Create a helper that simulates an event for the rich text editor
  const handleQuillChange = (value) => {
    // Create a synthetic event to match your handleChange signature
    handleChange({ target: { name: 'texto_inicial', value } });
  };

  return (
    <div>
      {/* Título del Evento */}
      <div className="form-group">
        <label>Título del Evento</label>
        <input
          type="text"
          name="titulo_evento"
          className="form-control"
          value={formData.titulo_evento || ''}
          onChange={handleChange}
        />
      </div>

      {/* Título del Evento Inglés */}
      <div className="form-group">
        <label>Título del Evento Inglés</label>
        <input
          type="text"
          name="titulo_evento_in"
          className="form-control"
          value={formData.titulo_evento_in || ''}
          onChange={handleChange}
        />
      </div>

      {/* Fecha de la Boda texto */}
      <div className="form-group">
        <label>Fecha de la Boda texto</label>
        <input
          type="date"
          name="fecha_de_la_boda_texto"
          className="form-control"
          value={formData.fecha_de_la_boda_texto || ''}
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

      {/* Texto Inicial (Rich Text Editor via ReactQuill) */}
      <div className="form-group">
        <label>Texto Inicial</label>
        <ReactQuill
          theme="snow"
          value={formData.texto_inicial || ''}
          onChange={handleQuillChange}
        />
      </div>
    </div>
  );
}
