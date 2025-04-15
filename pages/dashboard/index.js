// pages/dashboard/index.js
import React from 'react';
import Header from '../../components/Header';

export default function DashboardPage() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h1>Couple's Dashboard</h1>
        <p>This is where couples can update their wedding details.</p>
        {/* Future work: Pre-populate forms with data from your database */}
      </div>
    </div>
  );
}
