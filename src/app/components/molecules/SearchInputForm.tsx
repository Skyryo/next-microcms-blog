'use client'
import * as React from 'react'
import { useRouter } from 'next/navigation'

import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'

export default function SearchInputField() {
	const [searchWord, setSearchWord] = React.useState('')
	const router = useRouter()

	const handleSearchClick = () => {
		document.cookie = `searchWord=${encodeURIComponent(searchWord)}`
		router.refresh()
	}

	return (
		<>
			<TextField
				id='input-with-icon-textfield'
				label='全文検索'
				placeholder='キーワードを入力してください'
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
					setSearchWord(event.target.value)
				}}
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<SearchIcon />
						</InputAdornment>
					),
				}}
				variant='standard'
				helperText='例）国際政治,米国'
			/>
			<Button onClick={handleSearchClick}>検索する</Button>
		</>
	)
}
