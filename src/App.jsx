import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage.jsx';
import Adminpage from "./pages/Adminpage.jsx";
import './index.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/admin' element={<Adminpage />} />
    </Routes>
  );
}

export default App;
