import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home.js'
import Battery from './pages/battery.js'
import Hvac from './pages/hvac.js'
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/batteryW" element={<Battery />} />
                <Route path="/hvacW" element={<Hvac />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
