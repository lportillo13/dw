import React from 'react';

export default function Cancion({ formData = {}, handleChange }) {
  return (
    <div>
      <div className="form-group">
        <label>YouTube Music URL</label>
        <input
          type="text"
          name="youtube_music"
          className="form-control"
          value={formData.youtube_music || ''}
          onChange={handleChange}
          placeholder="https://www.youtube.com/watch?v=xxxxx"
        />
      </div>
      <div className="form-group">
        <label>Activar Canción</label>
        <input
          type="checkbox"
          name="activar_cancion"
          checked={Boolean(formData.activar_cancion)}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
