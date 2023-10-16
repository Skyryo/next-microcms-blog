import { getPost } from '@/app/libs/microcms'
import parse from 'html-react-parser'

export default async function Post({ params }: { params: { id: string } }) {
	const { title, content } = await fetchPost(params.id)
	return (
		<>
			<h1>タイトル：{title}</h1>
			<div>{parse(content)}</div>
		</>
	)
}

//fetch post data
const fetchPost = async (contentId: string) => {
	const postDetail = await getPost(contentId)
	return postDetail
}
