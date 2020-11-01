import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './eventCalendar.scss';

const EventCalendar = ({whose}) => {

    return (
        <p className="EventCalendar"><FontAwesomeIcon icon={faCalendar} className="EventCalendar__icon"/>View {whose} events</p>
    )
}

export default EventCalendar