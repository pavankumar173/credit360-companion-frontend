import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '10rem', background: '#f5f5f5' }}>
      <h2>Credit360 Companion</h2>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="/simulate">Simulate</Link></li>
        <li><Link to="/tips">Tips</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
}
