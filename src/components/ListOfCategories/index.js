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

	const renderList = (fixed, type) => (
		<List fixed={fixed}>
			{
				loading
					? <Fragment key='loading'>
						{
							[1, 2, 3, 4, 5, 6].map((itemLoad, i) => {
								<Item key={`${type}-load-${i}`} ><CategoryFetch /></Item>
							})
						}
					</Fragment>
					: categories.map((cate, i) => {
						return (<Item key={`${type}-${cate.id}`}><Category {...cate} /> </Item>)
					})
			}
		</List>
	)

	return (
		<Fragment>
			{renderList(false, 'higher')}
			{showFixed && renderList(true, 'small')}
		</Fragment>
	)
}