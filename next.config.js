/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
	dest: 'public',
})
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.microcms-assets.io',
				port: '',
				pathname: '/**',
			},
		],
	},
}

module.exports = withPWA({
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.microcms-assets.io',
				port: '',
				pathname: '/**',
			},
		],
	},
})
