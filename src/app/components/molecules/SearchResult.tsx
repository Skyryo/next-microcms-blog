import { getSearchedContents } from '@/app/libs/microcms'
import Box from '@mui/material/Box'
import Image from 'next/image'
import Link from 'next/link'

type SearchResultProps = {
	searchWord: string
}
export default async function SearchResult(props: SearchResultProps) {
	const { searchWord } = props

	const searchResult = await fetchSearchResult(searchWord)

	return (
		<>
			<p>{searchWord}</p>

			{searchResult.map((post) => (
				<Box
					sx={{
						width: '48%',
					}}
					key={post.id}
				>
					<Link key={post.priority} href={`/posts/${post.id}`}>
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
		</>
	)
}

const fetchSearchResult = async (searchWord: string) => {
	const response = await getSearchedContents({ q: searchWord })
	return response
}
