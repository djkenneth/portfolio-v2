// module.exports = {
// 	// reactStrictMode: true,
// 	images: {
// 		domains: ["images.ctfassets.net", "images.pexels.com"],
// 	},
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
		dangerouslyAllowSVG: true,
	},
};

module.exports = nextConfig;