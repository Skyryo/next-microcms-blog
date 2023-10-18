import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/app/components/organisms/Header'
import CssBaseline from '@mui/material/CssBaseline'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
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
				{children}
			</body>
		</html>
	)
}
