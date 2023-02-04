import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Popup from './modal';
import './calendar.css';


function MyCalendar({calendar}) {
    const [popup, setPopup] = useState({open: false, callback: false});
    const handleDateClick =  () => {
        setPopup({
                open: true,
                title: "Error",
                message: "Please make sure all fields are filled in correctly."
        });
    }
    return (
        <div className="App">
            <FullCalendar 
              defaultView="dayGridMonth" 
              plugins={[ interactionPlugin, dayGridPlugin ]}
              dateClick={handleDateClick}
            />
            
            <Popup open = {popup.open} setPopup = {setPopup} callback = {popup.callback}/>
        </div>
    );
    
}

export default MyCalendar;