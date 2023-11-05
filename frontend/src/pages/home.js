import React from 'react';
import './home.css';
import Header from './components/header.js';
import 'font-awesome/css/font-awesome.min.css';

const Home = () => {
  // Sample data for miles left and max capacity
  const milesLeft = 250; // Replace with actual data
  const maxCapacity = 500; // Replace with actual data

  // Calculate the percentage of miles left
  const percentage = (milesLeft / maxCapacity) * 100;

  let working = false;

  // useEffect for window load.
  window.onload = () => {
    document.querySelectorAll('.tab').forEach(elem => {
      elem.addEventListener('click', (e) => {
        if (working) return;
        working = true;
          const id = e.target.id;
          window.location.href = `${window.location.href}${id}`;
      });
    })
  }

  return (<>
    <div className="home-screen">
      <Header />
      <div className="fuel-info">
        <div className="fuel-icon">
        </div>
        <b>{milesLeft} mi</b>
      </div>
      <div className="percentage-bar">
        <div className="filler" style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="car-image" />
      <div className="container">
        <div className="line"></div>
        <div className="rounded-rectangle">
          {'Suggested Maintenance'}
          <p>&#x1F893;</p>
        </div>
      </div>

      <section>
        <div className='tab red' id='batteryW'>
          <div className='icon' id="battery"></div>
          <div className='content'>Battery</div>
        </div>

        <div className='tab yellow' id='hvacW'>
          <div className='icon' id="hvac"></div>
          <div className='content'>HVAC</div>
        </div>

        <div className='tab' id='airbagW'>
          <div className='icon' id="airbag"></div>
          <div className='content'>Airbag</div>
        </div>

        <div className='tab' id='brakeW'>
          <div className='icon' id="brake"></div>
          <div className='content'>Brakes</div>
        </div>

        <div className='tab' id='coolantW'>
          <div className='icon' id="coolant"></div>
          <div className='content'>Coolant</div>
        </div>

        <div className='tab' id='dashW'>
          <div className='icon' id="dash"></div>
          <div className='content'>Dashboard</div>
        </div>

        <div className='tab' id='lightsW'>
          <div className='icon' id="lights"></div>
          <div className='content'>Headlights</div>
        </div>

        <div className='tab' id='motorW'>
          <div className='icon' id="motor"></div>
          <div className='content'>Motor</div>
        </div>

        <div className='tab' id='steeringW'>
          <div className='icon' id="steering"></div>
          <div className='content'>Steering</div>
        </div>

        <div className='tab' id='transmissionW'>
          <div className='icon' id="transmission"></div>
          <div className='content'>Transmission</div>
        </div>

        <div className='tab' id='wheelW'>
          <div className='icon' id="wheel"></div>
          <div className='content'>Wheel</div>
        </div>

        <div className='tab' id='wiperW'>
          <div className='icon' id="wiper"></div>
          <div className='content'>Wipers</div>
        </div>
      </section>
    </div>
  </>);
};

export default Home;