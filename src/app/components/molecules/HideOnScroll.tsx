'use client'

import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'

interface Props {
	children: React.ReactElement
}

export default function HideOnScroll(props: Props) {
	const { children } = props
	const trigger = useScrollTrigger()

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	)
}
