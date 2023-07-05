import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage.jsx';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
    </Routes>
  );
}

export default App;
