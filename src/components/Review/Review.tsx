import Image from 'next/image';
import style from './review.module.scss';
import { Icon } from '@common/Icon/Icon';

interface ReviewProps {
	username: string;
	date: Date;
	userImg: string;
	rating: number;
	content: string;
}

const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const Review = ({ username, date, userImg, rating, content }: ReviewProps) => {
	const postDate = `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
	const stars = new Array(rating).fill(0);

	return (
		<article className={style.Review}>
			<div className={style['Review-head']}>
				<Image
					className={style['Review-pic']}
					src={userImg}
					alt="profile pic"
					width={100}
					height={100}
				/>
				<div className={style['Review-userinfo']}>
					<p className={style['Review-username']}>{username}</p>
					<p className={style['Review-date']}>{postDate}</p>
				</div>
			</div>
			<div className={style['Review-rating']}>
				{stars.map((_, index) => (
					<Icon key={index} name="star" />
				))}
			</div>
			<p className={style['Review-content']}>{content}</p>
		</article>
	);
};
