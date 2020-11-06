import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';
import { logout } from '../../../services/api.service';
import Button from '../button/Button';
import './LogoutLink.scss';

const LogoutLink = () => {
    const authContext = useAuthContext();
    const history = useHistory();

    const handleClick = (e) => {
        logout()  
            .then(() => history.push('/login'))
            .catch(e => console.error(e))
    }

    return <button onClick={handleClick}>Log Out</button>
};

export default LogoutLink;
