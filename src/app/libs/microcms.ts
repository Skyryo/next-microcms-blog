import { createClient } from 'microcms-js-sdk'
import type { MicroCMSQueries, MicroCMSDate } from 'microcms-js-sdk'

//blog 型定義
export type Blog = {
	id: string
	title: string
	content: string
	eyecatch: {
		url: string
		height: number
		width: number
	}
	priority: number
} & MicroCMSDate

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
	throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}
if (!process.env.MICROCMS_API_KEY) {
	throw new Error('MICROCMS_API_KEY is required')
}

// microCMSのSDKを使ってクライアントを作成
const client = createClient({
	serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
	apiKey: process.env.MICROCMS_API_KEY,
})

//投稿一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
	const response = await client.getList({
		customRequestInit: {
			cache: 'no-store', // キャッシュを利用せずに常に新しいデータを取得する
		},
		endpoint: 'blogs',
		queries,
	})

	return response.contents
}

//投稿を取得
export const getListDetail = async (
	contentId: string,
	queries?: MicroCMSQueries
) => {
	const detailData = await client.getListDetail<Blog>({
		endpoint: 'blogs',
		contentId,
		queries,
	})
	return detailData
}

//全てのIDを取得する
export const getAllContentIds = async (fileters?: string) => {
	const allContentsIds = await client.getAllContentIds({
		endpoint: 'blogs',
		filters: fileters,
		customRequestInit: {
			next: {
				revalidate: 0,
			},
		},
	})
	return allContentsIds
}
