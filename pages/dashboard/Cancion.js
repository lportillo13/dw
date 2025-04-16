// Cancion.js
import React from 'react';

export default function Cancion({ formData = {}, handleChange }) {
  return (
    <div>
      <h3>Canción</h3>
      <div className="form-group">
        <label>Canción de los novios (File URL or Link)</label>
        <input
          type="text"
          name="cancion_de_los_novios"
          className="form-control"
          value={formData.cancion_de_los_novios || ''}
          onChange={handleChange}
          placeholder="URL to the song file or embed link"
        />
      </div>
    </div>
  );
}
