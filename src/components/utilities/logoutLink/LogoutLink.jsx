import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../../../services/api.service';
import './LogoutLink.scss';

const LogoutLink = () => {
    const history = useHistory();

    const handleClick = (e) => {
        logout()  
            .then(() => history.push('/'))
            .catch(e => console.error(e))
    }

    return <button onClick={handleClick} className="button--fake">Log Out</button>
};

export default LogoutLink;
