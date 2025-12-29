import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import SingleplayerGamePage from '../pages/SingleplayerGamePage';

export function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="singleplayer" element={<SingleplayerGamePage />} />
      </Routes>
    </div>
  );
}

export default App;
