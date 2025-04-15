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

  const handleMultiUpload = async (files) => {
    const uploads = Array.from(files);
    const progressData = uploads.map((f) => ({ name: f.name, progress: 0 }));
    setImages((prev) => [...prev, ...progressData]);
    setUploading(true);

    for (let file of uploads) {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('couple_id', id);
      formData.append('folder', 'gallery');

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
        xhr.send(formData);
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
        <input
          type="file"
          className="form-control"
          multiple
          onChange={(e) => handleMultiUpload(e.target.files)}
          disabled={uploading}
        />

        <div className="row mt-4">
          {images.map(img => (
            <div key={img.public_id || img.name} className="col-md-4 mb-4">
              {img.secure_url ? (
                <>
                  <img src={img.secure_url} className="img-fluid rounded" alt="" />
                  <button className="btn btn-danger btn-sm mt-2" onClick={() => handleDelete(img.public_id)}>Delete</button>
                </>
              ) : (
                <>
                  <div className="border rounded p-3 bg-light text-center">
                    <p>{img.name}</p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${img.progress}%` }}
                      >
                        {img.progress}%
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
