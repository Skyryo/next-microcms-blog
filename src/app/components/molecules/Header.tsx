import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'

export default function Header() {
	return (
		<>
			<CssBaseline />
			<AppBar position='sticky'>
				<Toolbar>
					<Typography variant='h6' component='div'>
						OASIS Blog
					</Typography>
				</Toolbar>
			</AppBar>
		</>
	)
}
