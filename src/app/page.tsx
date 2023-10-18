import styles from './page.module.css'
import { getList } from '@/app/libs/microcms'
import Link from 'next/link'
import Image from 'next/image'

export default async function Home() {
	const { contents } = await getList()

	return (
		<main className={styles.main}>
			<h2>記事一覧ページ</h2>
			{contents.map((post) => (
				<Link href={`/posts/${post.id}`}>
					<div key={post.id}>
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
			))}
		</main>
	)
}
