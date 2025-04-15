// pages/index.js
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mt-5">
      <h1>Welcome to the Wedding Platform</h1>
      <p>
        Please <Link href="/form"><a>fill out the form</a></Link> to get started.
      </p>
    </div>
  );
}
