import './battery.css'

const Battery = () => {

    let data = {
        "_id": "6547038db00d3721132b1fd5",
        "voltage": 320,
        "current": 80,
        "temperature": 92,
        "charging": true,
        "chargingSpeed": 40,
        "dischargingSpeed": 0,
        "batteryHealth": 68,
        "systemWarnings": ["Battery is overheating", "Battery is low"],
        "time": 1699154986028
    }

    function goBack() {
            window.location.href = `${window.location.origin}/Home`
    }

    return (<>
        <main data="red">
            <div className='title'>Battery</div>
            <div className='back' onClick={goBack}>
                <i className='fa fa-arrow-left'></i>
            </div>
            <div id="graph"></div>
            <div id="content">
                <div className='item green'>
                    <p>Voltage:</p>
                    <h4>{data.voltage} V</h4>
                </div>
                <div className='item red'>
                    <p>Temperature:</p>
                    <h4>{data.temperature} °F</h4>
                </div>
                <div className='item green'>
                    <p>Current:</p>
                    <h4>{data.current} A</h4>
                </div>
                <div className='item'>
                    <p>Charging:</p>
                    <h4>{data.charging ? 'Yes' : 'No'}</h4>
                </div>
                <div className='item green'>
                    <p>Charging Speed:</p>
                    <h4>{data.chargingSpeed} kW</h4>
                </div>
                <div className='item green'>
                    <p>Discharging Speed:</p>
                    <h4>{data.dischargingSpeed} kW</h4>
                </div>
                <div className='item red'>
                    <p>Battery Health:</p>
                    <h4>{data.batteryHealth} %</h4>
                </div>
                <div className='item red'>
                    <p>System Warnings:</p>
                    <h4>{data.systemWarnings.length || 'N/A'}</h4>
                </div>
                <div className='item'>
                    <p>Last Polled:</p>
                    <h4>3 mins</h4>
                </div>
            </div>

            <div id='footer'>
                <h2>Suggested Actions</h2>

                <div className='appointment'>
                    <p><b>Schedule Repair</b></p>
                </div>

                <div className='appointment'>
                    <p><b>Contact Dealer</b></p>
                </div>

                <div className='appointment'>
                    <p><b>View Best Pratices</b></p>
                </div>
            </div>
        </main>
    </>)
}

export default Battery; 