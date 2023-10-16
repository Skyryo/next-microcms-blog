export default function Post({ params }: { params: { id: string } }) {
	return (
		<>
			<div>記事詳細ページ</div>
			<p>選択した記事は{params.id}です</p>
		</>
	)
}
