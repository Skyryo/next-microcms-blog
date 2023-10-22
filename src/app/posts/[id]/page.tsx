import { getListDetail } from '@/app/libs/microcms'
import parse from 'html-react-parser'

export default async function Post({ params }: { params: { id: string } }) {
	try {
		const { title, content } = await getListDetail(params.id)
		return (
			<>
				<h1>タイトル：{title}</h1>
				<div>{parse(content)}</div>
			</>
		)
	} catch (error) {
		throw error
	}
}
