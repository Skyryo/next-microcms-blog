import styles from './page.module.css'
import { getList } from '@/app/libs/microcms'
import Link from 'next/link'
import Image from 'next/image'

export default async function Home() {
	return <main className={styles.main}></main>
}
