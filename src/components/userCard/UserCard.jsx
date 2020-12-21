import React from "react";
import { Link } from "react-router-dom";
import EventCalendar from "../utilities/eventCalendar/eventCalendar";
import FriendCount from "../utilities/friendCount/FriendCount";
import "./UserCard.scss";

const UserCard = ({ user }) => {
	return (
		<div className="UserCard card">
			<img className="UserCard__avatar" alt="your user avatar" src={user.avatar} />
			<article className="UserCard__body">
				<div className="UserCard__stats-wrapper">
					<p className="UserCard__stats">
						<span>{user.views}</span> Views
					</p>
					<p className="UserCard__stats">
						<span><FriendCount userId={user.id}/></span> Friends
					</p>
					<EventCalendar whose="my"/>
				</div>

				<Link
					to={'/profile'}
					className="button--fake UserCard__Link"
				>
					View my profile
				</Link>
			</article>
		</div>
	);
};

export default UserCard;
