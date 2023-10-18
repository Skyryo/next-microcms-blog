'use client'

import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import Link from 'next/link'

type HamburgerMenuProps = {
	pages: {
		title: string
		href: string
	}[]
}

export default function HamburgerMenu(props: HamburgerMenuProps) {
	const { pages } = props
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	)
	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	return (
		<Box
			sx={{
				flexGrow: 1,
				display: { xs: 'flex', md: 'none' },
			}}
		>
			<IconButton
				size='large'
				aria-label='account of current user'
				aria-controls='menu-appbar'
				aria-haspopup='true'
				onClick={handleOpenNavMenu}
				color='inherit'
			>
				<MenuIcon sx={{ color: '#95a5a6' }} />
			</IconButton>
			<Menu
				id='menu-appbar'
				anchorEl={anchorElNav}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				open={Boolean(anchorElNav)}
				onClose={handleCloseNavMenu}
				sx={{
					display: { xs: 'block', md: 'none' },
				}}
			>
				{pages.map((page) => (
					<MenuItem key={page.title} onClick={handleCloseNavMenu}>
						<Link href={`/${page.href}`}>
							<Typography textAlign='center'>
								{page.title}
							</Typography>
						</Link>
					</MenuItem>
				))}
			</Menu>
		</Box>
	)
}
