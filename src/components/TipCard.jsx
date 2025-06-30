import React from 'react';

export default function TipCard({ title = "Sample Tip", description = "This is a sample tip to improve credit health." }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
