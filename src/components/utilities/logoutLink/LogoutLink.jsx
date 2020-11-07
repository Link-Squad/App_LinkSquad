import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';
import { logout } from '../../../services/api.service';
import './LogoutLink.scss';

const LogoutLink = () => {
    const authContext = useAuthContext();
    const history = useHistory();

    const handleClick = (e) => {
        logout()  
            .then(() => history.push('/'))
            .catch(e => console.error(e))
    }

    return <button onClick={handleClick}>Log Out</button>
};

export default LogoutLink;
