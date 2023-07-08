/** @type {import('next').NextConfig} */

const MAPS_API_KEY = process.env.MAPS_API_KEY;
const APP_API_URL = process.env.APP_API_URL;

const nextConfig = {
	reactStrictMode: true,
	env: {
		MAPS_API_KEY,
		APP_API_URL,
	},
};

module.exports = nextConfig;
