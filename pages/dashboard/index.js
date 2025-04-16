import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import SidebarTabs from './SidebarTabs';
// Import section components (create these in separate files)
import InformacionGeneral from './InformacionGeneral';
import Invitacion from './Invitacion';
import SitioWeb from './SitioWeb';
import Cancion from './Cancion';
import TextoRomantico from './TextoRomantico';
import EventoUbicacion from './EventoUbicacion';
import Ceremonia from './Ceremonia';
import Recepcion from './Recepcion';
import Vestimenta from './Vestimenta';
import Regalos from './Regalos';
import Hospedaje from './Hospedaje';
import InfoExtra from './InfoExtra';
import Galeria from './Galeria';
import RSVP from './RSVP';
import Links from './Links';
import Confirmacion from './Confirmacion';

export default function DashboardPage() {
  const router = useRouter();
  const { id } = router.query;

  // State initialization – ensure these keys match your database schema
  const [formData, setFormData] = useState({
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
    sobre_invitacion: '',
    sobre_invitacion_atras: '',
    solapa_cerrada: '',
    solapa_abierta: '',
    fondo_sobre: '',
    fondo_invitacion: '',
    titulo_de_la_web_meta_: 'Nos complace invitarle a nuestra boda',
    descripcion_de_la_web: 'Nos complace invitarle a nuestra boda',
    titulo_de_la_web_meta_ingles: 'Nos complace invitarle a nuestra boda',
    descripcion_de_la_web_meta_ingles: 'Nos complace invitarle a nuestra boda',
    youtube_music: '',
    activar_cancion: false,
    activar_texto_romantico: false,
    fondo_texto_biblico: '',
    texto_romantico: '',
    texto_romantico_ingles: '',
    es_evento: false,
    activar_ingles: false,
    ubicacion_de_la_boda: 'America/Costa_Rica',
    lugar_del_evento: '',
    hora_del_evento: '',
    mapa_del_evento: '',
    activar_ceremonia: false,
    lugar_de_la_ceremonia: '',
    hora_de_la_ceremonia: '',
    mapa_de_la_ceremonia: '',
    activar_recepcion: false,
    lugar_de_la_recepcion: '',
    hora_de_la_recepcion: '',
    mapa_de_la_recepcion: '',
    activar_vestimenta: false,
    tipo_de_vestimenta: 'Formal',
    tipo_de_vestimenta_ingles: 'Formal',
    activar_icono_vestimenta: false,
    icono_vestimenta: '',
    activar_regalo: false,
    tipo_de_regalo: '',
    titulo_regalos: '',
    titulo_regalos_in: '',
    activar_icono_regalos: false,
    icono_regalos: '',
    activar_hospedaje: false,
    hospedaje: '',
    hospedaje_ingles: '',
    activar_icono_hospedaje: false,
    icono_hospedaje: '',
    activar_info_extra: false,
    info_extra: '',
    info_extra_ingles: '',
    fotos_galeria: '',
    activar_rsvp_button: false,
    fecha_de_confirmacion: '',
    fecha_de_confirmacion_ingles: '',
    imagen_rsvp: '',
    activar_links_ingles: false,
    texto_cantidad_invitados: '',
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
    adultos_texto_ingles: ''
  });

  const [activeTab, setActiveTab] = useState('');
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  // Tab configuration based on formData and conditional logic
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
    { name: 'Confirmación', condition: (data) => data.activar_confirmacion }
  ];

  const visibleTabs = tabsConfig.filter(tab => tab.condition(formData)).map(tab => tab.name);

  useEffect(() => {
    if (visibleTabs.length && !visibleTabs.includes(activeTab)) {
      setActiveTab(visibleTabs[0]);
    }
  }, [visibleTabs, activeTab]);

  // Fetch couple details and images when id is available
  useEffect(() => {
    if (!id) return;
    fetch(`/api/getCoupleDetails?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setFormData(prev => ({ ...prev, ...data }));
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/updateCouple', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...formData })
    });
    const result = await res.json();
    if (result.error) {
      alert('Error updating data: ' + result.error);
    } else {
      alert('Data updated successfully!');
    }
  };

  // Use your existing API logic for image uploading and deletion
  const handleMultiUpload = async (files) => {
    const uploads = Array.from(files);
    setUploading(true);
    for (let file of uploads) {
      const formDataUpload = new FormData();
      formDataUpload.append('image', file);
      formDataUpload.append('couple_id', id);
      formDataUpload.append('folder', 'gallery');
      await fetch('/api/uploadImage', {
        method: 'POST',
        body: formDataUpload
      });
    }
    setUploading(false);
    // Refresh images after upload
    fetchImages();
  };

  const handleDelete = async (public_id) => {
    const res = await fetch('/api/deleteImage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ public_id })
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
        <div className="container mt-5">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Helper function to render the content based on the activeTab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Información General':
        return <InformacionGeneral formData={formData} handleChange={handleChange} />;
      case 'Invitación':
        return <Invitacion formData={formData} handleChange={handleChange} />;
      case 'Sitio Web':
        return <SitioWeb formData={formData} handleChange={handleChange} />;
      case 'Canción':
        return <Cancion formData={formData} handleChange={handleChange} />;
      case 'Texto Romántico':
        return <TextoRomantico formData={formData} handleChange={handleChange} />;
      case 'Evento & Ubicación':
        return <EventoUbicacion formData={formData} handleChange={handleChange} />;
      case 'Ceremonia':
        return <Ceremonia formData={formData} handleChange={handleChange} />;
      case 'Recepción':
        return <Recepcion formData={formData} handleChange={handleChange} />;
      case 'Vestimenta':
        return <Vestimenta formData={formData} handleChange={handleChange} />;
      case 'Regalos':
        return <Regalos formData={formData} handleChange={handleChange} />;
      case 'Hospedaje':
        return <Hospedaje formData={formData} handleChange={handleChange} />;
      case 'Info Extra':
        return <InfoExtra formData={formData} handleChange={handleChange} />;
      case 'Galería':
        return (
          <Galeria
            id={id}
            images={images}
            handleMultiUpload={handleMultiUpload}
            uploading={uploading}
            handleDelete={handleDelete}
          />
        );
      case 'RSVP':
        return <RSVP formData={formData} handleChange={handleChange} />;
      case 'Links':
        return <Links formData={formData} handleChange={handleChange} />;
      case 'Confirmación':
        return <Confirmacion formData={formData} handleChange={handleChange} />;
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
            <button type="submit" className="btn btn-primary mt-3">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
asfa