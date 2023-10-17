import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/app/components/molecules/Header'

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
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
