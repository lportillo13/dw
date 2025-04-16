import React from 'react';

export default function Invitacion({ formData, handleChange }) {
  return (
    <div>
      <div className="form-group">
        <label>Sobre Invitación Frente (URL de imagen)</label>
        <input
          type="text"
          name="sobre_invitacion"
          className="form-control"
          value={formData.sobre_invitacion}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Sobre Invitación Atrás (URL de imagen)</label>
        <input
          type="text"
          name="sobre_invitacion_atras"
          className="form-control"
          value={formData.sobre_invitacion_atras}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Solapa Cerrada (URL de imagen)</label>
        <input
          type="text"
          name="solapa_cerrada"
          className="form-control"
          value={formData.solapa_cerrada}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Solapa Abierta (URL de imagen)</label>
        <input
          type="text"
          name="solapa_abierta"
          className="form-control"
          value={formData.solapa_abierta}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Fondo Sobre (URL de imagen)</label>
        <input
          type="text"
          name="fondo_sobre"
          className="form-control"
          value={formData.fondo_sobre}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Fondo Invitación (URL de imagen)</label>
        <input
          type="text"
          name="fondo_invitacion"
          className="form-control"
          value={formData.fondo_invitacion}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
