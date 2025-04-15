// pages/admin/index.js
import React from 'react';
import Header from '../../components/Header';

export default function AdminPanel() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h1>Admin Panel</h1>
        <p>Manage uploads, set access links, and view submissions here.</p>
        {/* Future work: Create API calls, charts, and file upload forms */}
      </div>
    </div>
  );
}
