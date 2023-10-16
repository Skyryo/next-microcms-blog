import { createClient } from 'microcms-js-sdk'
import type {
	MicroCMSQueries,
	MicroCMSImage,
	MicroCMSDate,
} from 'microcms-js-sdk'

//blog 型定義
export type Blog = {
	id: string
	title: string
	content: string
	eyecatch?: MicroCMSImage
} & MicroCMSDate

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
	throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}
if (!process.env.MICROCMS_API_KEY) {
	throw new Error('MICROCMS_API_KEY is required')
}

// microCMSのSDKを使ってクライアントを作成
export const client = createClient({
	serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
	apiKey: process.env.MICROCMS_API_KEY,
})

//投稿一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
	const listData = await client.getList<Blog>({
		endpoint: 'blogs',
		queries,
	})
	return listData
}

//投稿を取得
export const getPost = async (contentId: string, queries?: MicroCMSQueries) => {
	const detailData = await client.getListDetail<Blog>({
		endpoint: 'blogs',
		contentId,
		queries,
	})
	return detailData
}
