import React from 'react';
import dynamic from 'next/dynamic';
import CloudImageUploader from './CloudImageUploader';
import 'react-quill/dist/quill.snow.css';

// Dynamically import ReactQuill so it only loads on the client
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function Calendario({ formData = {}, handleChange, coupleId }) {
  // A helper function to simulate an event structure for the rich text editor.
  const handleQuillChange = (value) => {
    handleChange({ target: { name: 'texto_calendario', value } });
  };

  return (
    <div>
      {/* Foto Calendario */}
      <div className="form-group">
        <label>Foto Calendario</label>
        <CloudImageUploader
          name="foto_calendario"
          label="Foto Calendario"
          value={formData.foto_calendario || ''}
          onChange={handleChange}
          folder="calendario"
          coupleId={coupleId}
        />
      </div>

      {/* Texto Calendario */}
      <div className="form-group">
        <label>Texto Calendario</label>
        <ReactQuill
          theme="snow"
          value={formData.texto_calendario || ''}
          onChange={handleQuillChange}
        />
      </div>
    </div>
  );
}
