import React from "react";
import PlayerCardLong from "../playerCardLong/PlayerCardLong";
import PlayerCardSmall from "../playerCardSmall/PlayerCardSmall";
import UserCard from "../userCard/UserCard";
import "./Home.scss";
const Home = () => {
	return (
		<main className="Home">
			Home
			<UserCard
				user={{
					username: "josete",
					friends: 58,
					views: 401,
					id: 324234234,
					img: "https://cdn141.picsart.com/275574803034201.jpg"
				}}
			/>
			<PlayerCardLong
				player={{
					username: "bo$$619",
					friends: 58,
					views: 401,
					social: { youtube: "http://www.youtube.com" },
					id: 324234234,
					img:
						"https://www.choiceofgames.com/press-files/screenshots/deathless/ios/iTunesArtwork.png",
          
          games: [
             {
              name: 'Overwatch',
              icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/1200px-Overwatch_circle_logo.svg.png'
            }
          ],

          languages: ['Español']
				}}
			/>
			<PlayerCardSmall
				player={{
					username: "bo$$619",
					friends: 58,
					views: 401,
					social: { youtube: "http://www.youtube.com" },
					id: 324234234,
					img:
						"https://www.choiceofgames.com/press-files/screenshots/deathless/ios/iTunesArtwork.png"
				}}
			/>
		</main>
	);
};

export default Home;
