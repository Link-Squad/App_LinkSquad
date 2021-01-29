import React from 'react';
import UnauthNavbar from '../header/navBar/unauthNavbar/UnauthNavbar';
import icon_team from './assets/icon_team.png';
import icon_friends from './assets/icon_friends.png';
import icon_cv from './assets/icon_cv.png';
import offer from './assets/offer.png';
import users_carousel from './assets/users_carousel.png'
import gamers from './assets/img-section5.png'
import './Landing.scss';

const Landing = () => {
	return (
		<div className="Landing">
			<section className="section1 two-col-grid">
				<div className="section1__cta cta">
					<img
						src="/logo.png"
						alt="LinkSquad Logo"
						className="section1__logo"
					/>

					<h1>Become a professional gamer </h1>
					<p>
						Play, enjoy every moment and find the team you always
						dreamed of.
					</p>
					<a href="/auth" className="button--fake">
						Register now
					</a>
				</div>

				<div className="section1__nav">
					<UnauthNavbar />
				</div>
			</section>
			<section className="section2 divider-bg two-col-grid">
				<div className="section2__acronym cta">
					<p>
						<span className="hl">P</span>articipate in games
					</p>
					<p>
						<span className="hl">L</span>ink with other player
					</p>
					<p>
						<span className="hl">A</span>pply to teams
					</p>
					<p>
						<span className="hl">Y</span>ou can be the winner
					</p>
				</div>
				<div className="section2__hexagons">
					<div className="hexagon">
						<img src={icon_team} alt="team icon"></img>
						<p>Create a team</p>
					</div>
					<div className="hexagon">
						<img src={icon_friends} alt="people icon"></img>
						<p>Meet people</p>
					</div>
					<div className="hexagon">
						<img src={icon_cv} alt="cv icon"></img>
						<p>Be a professional</p>
					</div>
				</div>
			</section>
			<section className="section3 divider-bg two-col-grid">
				<div className="section3__cta cta">
					<h2>We know how hard it is to create a new team</h2>
					<h3>Specially finding new members</h3>
					<p>
						This is why we make recruiting new teammates easier for
						you
					</p>
				</div>

					<img
						src={offer}
						alt="team vacancy offer"
						className="section3__offer"
					/>
					<div className="section3__carousel">
						<img
							src="/logos/lol.png"
							alt="league of legends logo"
						/>
						<img src="/logos/dota_alt.png" alt="dota logo" />
						<img src="/logos/overwatch.png" alt="overwatch logo" />
						<img
							src="/logos/counter.png"
							alt="counter strike logo"
						/>
				</div>
			</section>
			<section className="section4 divider-bg">
				<img src={users_carousel} alt="users carousel" className="section4__carousel"/>
				<div className="section4__cta cta">
					<h2>Meet and play</h2>
					<h3>Find other players with similar interests</h3>
					<p>
						Sometimes you and your friends don't share gaming
						preferences and we know how that feels. This is why you
						can start looking here for your ideal gaming buddies
					</p>
				</div>
			</section>

			<section className="section5 two-col-grid">
				<div className="section5__cta">
					<h2>Become a professional</h2>
					<h3>Share your CV y make it easy for recruiters to find you</h3>
					<p>We will guide your process, you only need to take care of playing and doing amazing streams</p>
				</div>

				<img src={gamers}/>
			</section>
		</div>
	);
};

export default Landing;
