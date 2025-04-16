import React from 'react';

export default function Cancion({ formData = {}, handleChange }) {
  return (
    <div>
      <div className="form-group">
        <label>Canción de los Novios</label>
        <input
          type="file"
          name="cancion_de_los_novios"
          className="form-control"
          onChange={handleChange}
        />
        {/* You can later process the file upload using your API endpoint */}
      </div>
    </div>
  );
}
