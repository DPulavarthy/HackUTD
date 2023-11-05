import './battery.css'
import './hvac.css'

const Hvac = () => {

    let data = {
        "_id": "6547038db00d3721132b1fd5",
        "indoorTemperature": 72,
        "outdoorTemperature": 80,
        "fanSpeed": "high",
        "airflow": 0.5,
        "airQuality": 0.72,
        "energyUsage": 5,
        "systemWarnings": ["Battery is overheating"],
        "time": 1699154986028
    }

    function goBack() {
        window.location.href = `http://localhost:3000/Home`
    }

    return (<>
        <main data="yellow">
            <div className='title'>HVAC</div>
            <div className='back' onClick={goBack}>
                <i className='fa fa-arrow-left'></i>
            </div>
            <div id="graph-h"></div>
            <div id="content">
                <div className='item green'>
                    <p>Indoor Temp:</p>
                    <h4>{data.indoorTemperature} °F</h4>
                </div>
                <div className='item'>
                    <p>Outdoor Temp:</p>
                    <h4>{data.outdoorTemperature} °F</h4>
                </div>
                <div className='item yellow'>
                    <p>Fan Speed:</p>
                    <h4>High</h4>
                </div>
                <div className='item green'>
                    <p>Airflow:</p>
                    <h4>{data.airflow * 100}%</h4>
                </div>
                <div className='item green'>
                    <p>Air Quality:</p>
                    <h4>{data.airQuality * 100}%</h4>
                </div>
                <div className='item green'>
                    <p>Energy Usage:</p>
                    <h4>{data.energyUsage} kW</h4>
                </div>
                <div className='item yellow'>
                    <p>System Warnings:</p>
                    <h4>{data.systemWarnings.length || 'N/A'}</h4>
                </div>
                <div className='item'>
                    <p>Last Polled:</p>
                    <h4>5 mins</h4>
                </div>
            </div>

            <div id='footer'>
                <h2>Suggested Actions</h2>

                <div className='appointment'>
                    <p><b>Schedule Repair</b></p>
                </div>

                <div className='appointment'>
                    <p><b>Order Replacement</b></p>
                </div>

                <div className='appointment'>
                    <p><b>View Best Pratices</b></p>
                </div>
            </div>
        </main>
    </>)
}

export default Hvac; 