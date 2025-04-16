import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { useRouter } from 'next/router';

// SidebarTabs creates a vertical menu based on a list of tab names.
function SidebarTabs({ tabs, activeTab, onTabClick }) {
  return (
    <div style={{ minWidth: '200px', borderRight: '1px solid #ddd', paddingRight: '1rem' }}>
      {tabs.map((tab) => (
        <div key={tab} style={{ marginBottom: '10px' }}>
          <button 
            onClick={() => onTabClick(tab)}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: activeTab === tab ? '#007bff' : '#fff',
              color: activeTab === tab ? '#fff' : '#007bff',
              border: '1px solid #007bff',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {tab}
          </button>
        </div>
      ))}
    </div>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const { id } = router.query;

  // State initialization: include all fields (make sure these match your database schema)
  const [formData, setFormData] = useState({
    // Información de los novios (General)
    tipo_de_paquete: '',
    nombre_del_novio: '',
    nombre_de_la_novia: '',
    correo_electronico: '',
    telefono: '',
    fecha_de_la_boda: '',
    espacios_invitados: '',
    color_titulos: '#000000',
    color_fondo: '#ffffff',
    slug_de_invitacion: '',
    // Invitación
    sobre_invitacion: '',
    sobre_invitacion_atras: '',
    solapa_cerrada: '',
    solapa_abierta: '',
    fondo_sobre: '',
    fondo_invitacion: '',
    // Sitio Web
    titulo_de_la_web_meta_: 'Nos complace invitarle a nuestra boda',
    descripcion_de_la_web: 'Nos complace invitarle a nuestra boda',
    titulo_de_la_web_meta_ingles: 'Nos complace invitarle a nuestra boda',
    descripcion_de_la_web_meta_ingles: 'Nos complace invitarle a nuestra boda',
    // Canción
    youtube_music: '',
    activar_cancion: false,
    // Texto Romántico
    activar_texto_romantico: false,
    fondo_texto_biblico: '',
    texto_romantico: '',
    texto_romantico_ingles: '',
    // Evento & Ubicación
    es_evento: false,
    activar_ingles: false,
    ubicacion_de_la_boda: 'America/Costa_Rica',
    lugar_del_evento: '',
    hora_del_evento: '',
    mapa_del_evento: '',
    // Ceremonia
    activar_ceremonia: false,
    lugar_de_la_ceremonia: '',
    hora_de_la_ceremonia: '',
    mapa_de_la_ceremonia: '',
    // Recepción
    activar_recepcion: false,
    lugar_de_la_recepcion: '',
    hora_de_la_recepcion: '',
    mapa_de_la_recepcion: '',
    // Vestimenta
    activar_vestimenta: false,
    tipo_de_vestimenta: 'Formal',
    tipo_de_vestimenta_ingles: 'Formal',
    activar_icono_vestimenta: false,
    icono_vestimenta: '',
    // Regalos
    activar_regalo: false,
    tipo_de_regalo: '',
    titulo_regalos: '',
    titulo_regalos_in: '',
    activar_icono_regalos: false,
    icono_regalos: '',
    // Hospedaje
    activar_hospedaje: false,
    hospedaje: '',
    hospedaje_ingles: '',
    activar_icono_hospedaje: false,
    icono_hospedaje: '',
    // Info Extra
    activar_info_extra: false,
    info_extra: '',
    info_extra_ingles: '',
    // Galería
    fotos_galeria: '',
    // RSVP
    activar_rsvp_button: false,
    fecha_de_confirmacion: '',
    fecha_de_confirmacion_ingles: '',
    imagen_rsvp: '',
    // Links
    activar_links_ingles: false,
    texto_cantidad_invitados: '',
    // Confirmación / Extras – always rendered for complete overview
    activar_confirmacion: false,
    titulo_confirmacion: '',
    titulo_confirmacion_in: '',
    boton_confirmar: '',
    boton_confirmar_in: '',
    titulo_intro_invitacion: '',
    titulo_intro_invitacion_plural: '',
    titulo_intro_invitacion_in: '',
    titulo_intro_invitacion_in_plural: '',
    titulo_evento: '',
    titulo_evento_in: '',
    activar_icono_evento: false,
    icono_evento: '',
    adultos_texto: '',
    adultos_texto_ingles: '',
  });
  
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  // Define a configuration for the tabs.
  // The condition function for each tab decides whether its activation flag is true (or always visible).
  const tabsConfig = [
    { name: 'Información General', condition: (data) => true },
    { name: 'Invitación', condition: (data) => true },
    { name: 'Sitio Web', condition: (data) => true },
    { name: 'Canción', condition: (data) => data.activar_cancion },
    { name: 'Texto Romántico', condition: (data) => data.activar_texto_romantico },
    { name: 'Evento & Ubicación', condition: (data) => true },
    { name: 'Ceremonia', condition: (data) => data.activar_ceremonia },
    { name: 'Recepción', condition: (data) => data.activar_recepcion },
    { name: 'Vestimenta', condition: (data) => data.activar_vestimenta },
    { name: 'Regalos', condition: (data) => data.activar_regalo },
    { name: 'Hospedaje', condition: (data) => data.activar_hospedaje },
    { name: 'Info Extra', condition: (data) => data.activar_info_extra },
    { name: 'Galería', condition: (data) => true },
    { name: 'RSVP', condition: (data) => data.activar_rsvp_button },
    { name: 'Links', condition: (data) => true },
    { name: 'Confirmación', condition: (data) => data.activar_confirmacion },
  ];

  // Calculate which tabs to show based on the current formData.
  const visibleTabs = tabsConfig.filter(tab => tab.condition(formData)).map(tab => tab.name);

  // Ensure the active tab is valid among the visible ones.
  useEffect(() => {
    if (visibleTabs.length && !visibleTabs.includes(activeTab)) {
      setActiveTab(visibleTabs[0]);
    }
  }, [visibleTabs, formData, activeTab]);

  // Fetch data when the couple ID is available.
  useEffect(() => {
    if (!id) return;
    fetch(`/api/getCoupleDetails?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setFormData((prev) => ({ ...prev, ...data }));
        } else {
          alert(data.error);
        }
        setLoading(false);
      });
    fetchImages();
  }, [id]);

  const fetchImages = () => {
    fetch(`/api/getImages?couple_id=${id}&folder=gallery`)
      .then((res) => res.json())
      .then((data) => setImages(data));
  };

  // Generic change handler for fields.
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/updateCouple', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...formData }),
    });
    const result = await res.json();
    if (result.error) {
      alert('Error updating data: ' + result.error);
    } else {
      alert('Data updated successfully!');
    }
  };

  // Multi-file upload for the Galería section with progress display.
  const handleMultiUpload = async (files) => {
    const uploads = Array.from(files);
    const progressData = uploads.map((f) => ({ name: f.name, progress: 0 }));
    setImages((prev) => [...prev, ...progressData]);
    setUploading(true);
    for (let file of uploads) {
      const formDataUpload = new FormData();
      formDataUpload.append('image', file);
      formDataUpload.append('couple_id', id);
      formDataUpload.append('folder', 'gallery');
      await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/uploadImage');
        xhr.upload.addEventListener('progress', (event) => {
          if (event.lengthComputable) {
            const percent = Math.round((event.loaded / event.total) * 100);
            setImages((prev) =>
              prev.map((img) =>
                img.name === file.name ? { ...img, progress: percent } : img
              )
            );
          }
        });
        xhr.onload = () => {
          if (xhr.status === 200) {
            fetchImages();
            resolve();
          } else {
            reject();
          }
        };
        xhr.onerror = () => reject();
        xhr.send(formDataUpload);
      });
    }
    setUploading(false);
  };

  const handleDelete = async (public_id) => {
    const res = await fetch('/api/deleteImage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ public_id }),
    });
    if (res.ok) {
      fetchImages();
    } else {
      alert('Delete failed');
    }
  };

  if (loading) {
    return (
      <div>
        <Header />
        <div className="container mt-5"><p>Loading...</p></div>
      </div>
    );
  }

  // Render the main content for each tab.
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Información General':
        return (
          <div>
            <div className="form-group">
              <label>Tipo de Paquete</label>
              <select name="tipo_de_paquete" className="form-control" value={formData.tipo_de_paquete} onChange={handleChange}>
                <option value="">Seleccione...</option>
                <option value="Oro">Oro</option>
                <option value="Plata">Plata</option>
              </select>
            </div>
            <div className="form-group">
              <label>Nombre del Novio</label>
              <input type="text" name="nombre_del_novio" className="form-control" value={formData.nombre_del_novio} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Nombre de la Novia</label>
              <input type="text" name="nombre_de_la_novia" className="form-control" value={formData.nombre_de_la_novia} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input type="email" name="correo_electronico" className="form-control" value={formData.correo_electronico} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Teléfono</label>
              <input type="text" name="telefono" className="form-control" value={formData.telefono} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Fecha de la Boda</label>
              <input type="date" name="fecha_de_la_boda" className="form-control" value={formData.fecha_de_la_boda} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Espacios Invitados</label>
              <input type="number" name="espacios_invitados" className="form-control" value={formData.espacios_invitados || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Color Títulos</label>
              <input type="color" name="color_titulos" className="form-control" value={formData.color_titulos} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Color Fondo</label>
              <input type="color" name="color_fondo" className="form-control" value={formData.color_fondo} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Slug de Invitación</label>
              <input type="text" name="slug_de_invitacion" className="form-control" value={formData.slug_de_invitacion} onChange={handleChange} />
            </div>
          </div>
        );
      case 'Invitación':
        return (
          <div>
            <div className="form-group">
              <label>Sobre Invitación Frente (URL de imagen)</label>
              <input type="text" name="sobre_invitacion" className="form-control" value={formData.sobre_invitacion} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Sobre Invitación Atrás (URL de imagen)</label>
              <input type="text" name="sobre_invitacion_atras" className="form-control" value={formData.sobre_invitacion_atras} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Solapa Cerrada (URL de imagen)</label>
              <input type="text" name="solapa_cerrada" className="form-control" value={formData.solapa_cerrada} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Solapa Abierta (URL de imagen)</label>
              <input type="text" name="solapa_abierta" className="form-control" value={formData.solapa_abierta} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Fondo Sobre (URL de imagen)</label>
              <input type="text" name="fondo_sobre" className="form-control" value={formData.fondo_sobre} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Fondo Invitación (URL de imagen)</label>
              <input type="text" name="fondo_invitacion" className="form-control" value={formData.fondo_invitacion} onChange={handleChange} />
            </div>
          </div>
        );
      case 'Sitio Web':
        return (
          <div>
            <div className="form-group">
              <label>Título de la web (META)</label>
              <input type="text" name="titulo_de_la_web_meta_" className="form-control" value={formData.titulo_de_la_web_meta_} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Descripción de la web (META)</label>
              <input type="text" name="descripcion_de_la_web" className="form-control" value={formData.descripcion_de_la_web} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Título de la web (META) Inglés</label>
              <input type="text" name="titulo_de_la_web_meta_ingles" className="form-control" value={formData.titulo_de_la_web_meta_ingles} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Descripción de la web (META) Inglés</label>
              <input type="text" name="descripcion_de_la_web_meta_ingles" className="form-control" value={formData.descripcion_de_la_web_meta_ingles} onChange={handleChange} />
            </div>
          </div>
        );
      case 'Canción':
        return (
          <div>
            <div className="form-group">
              <label>YouTube Music URL</label>
              <input type="text" name="youtube_music" className="form-control" value={formData.youtube_music} onChange={handleChange} placeholder="https://www.youtube.com/watch?v=xxxxx" />
            </div>
            <div className="form-group">
              <label>Activar Canción</label>
              <input type="checkbox" name="activar_cancion" checked={formData.activar_cancion} onChange={handleChange} />
            </div>
          </div>
        );
      case 'Texto Romántico':
        return (
          <div>
            <div className="form-group">
              <label>Activar Texto Romántico</label>
              <input type="checkbox" name="activar_texto_romantico" checked={formData.activar_texto_romantico} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Fondo Texto Romántico (URL de imagen)</label>
              <input type="text" name="fondo_texto_biblico" className="form-control" value={formData.fondo_texto_biblico} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Texto Romántico</label>
              <textarea name="texto_romantico" className="form-control" value={formData.texto_romantico || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Texto Romántico Inglés</label>
              <textarea name="texto_romantico_ingles" className="form-control" value={formData.texto_romantico_ingles || ''} onChange={handleChange} />
            </div>
          </div>
        );
      case 'Evento & Ubicación':
        return (
          <div>
            <div className="form-group">
              <label>Es Evento</label>
              <input type="checkbox" name="es_evento" checked={formData.es_evento} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Activar Inglés</label>
              <input type="checkbox" name="activar_ingles" checked={formData.activar_ingles} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Ubicación de la Boda</label>
              <input type="text" name="ubicacion_de_la_boda" className="form-control" value={formData.ubicacion_de_la_boda} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Lugar del Evento</label>
              <input type="text" name="lugar_del_evento" className="form-control" value={formData.lugar_del_evento} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Hora del Evento</label>
              <input type="time" name="hora_del_evento" className="form-control" value={formData.hora_del_evento} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Mapa del Evento (URL)</label>
              <input type="text" name="mapa_del_evento" className="form-control" value={formData.mapa_del_evento} onChange={handleChange} />
            </div>
          </div>
        );
      case 'Ceremonia':
        return (
          <div>
            <div className="form-group">
              <label>Lugar de la Ceremonia</label>
              <input type="text" name="lugar_de_la_ceremonia" className="form-control" value={formData.lugar_de_la_ceremonia} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Hora de la Ceremonia</label>
              <input type="time" name="hora_de_la_ceremonia" className="form-control" value={formData.hora_de_la_ceremonia} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Mapa de la Ceremonia (URL)</label>
              <input type="text" name="mapa_de_la_ceremonia" className="form-control" value={formData.mapa_de_la_ceremonia} onChange={handleChange} />
            </div>
          </div>
        );
      case 'Recepción':
        return (
          <div>
            <div className="form-group">
              <label>Lugar de la Recepción</label>
              <input type="text" name="lugar_de_la_recepcion" className="form-control" value={formData.lugar_de_la_recepcion} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Hora de la Recepción</label>
              <input type="time" name="hora_de_la_recepcion" className="form-control" value={formData.hora_de_la_recepcion} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Mapa de la Recepción (URL)</label>
              <input type="text" name="mapa_de_la_recepcion" className="form-control" value={formData.mapa_de_la_recepcion} onChange={handleChange} />
            </div>
          </div>
        );
      case 'Vestimenta':
        return (
          <div>
            <div className="form-group">
              <label>Tipo de Vestimenta</label>
              <textarea name="tipo_de_vestimenta" className="form-control" value={formData.tipo_de_vestimenta || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Tipo de Vestimenta Inglés</label>
              <textarea name="tipo_de_vestimenta_ingles" className="form-control" value={formData.tipo_de_vestimenta_ingles || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Activar Icono Vestimenta</label>
              <input type="checkbox" name="activar_icono_vestimenta" checked={formData.activar_icono_vestimenta} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Icono Vestimenta (URL)</label>
              <input type="text" name="icono_vestimenta" className="form-control" value={formData.icono_vestimenta} onChange={handleChange} />
            </div>
          </div>
        );
      case 'Regalos':
        return (
          <div>
            <div className="form-group">
              <label>Tipo de Regalo (HTML)</label>
              <textarea name="tipo_de_regalo" className="form-control" value={formData.tipo_de_regalo || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Título Regalos</label>
              <input type="text" name="titulo_regalos" className="form-control" value={formData.titulo_regalos} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Título Regalos Inglés</label>
              <input type="text" name="titulo_regalos_in" className="form-control" value={formData.titulo_regalos_in} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Activar Icono Regalos</label>
              <input type="checkbox" name="activar_icono_regalos" checked={formData.activar_icono_regalos} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Icono Regalos (URL)</label>
              <input type="text" name="icono_regalos" className="form-control" value={formData.icono_regalos} onChange={handleChange} />
            </div>
          </div>
        );
      case 'Hospedaje':
        return (
          <div>
            <div className="form-group">
              <label>Hospedaje</label>
              <textarea name="hospedaje" className="form-control" value={formData.hospedaje || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Hospedaje Inglés</label>
              <textarea name="hospedaje_ingles" className="form-control" value={formData.hospedaje_ingles || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Activar Icono Hospedaje</label>
              <input type="checkbox" name="activar_icono_hospedaje" checked={formData.activar_icono_hospedaje} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Icono Hospedaje (URL)</label>
              <input type="text" name="icono_hospedaje" className="form-control" value={formData.icono_hospedaje} onChange={handleChange} />
            </div>
          </div>
        );
      case 'Info Extra':
        return (
          <div>
            <div className="form-group">
              <label>Info Extra</label>
              <textarea name="info_extra" className="form-control" value={formData.info_extra || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Info Extra Inglés</label>
              <textarea name="info_extra_ingles" className="form-control" value={formData.info_extra_ingles || ''} onChange={handleChange} />
            </div>
          </div>
        );
      case 'Galería':
        return (
          <div>
            <h4>Upload Images (Gallery)</h4>
            <input
              type="file"
              className="form-control"
              multiple
              onChange={(e) => handleMultiUpload(e.target.files)}
              disabled={uploading}
            />
            <div className="row mt-4">
              {images.map((img) => (
                <div key={img.public_id || img.name} className="col-md-4 mb-4">
                  {img.secure_url ? (
                    <>
                      <img src={img.secure_url} className="img-fluid rounded" alt="" />
                      <button className="btn btn-danger btn-sm mt-2" onClick={() => handleDelete(img.public_id)}>
                        Delete
                      </button>
                    </>
                  ) : (
                    <div className="border rounded p-3 bg-light text-center">
                      <p>{img.name}</p>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: `${img.progress}%` }}>
                          {img.progress}%
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case 'RSVP':
        return (
          <div>
            <div className="form-group">
              <label>Fecha de Confirmación</label>
              <input type="date" name="fecha_de_confirmacion" className="form-control" value={formData.fecha_de_confirmacion} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Fecha de Confirmación Inglés</label>
              <input type="date" name="fecha_de_confirmacion_ingles" className="form-control" value={formData.fecha_de_confirmacion_ingles} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Imagen RSVP (URL)</label>
              <input type="text" name="imagen_rsvp" className="form-control" value={formData.imagen_rsvp} onChange={handleChange} />
            </div>
          </div>
        );
      case 'Links':
        return (
          <div>
            <div className="form-group">
              <label>Activar Links Inglés</label>
              <input type="checkbox" name="activar_links_ingles" checked={formData.activar_links_ingles} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Texto Cantidad de Invitados</label>
              <input type="text" name="texto_cantidad_invitados" className="form-control" value={formData.texto_cantidad_invitados} onChange={handleChange} />
            </div>
          </div>
        );
      case 'Confirmación':
        return (
          <div>
            <div className="form-group">
              <label>Título Confirmación</label>
              <input type="text" name="titulo_confirmacion" className="form-control" value={formData.titulo_confirmacion} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Título Confirmación Inglés</label>
              <input type="text" name="titulo_confirmacion_in" className="form-control" value={formData.titulo_confirmacion_in} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Activar Icono Confirmación</label>
              <input type="checkbox" name="activar_icono_confirmacion" checked={formData.activar_icono_confirmacion} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Icono Confirmación (URL)</label>
              <input type="text" name="icono_confirmacion" className="form-control" value={formData.icono_confirmacion} onChange={handleChange} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <SidebarTabs tabs={visibleTabs} activeTab={activeTab} onTabClick={setActiveTab} />
        <div style={{ flex: 1, paddingLeft: '1rem' }}>
          <h1>Couple's Dashboard</h1>
          <form onSubmit={handleSubmit}>
            {renderTabContent()}
            <button type="submit" className="btn btn-primary mt-3">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
}
