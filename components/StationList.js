import { useState, useEffect } from 'react';

export default function StationList() {
    const [stations, setStations] = useState([]);

    useEffect(() => {
        const fetchStations = async () => {
          const response = await fetch('https://api-partner.krl.co.id/krlweb/v1/krl-station');
          const data = await response.json();
          setStations(data.data);
        };
        fetchStations();
      }, []);
    
    
    return (  
        <div className="station-list">
        <label htmlFor="station-select">Select a station:</label>
        <select id="station-select">
            <option value="">Select a station</option>
            {stations.map((station, index) => (
            <option key={station.sta_id} value={station.sta_name}>
                {station.sta_name}
            </option>
            ))}
        </select>
        </div>
    );
}