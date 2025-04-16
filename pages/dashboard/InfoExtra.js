import React from 'react';

export default function InfoExtra({ formData, handleChange }) {
  return (
    <div>
      <div className="form-group">
        <label>Info Extra</label>
        <textarea
          name="info_extra"
          className="form-control"
          value={formData.info_extra || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Info Extra Inglés</label>
        <textarea
          name="info_extra_ingles"
          className="form-control"
          value={formData.info_extra_ingles || ''}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
