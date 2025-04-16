import React from 'react';

export default function InformacionGeneral({ formData, handleChange }) {
  return (
    <div>
      <div className="form-group">
        <label>Tipo de Paquete</label>
        <select
          name="tipo_de_paquete"
          className="form-control"
          value={formData.tipo_de_paquete}
          onChange={handleChange}
        >
          <option value="">Seleccione...</option>
          <option value="Oro">Oro</option>
          <option value="Plata">Plata</option>
        </select>
      </div>
      <div className="form-group">
        <label>Nombre del Novio</label>
        <input
          type="text"
          name="nombre_del_novio"
          className="form-control"
          value={formData.nombre_del_novio}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Nombre de la Novia</label>
        <input
          type="text"
          name="nombre_de_la_novia"
          className="form-control"
          value={formData.nombre_de_la_novia}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Correo Electrónico</label>
        <input
          type="email"
          name="correo_electronico"
          className="form-control"
          value={formData.correo_electronico}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Teléfono</label>
        <input
          type="text"
          name="telefono"
          className="form-control"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Fecha de la Boda</label>
        <input
          type="date"
          name="fecha_de_la_boda"
          className="form-control"
          value={formData.fecha_de_la_boda}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Espacios Invitados</label>
        <input
          type="number"
          name="espacios_invitados"
          className="form-control"
          value={formData.espacios_invitados || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Color Títulos</label>
        <input
          type="color"
          name="color_titulos"
          className="form-control"
          value={formData.color_titulos}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Color Fondo</label>
        <input
          type="color"
          name="color_fondo"
          className="form-control"
          value={formData.color_fondo}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Slug de Invitación</label>
        <input
          type="text"
          name="slug_de_invitacion"
          className="form-control"
          value={formData.slug_de_invitacion}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
