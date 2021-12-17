import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Pose from './Pose';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poses/:id" element={<Pose />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
