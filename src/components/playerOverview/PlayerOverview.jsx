import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import "./PlayerOverview.scss";

const PlayerOverview = ({ player }) => {
	return (
		<div className="PlayerOverview card">
			<img src={player.img} className="PlayerOverview__avatar" />
			<article className="PlayerOverview__body">
				<p className="title">{player.username}</p>
				<div>
					<Link to={player.social.youtube}>
						<FaYoutube />
					</Link>
				</div>
				<Link
					to={`/user/${player.id}`}
					className="Button Button--primary Button-fake"
				>
					View Profile
				</Link>
			</article>
		</div>
	);
};

export default PlayerOverview;
