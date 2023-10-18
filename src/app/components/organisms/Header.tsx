import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import HideOnScroll from '@/app/components/molecules/HideOnScroll'
import HamburgerMenu from '@/app/components/molecules/HamburgerMenu'
import { theme } from '@/app/theme'
import Link from 'next/link'

const pages = [
	{ title: '記事一覧', href: 'posts' },
	{ title: '地域で探す', href: '' },
	{ title: '講師から探す', href: '' },
]

export default function Header() {
	return (
		<>
			<HideOnScroll>
				<AppBar
					sx={{
						backgroundColor: theme.palette.secondary,
					}}
					position='static'
				>
					<Toolbar>
						<HamburgerMenu pages={pages} />
						<Typography variant='h6' component='div'>
							<Link href={'/'}>OASIS Blog</Link>
						</Typography>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'none', md: 'flex' },
							}}
						>
							{pages.map((page) => (
								<Link key={page.title} href={`/${page.href}`}>
									<Typography sx={{ px: 2 }}>
										{page.title}
									</Typography>
								</Link>
							))}
						</Box>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
		</>
	)
}
