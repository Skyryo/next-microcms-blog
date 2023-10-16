import styles from './page.module.css'
import { BLOG_CONTENT } from '@/app/assets/blog-content'
import Link from 'next/link'

type BlogContents = {
	id: string
	title: string
	body: string
	publishedAt: string
}

export default function Home() {
	const blogContents = listBlogContents()

	return (
		<main className={styles.main}>
			<h2>記事一覧ページ</h2>
			{blogContents.map((blogContent) => (
				<Link href={`/posts/${blogContent.id}`}>
					<div key={blogContent.id}>
						<h3>{blogContent.title}</h3>
						<p>{blogContent.publishedAt}</p>
						<p>{blogContent.body}</p>
					</div>
				</Link>
			))}
		</main>
	)
}

const listBlogContents = () => {
	const blogContents: BlogContents[] = BLOG_CONTENT
	return blogContents
}
