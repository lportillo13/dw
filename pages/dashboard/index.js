import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { useRouter } from 'next/router';

export default function DashboardPage() {
  const router = useRouter();
  const { id } = router.query;

  const [formData, setFormData] = useState({
    novio1: '',
    novio2: '',
    email: '',
    telefono: '',
    fecha_boda: '',
    lugar_ceremonia: '',
    hora_ceremonia: ''
  });

  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
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
      });

    fetchImages();
  }, [id]);

  const fetchImages = () => {
    fetch(`/api/getImages?couple_id=${id}&folder=gallery`)
      .then(res => res.json())
      .then(data => setImages(data));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);
    formData.append('couple_id', id);
    formData.append('folder', 'gallery');

    const res = await fetch('/api/uploadImage', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      await fetchImages();
    } else {
      alert('Upload failed');
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
      await fetchImages();
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

        <hr className="my-5" />

        <h3>Upload Images (Gallery)</h3>
        <input type="file" className="form-control" onChange={handleUpload} disabled={uploading} />

        <div className="row mt-4">
          {images.map(img => (
            <div key={img.public_id} className="col-md-4 mb-3">
              <img src={img.secure_url} className="img-fluid rounded" alt="" />
              <button className="btn btn-danger btn-sm mt-2" onClick={() => handleDelete(img.public_id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
