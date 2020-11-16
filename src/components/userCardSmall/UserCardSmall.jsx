import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../utilities/socialLinks/SocialLinks";
import "./UserCardSmall.scss";

const UserCardSmall = ({ user }) => {
	return (
		<div className="UserCardSmall card">
			<img
				src={user.img}
				alt="avatar of the user"
				className="UserCardSmall__avatar"
			/>
			<article className="UserCardSmall__body">
				<h2 className="UserCardSmall__name title">
					{user.username}
				</h2>
				<SocialLinks social={user.social} />
				<Link
					to={`/user/${user.id}`}
					className="UserCardSmall__profile-link button--fake button--primary"
				>
					View Profile
				</Link>
			</article>
		</div>
	);
};

export default UserCardSmall;
