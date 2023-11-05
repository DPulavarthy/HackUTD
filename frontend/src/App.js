import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home.js'
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
