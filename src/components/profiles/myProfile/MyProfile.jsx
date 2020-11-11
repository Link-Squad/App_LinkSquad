import React from 'react';
import { useAuthContext } from '../../../contexts/AuthContext';
import AboutMe from '../aboutMe/AboutMe';
import PlayerCardDetails from '../../userCardDetails/UserCardDetails';
import FooterSmall from '../../utilities/footerSmall/FooterSmall';
import './MyProfile.scss';

const MyProfile = () => {
    const {user} = useAuthContext();

    return (
        <div className="MyProfile">
        <aside>
            <PlayerCardDetails user={user}/>
            <FooterSmall />
        </aside>

            <main className="MyProfile__info">
                <AboutMe user={user}/>
                <section className="UserGames card">
                    <p>I'm a game!</p>
                </section>
            </main>
        </div>
    )
}

export default MyProfile 