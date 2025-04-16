import React from 'react';

export default function Galeria({ id, images, handleMultiUpload, uploading, handleDelete }) {
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
                <button
                  className="btn btn-danger btn-sm mt-2"
                  onClick={() => handleDelete(img.public_id)}
                >
                  Delete
                </button>
              </>
            ) : (
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
