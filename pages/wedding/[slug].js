// pages/wedding/[slug].js
import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';

export default function WeddingPage({ weddingData }) {
  const router = useRouter();
  const { slug } = router.query;
  
  // For now, using dummy data. Later, fetch actual data from your API.
  const data = weddingData || {
    brideName: "Jane Doe",
    groomName: "John Doe",
    weddingDate: "2026-06-15",
    ceremonyVenue: "Sunset Beach",
    receptionVenue: "Grand Ballroom"
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h1>{data.brideName} & {data.groomName}'s Wedding</h1>
        <p>Date: {data.weddingDate}</p>
        <p>Ceremony: {data.ceremonyVenue}</p>
        <p>Reception: {data.receptionVenue}</p>
        {/* Add additional details and styling as needed */}
      </div>
    </div>
  );
}

// Example function to fetch wedding data based on slug
export async function getServerSideProps(context) {
  const { slug } = context.params;
  
  // Here you can connect to your managed database using your API or utility functions
  // For demonstration, we'll pass dummy data. Replace this with actual data fetching logic.
  const weddingData = {
    brideName: "Jane Doe",
    groomName: "John Doe",
    weddingDate: "2026-06-15",
    ceremonyVenue: "Sunset Beach",
    receptionVenue: "Grand Ballroom"
  };

  return {
    props: { weddingData } // will be passed to the page component as props
  };
}
