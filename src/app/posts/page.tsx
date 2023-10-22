import { getList } from '@/app/libs/microcms'
import Link from 'next/link'
import Image from 'next/image'

export default async function AllPostPage() {
	const contents = await getList({ limit: 100 })

	return (
		<>
			<h2>記事一覧ページ</h2>
			{contents.map((post) => (
				<div key={post.id}>
					<Link href={`/posts/${post.id}`}>
						<div>
							{post.eyecatch ? (
								<Image
									src={post.eyecatch.url}
									width={400}
									height={200}
									alt={'アイキャッチ画像'}
									priority={true}
									quality={10}
								/>
							) : (
								<></>
							)}
							<h3>{post.title}</h3>
							<p>{post.publishedAt}</p>
						</div>
					</Link>
				</div>
			))}
		</>
	)
}
