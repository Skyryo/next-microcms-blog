import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import { getAllContentIds, getListDetail } from '@/app/libs/microcms'
import type { Blog } from '@/app/libs/microcms'

const checkPriority = (posts: Blog[]) => {
	const mostPriority = posts.filter((post) => post.priority === 1)
	const restPriority = posts.filter((post) => post.priority !== 1)

	return { mostPriority, restPriority }
}

export default async function Home() {
	const priorityContents = await fetchFeaturedContents()
	const { mostPriority, restPriority } = checkPriority(priorityContents)

	return (
		<main className={styles.main}>
			<Container
				maxWidth='lg'
				sx={{ display: 'flex', justifyContent: 'space-between' }}
			>
				<Box
					sx={{
						width: '48%',
						margin: '0 10',
					}}
				>
					<Link href={`/posts/${mostPriority[0].id}`}>
						<Box
							sx={{
								position: 'relative',
								width: '100%',
								height: '300px',
							}}
						>
							{mostPriority[0].eyecatch ? (
								<Image
									src={mostPriority[0].eyecatch.url}
									// width={400}
									// height={200}
									alt={'アイキャッチ画像'}
									priority={true}
									quality={10}
									fill={true}
								/>
							) : (
								<></>
							)}
						</Box>
						<h3>{mostPriority[0].title}</h3>
						<p>{mostPriority[0].publishedAt}</p>
					</Link>
				</Box>
				<Box
					sx={{
						width: '48%',
						display: 'flex',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
					}}
				>
					{restPriority.map((post) => (
						<Box
							sx={{
								width: '48%',
							}}
						>
							<Link
								key={post.priority}
								href={`/posts/${post.id}`}
							>
								<Box
									sx={{
										width: '100%',
										height: '180px',
										position: 'relative',
									}}
								>
									{post.eyecatch ? (
										<Image
											src={post.eyecatch.url}
											// width={100}
											// height={200}
											alt={'アイキャッチ画像'}
											priority={true}
											quality={10}
											fill={true}
										/>
									) : (
										<></>
									)}
								</Box>
								<h3>{post.title}</h3>
								<p>{post.publishedAt}</p>
							</Link>
						</Box>
					))}
				</Box>
			</Container>
		</main>
	)
}

const fetchFeaturedContents = async () => {
	const featuredIds = await getAllContentIds('priority[exists]')
	console.log('featuredIds', featuredIds)

	const featuredContens = await Promise.all(
		featuredIds.map((id) => {
			return getListDetail(id)
		})
	)

	return featuredContens
}
