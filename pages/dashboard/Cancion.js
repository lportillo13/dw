import React from 'react';

export default function Cancion({ formData = {}, handleChange }) {
  return (
    <div>
      <div className="form-group">
        <label>Canción de los novios (YouTube URL)</label>
        <input
          type="text"
          name="youtube_music"
          className="form-control"
          value={formData.youtube_music || ''}
          onChange={handleChange}
          placeholder="https://www.youtube.com/watch?v=xxxxx"
        />
      </div>
    </div>
  );
}
