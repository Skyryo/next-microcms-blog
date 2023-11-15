import Image from 'next/image'
import Link from 'next/link'
import { cookies } from 'next/headers'

import styles from './page.module.css'
import Box from '@mui/material/Box'
// import Container from '@mui/material/Container'
// import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import { getAllContentIds, getListDetail } from '@/app/libs/microcms'
import type { Blog } from '@/app/libs/microcms'

import SearchInputField from '@/app/components/molecules/SearchInputForm'
import SearchResult from '@/app/components/molecules/SearchResult'

export default async function Home() {
	const priorityContents = await fetchFeaturedContents()
	const { mostPriority, restPriority } = checkPriority(priorityContents)

	const cookieStore = cookies()
	const searchWord = decodeURIComponent(
		cookieStore.get('searchWord')?.value ?? ''
	)

	return (
		<main className={styles.main}>
			<SearchInputField />
			{searchWord ? <SearchResult searchWord={searchWord} /> : ''}
			<Grid container spacing={2}>
				<Grid item xs={12} md={6} key={mostPriority[0].id}>
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
				</Grid>
				{restPriority.map((post) => (
					<Grid item xs={12} md={6} key={post.id}>
						<Link href={`/posts/${post.id}`}>
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
					</Grid>
				))}
			</Grid>
		</main>
	)
}

const fetchFeaturedContents = async () => {
	const featuredIds = await getAllContentIds('priority[exists]')
	const featuredContens = await Promise.all(
		featuredIds.map((id) => {
			return getListDetail(id)
		})
	)

	return featuredContens
}

const checkPriority = (posts: Blog[]) => {
	const mostPriority = posts.filter((post) => post.priority === 1)
	const restPriority = posts.filter((post) => post.priority !== 1)

	return { mostPriority, restPriority }
}
