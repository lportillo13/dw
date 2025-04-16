import React from 'react';

export default function SidebarTabs({ tabs, activeTab, onTabClick }) {
  return (
    <div style={{ minWidth: '200px', borderRight: '1px solid #ddd', paddingRight: '1rem' }}>
      {tabs.map((tab) => (
        <div key={tab} style={{ marginBottom: '10px' }}>
          <button
            onClick={() => onTabClick(tab)}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: activeTab === tab ? '#007bff' : '#fff',
              color: activeTab === tab ? '#fff' : '#007bff',
              border: '1px solid #007bff',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {tab}
          </button>
        </div>
      ))}
    </div>
  );
}
