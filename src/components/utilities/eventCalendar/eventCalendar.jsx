import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { returnWIPmessage } from '../../../helpers/helpers';
import './eventCalendar.scss';

const EventCalendar = ({whose}) => {

    return (
        <button className="EventCalendar"><FontAwesomeIcon icon={faCalendar} className="EventCalendar__icon" onClick={returnWIPmessage}/>View {whose} events</button>
    )
}

export default EventCalendar