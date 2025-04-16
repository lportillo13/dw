import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import SidebarTabs from './SidebarTabs';

import InformacionGeneral from './InformacionGeneral';
import ActivarSecciones from './ActivarSecciones';
import Web from './Web';
import Calendario from './Calendario';
import Cancion from './Cancion';
import TextoRomantico from './TextoRomantico';
import Evento from './Evento';
import RSVP from './RSVP';
import Links from './Links';
import TitulosYTexto from './TitulosYTexto';

export default function DashboardPage() {
  const router = useRouter();
  const { id } = router.query;

  const [formData, setFormData] = useState({ /* include all fields (see your ACF defaults) */ });
  const [activeTab, setActiveTab] = useState('');
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  const tabs = [
    'Información General',
    'Activar Secciones',
    'Web',
    'Calendario',
    'Canción',
    'Texto Romantico',
    'Evento',
    'RSVP',
    'Links',
    'Titulos & Texto'
  ];

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
    // Fetch gallery images if needed
  }, [id]);

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

  useEffect(() => {
    if (tabs.length && !tabs.includes(activeTab)) {
      setActiveTab(tabs[0]);
    }
  }, [tabs, activeTab]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Información General':
        return <InformacionGeneral formData={formData} handleChange={handleChange} />;
      case 'Activar Secciones':
        return <ActivarSecciones formData={formData} handleChange={handleChange} />;
      case 'Web':
        return <Web formData={formData} handleChange={handleChange} />;
      case 'Calendario':
        return <Calendario formData={formData} handleChange={handleChange} coupleId={id} />;
      case 'Canción':
        return <Cancion formData={formData} handleChange={handleChange} />;
      case 'Texto Romantico':
        return <TextoRomantico formData={formData} handleChange={handleChange} coupleId={id} />;
      case 'Evento':
        return <Evento formData={formData} handleChange={handleChange} />;
      case 'RSVP':
        return <RSVP formData={formData} handleChange={handleChange} coupleId={id} />;
      case 'Links':
        return <Links formData={formData} handleChange={handleChange} />;
      case 'Titulos & Texto':
        return <TitulosYTexto formData={formData} handleChange={handleChange} coupleId={id} />;
      default:
        return null;
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

  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <SidebarTabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
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
