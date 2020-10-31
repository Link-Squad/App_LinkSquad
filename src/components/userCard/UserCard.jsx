import React from "react";
import { Link } from "react-router-dom";
import EventCalendar from "./eventCalendar/eventCalendar";
import "./UserCard.scss";

const UserCard = ({ user }) => {
	return (
		<div className="UserCard card">
			<img className="UserCard__avatar" src={user.img} />
			<article className="UserCard__body">
				<div className="UserCard__stats-wrapper">
					<p className="UserCard__stats">
						<span>{user.views}</span> Views
					</p>
					<p className="UserCard__stats">
						<span>{user.friends}</span> Friends
					</p>
					<EventCalendar />
				</div>

				<Link
					to={`/users/${user.id}`}
					className="Button Button--primary Button--fake UserCard__Link"
				>
					View my profile
				</Link>
			</article>
		</div>
	);
};

export default UserCard;
