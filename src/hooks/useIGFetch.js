import { useEffect, useState } from "react";
export const useIGFetch = () => {
	const [requestData, setRequestData] = useState(null);
	const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

	useEffect(() => {
		const controller = new AbortController();
		const promises = [
			fetch(
				`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${ACCESS_TOKEN}`,
				{ signal: controller.signal }
			),
			fetch(
				`https://graph.instagram.com/v16.0/me?fields=id,username&access_token=${ACCESS_TOKEN}`,
				{ signal: controller.signal }
			),
		];

		(async () => {
			try {
				const responses = await Promise.all(promises);
				const contentData = await responses[0].json();
				const userData = await responses[1].json();

				setRequestData({ userData, contentData });
			} catch (error) {
				console.error(error);
			}
		})();

		return () => {
			controller.abort();
		};
	}, []);

	return requestData;
};
