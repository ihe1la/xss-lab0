import { Routes, Route, Link } from 'react-router-dom';
import Level0 from './pages/Level0';
import Level1 from './pages/Level1';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <nav className="p-4 border-b border-gray-700">
        <Link to="/level/0" className="mr-4 text-blue-400 hover:underline">Level 0</Link>
        <Link to="/level/1" className="text-blue-400 hover:underline">Level 1</Link>
      </nav>
      <Routes>
        <Route path="/level/0" element={<Level0 />} />
        <Route path="/level/1" element={<Level1 />} />
      </Routes>
    </div>
  );
}
export default App;
