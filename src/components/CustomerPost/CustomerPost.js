import { useState } from "react";
import { LoadingContent } from "@components/LoadingContent/LoadingContent";
import "./CustomerPost.scss";

export const CustomerPost = ({ userData = null, contentData = null }) => {
	const post = contentData?.data[1];

	const showData = () => {
		return userData ? true : <LoadingContent />;
	};

	return (
		<section className="CustomerPost">
			<div className="CustomerPost-userInfo">
				<figure className="CustomerPost-profilePic">
					<img
						className={`CustomerPost-profilePicSrc ${
							userData ? "" : "CustomerPost-profilePicSrc--loading"
						}`}
						src={post?.media_url}
						alt="realdiegor profile pic"
					></img>
				</figure>
				<h3 className="CustomerPost-username">
					{userData ? userData?.username : <LoadingContent />}
				</h3>
			</div>
			<img
				src={post?.media_url}
				className={`CustomerPost-image ${
					userData ? "" : "CustomerPost-image--loading"
				}`}
				alt="customer post"
			/>
			<div className="CustomerPost-postInfo">
				{userData ? (
					<>
						<p className="CustomerPost-likes">1,218 likes</p>
						<div>
							<p className="CustomerPost-caption">
								<strong>{userData?.username} </strong>
								{post?.caption}
							</p>
						</div>
						<p className="CustomerPost-timestamp">3 hours ago</p>
					</>
				) : (
					<LoadingContent />
				)}
			</div>
		</section>
	);
};
