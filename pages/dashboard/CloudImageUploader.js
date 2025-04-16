import React, { useState } from 'react';

export default function CloudImageUploader({ name, value, onChange, label, alt, folder, coupleId }) {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);
    if (coupleId) {
      formData.append('couple_id', coupleId);
    }
    if (folder) {
      formData.append('folder', folder);
    }
    try {
      const res = await fetch('/api/uploadImage', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.secure_url) {
        onChange({ target: { name, value: data.secure_url } });
      } else {
        alert("Upload failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Upload error.");
    }
    setUploading(false);
  };

  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input type="file" onChange={handleFileChange} disabled={uploading} />
      {uploading && <p>Uploading...</p>}
      {value && (
        <div style={{ marginTop: '10px' }}>
          <img src={value} alt={alt || 'Uploaded Image'} style={{ maxWidth: '200px' }} />
        </div>
      )}
    </div>
  );
}
