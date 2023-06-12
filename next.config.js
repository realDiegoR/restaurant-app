/** @type {import('next').NextConfig} */

const MAPS_API_KEY = process.env.MAPS_API_KEY;

const nextConfig = {
	reactStrictMode: true,
	env: {
		MAPS_API_KEY,
	},
};

module.exports = nextConfig;
