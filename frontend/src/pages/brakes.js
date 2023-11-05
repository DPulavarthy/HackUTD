import './battery.css'
import './brakes.css'

const Brakes = () => {

    let data = {
        "_id": "6547019fb00d3721132b1fd3",
        "brakepadThickness": 8,
        "brakeForce": 0.8,
        "brakeTemperature": 73,
        "currentSpeed": 0,
        "brakeFluidLevel": 0.5,
        "systemWarnings": [],
        "time": 1699154986028
    }

    function goBack() {
        window.location.href = `http://localhost:3000/`
    }

    return (<>
        <main data="green">
            <div className='title'>Brakes</div>
            <div className='back' onClick={goBack}>
                <i className='fa fa-arrow-left'></i>
            </div>
            <div id="graph-b"></div>
            <div id="content">
                <div className='item green'>
                    <p>Brake Pad Thickness:</p>
                    <h4>{data.brakepadThickness} mm</h4>
                </div>
                <div className='item green'>
                    <p>Brake Force:</p>
                    <h4>{data.brakeForce} Nm</h4>
                </div>
                <div className='item yellow'>
                    <p>Brake Temperature:</p>
                    <h4>{data.brakeTemperature} °F</h4>
                </div>
                <div className='item green'>
                    <p>Current Speed:</p>
                    <h4>{data.currentSpeed} MPH</h4>
                </div>
                <div className='item green'>
                    <p>Brake Fluid Level:</p>
                    <h4>{data.brakeFluidLevel * 100}%</h4>
                </div>
                <div className='item green'>
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
                    <p><b>View Best Pratices</b></p>
                </div>
            </div>
        </main>
    </>)
}

export default Brakes; 