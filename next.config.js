/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
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

module.exports =
	process.env.NODE_ENV === 'development'
		? nextConfig
		: withPWA({
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
