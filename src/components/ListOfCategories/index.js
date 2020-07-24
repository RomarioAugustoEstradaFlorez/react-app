import React, { useEffect, useState, Fragment } from 'react'
import { Category } from '../Category'
import { CategoryFetch } from '../../fetching/CategoryFetch'

import { List, Item } from './styles'

function useCategoriesData() {
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(function () {
		setLoading(true)
		window.fetch('https://api-pet.vercel.app/categories')
			.then(res => res.json())
			.then(response => {
				setCategories(response)
				setLoading(false)
			})
	}, []) // add array empty to stop the multiple pettitions

	return { categories, loading }
}
export const ListOfCategories = () => {
	const { categories, loading } = useCategoriesData() // custom hook
	const [showFixed, setShowFixed] = useState(false)

	useEffect(function () {
		const onScroll = e => {
			const newShowFixed = window.scrollY > 200
			showFixed !== newShowFixed && setShowFixed(newShowFixed)
		}

		document.addEventListener('scroll', onScroll)

		// clean eventListener
		return () => document.removeEventListener('scroll', onScroll)
	}, [showFixed])

	const renderList = (fixed) => (
		<List fixed={fixed}>
			{
				loading
					? <Fragment key='loading'>{[1, 2, 3, 4].map(category => <Item ><CategoryFetch /></Item>)}</Fragment>
					: categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
			}
		</List>
	)

	return (
		<Fragment>
			{renderList()}
			{showFixed && renderList(true)}
		</Fragment>
	)
}