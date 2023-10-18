import styles from './page.module.css'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

type DummyData = {
	title: string
	description: string
	priority: number
}

const dummyData: DummyData[] = [
	{
		title: 'title01',
		description:
			'description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01',
		priority: 1,
	},
	{
		title: 'title02',
		description:
			'description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01',
		priority: 2,
	},
	{
		title: 'title03',
		description:
			'description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01',
		priority: 3,
	},
	{
		title: 'title04',
		description:
			'description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01',
		priority: 4,
	},
	{
		title: 'title05',
		description:
			'description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01description01',
		priority: 5,
	},
]

const checkPriority = (posts: DummyData[]) => {
	const mostPriority = posts.filter((post) => post.priority === 1)
	const restPriority = posts.filter((post) => post.priority !== 1)

	return { mostPriority, restPriority }
}

export default async function Home() {
	const { mostPriority, restPriority } = checkPriority(dummyData)
	return (
		<main className={styles.main}>
			<Container
				maxWidth='lg'
				sx={{ display: 'flex', justifyContent: 'space-between' }}
			>
				<Box
					sx={{
						width: '48%',
						backgroundColor: 'black',
						color: 'white',
						margin: '0 10',
						overflowWrap: 'break-word',
					}}
				>
					<Typography variant='h3'>
						{mostPriority[0].title}
					</Typography>
					<Typography variant='body1'>
						{mostPriority[0].description}
					</Typography>
				</Box>
				<Box
					sx={{
						width: '48%',
						backgroundColor: 'black',
						color: 'white',
						display: 'flex',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						overflowWrap: 'break-word',
					}}
				>
					{restPriority.map((post) => (
						<Box
							key={post.priority}
							sx={{
								width: '48%',
								backgroundColor: 'yellow',
								color: 'black',
							}}
						>
							<Typography variant='h3'>{post.title}</Typography>
							<Typography variant='body1'>
								{post.description}
							</Typography>
						</Box>
					))}
				</Box>
			</Container>
		</main>
	)
}
