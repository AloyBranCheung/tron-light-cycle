import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <h2>Tron</h2>
      <Link to="/singleplayer">Practice</Link>
    </div>
  );
}
