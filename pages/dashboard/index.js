import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { useRouter } from 'next/router';

export default function DashboardPage() {
  const router = useRouter();
  const { id } = router.query; // Assuming couple's ID is passed via URL (e.g., /dashboard?id=1)

  const [formData, setFormData] = useState({
    novio1: '',
    novio2: '',
    email: '',
    telefono: '',
    fecha_boda: '',
    lugar_ceremonia: '',
    hora_ceremonia: ''
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/getCoupleDetails?id=${id}`)
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setFormData(data);
        } else {
          alert(data.error);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h1>Couple's Dashboard</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre Novio(a) 1</label>
            <input type="text" name="novio1" className="form-control" value={formData.novio1} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Nombre Novio(a) 2</label>
            <input type="text" name="novio2" className="form-control" value={formData.novio2} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <input type="text" name="telefono" className="form-control" value={formData.telefono} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Fecha de la boda</label>
            <input type="date" name="fecha_boda" className="form-control" value={formData.fecha_boda} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Lugar de ceremonia</label>
            <input type="text" name="lugar_ceremonia" className="form-control" value={formData.lugar_ceremonia} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Hora de ceremonia</label>
            <input type="text" name="hora_ceremonia" className="form-control" value={formData.hora_ceremonia} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Save Changes</button>
        </form>
      </div>
    </div>
  );
}
