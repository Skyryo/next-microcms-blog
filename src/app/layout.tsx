import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/app/components/organisms/Header'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	manifest: '/manifest.json',

	title: 'microCMS + Next.js + Vercel',
	description: '',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ja'>
			<CssBaseline />
			<body className={inter.className}>
				<Header />
				<Container maxWidth='lg'>{children}</Container>
			</body>
		</html>
	)
}
