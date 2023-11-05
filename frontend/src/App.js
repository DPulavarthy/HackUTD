import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import Login from './pages/components/Login'
import Logout from './pages/components/Logout'
import Home from './pages/home';
import Battery from './pages/battery'
import Hvac from './pages/hvac'
import Brakes from './pages/brakes'

function App() {  

  return (
          <Router>
              <Routes>
                  <Route path="/Login" element={<Login />} />
                  <Route path="/Home" element={<Home />} />
                  <Route path="/Logout" element={<Logout />} />
                  <Route path="/batteryW" element={<Battery />} />
                  <Route path="/hvacW" element={<Hvac />} />
                  <Route path="/brakesW" element={<Brakes />} />
                  <Route path="/" element={<Login />} />
              </Routes>
          </Router>
  );
}

export default App;
