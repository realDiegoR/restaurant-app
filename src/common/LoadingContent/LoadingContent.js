import './LoadingContent.scss';

export const LoadingContent = () => {
	return (
		<p className="LoadingContent">
			<span style={{ '--delay': '300ms' }}></span>
			<span style={{ '--delay': '600ms' }}></span>
			<span style={{ '--delay': '900ms' }}></span>
		</p>
	);
};
