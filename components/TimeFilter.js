import { useState, useEffect } from 'react';

export default function TimeFilter() {
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const hours = [...Array(24).keys()];

    const handleSelect = (event) => {
        let idElement = event.target.id;
        let timeValue = event.target.value;
        if(idElement == 'start') {
            setStartTime(timeValue);
        } else if(idElement == 'end') {
            setEndTime(timeValue);
        } 
    };

    return (
        <div>
            <label htmlFor='start-time'> Select a start time:</label>
            <div className="hour-list">
                <select id='start' value={startTime} onChange={handleSelect}>
                    <option value="">Select an hour</option>
                    {hours.map((hour) => (
                        <option key={hour} value={hour}>{`${hour.toString().padStart(2, '0')}:00`}</option>
                    ))}
                </select>
                {startTime && <p>You have selected {`${startTime.toString().padStart(2, '0')}:00`}.</p>}
            </div>

            <label htmlFor='end-time'> Select an end time:</label>
            <div className="hour-list">
                <select id='end' value={endTime} onChange={handleSelect}>
                    <option value="">Select an hour</option>
                    {hours.map((hour) => (
                        <option key={hour} value={hour}>{`${hour.toString().padStart(2, '0')}:00`}</option>
                    ))}
                </select>
                {endTime && <p>You have selected {`${endTime.toString().padStart(2, '0')}:00`}.</p>}
            </div>
        </div>
        
    );
}