import React from 'react';
import {FaCalendar} from 'react-icons/fa'
import './eventCalendar.scss';

const EventCalendar = () => {

    return (
        <p className="EventCalendar"><FaCalendar className="EventCalendar__icon"/>View my events calendar</p>
    )
}

export default EventCalendar