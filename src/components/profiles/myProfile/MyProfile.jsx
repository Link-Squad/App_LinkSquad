import React from 'react';
import { useAuthContext } from '../../../contexts/AuthContext';
import AboutMe from '../aboutMe/AboutMe';
import PlayerCardDetails from '../../userCardDetails/UserCardDetails';
import FooterSmall from '../../utilities/footerSmall/FooterSmall';
import './MyProfile.scss';
import UserGamesList from '../userGamesList/UserGamesList';

const MyProfile = () => {
    const {user} = useAuthContext();

    return (
        <div className="MyProfile">
        <aside className="MyProfile__aside">
            <PlayerCardDetails user={user}/>
            <FooterSmall />
        </aside>

            <main className="MyProfile__info content__main">
                <AboutMe user={user}/>
                <UserGamesList user={user}/>
            </main>
        </div>
    )
}

export default MyProfile 