import SingleplayerGame from '../components/SingleplayerGame';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';

export function App() {
  return (
    <main className="min-h-screen">
      <Routes>
        <Route index element={<Homepage />} />
        <Route
          path="singleplayer"
          element={
            <div className="h-screen relative">
              <SingleplayerGame />
            </div>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
