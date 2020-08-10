import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'


export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
	const element = useRef(null);
	const keyLike = 'like-' + id;
	const [show, setShow] = useState(false)

	const [liked, pushLiked] = useState(() => {
		try {
			const like = window.localStorage.getItem(keyLike);
			return JSON.parse(like);
		} catch (error) {
			return false;
			console.error('The localstorage dont works on incognit tabs: ', error)
		}
		return false;
	})

	const Icon = liked ? MdFavorite : MdFavoriteBorder; // Uppercase for react, because it have to know if the render is a component

	useEffect(function () {
		Promise.resolve(
			typeof window.IntersectionObserver !== 'undefined'
				? window.IntersectionObserver
				: import('intersection-observer')
		).then(() => {
			const observer = new window.IntersectionObserver(function (entries) {
				const { isIntersecting } = entries[0]
				if (isIntersecting) {
					setShow(true)
					observer.disconnect()
				}
			})
			observer.observe(element.current)
		})
	}, [element])


	const SetLocalLiked = val => {
		try {
			window.localStorage.setItem(keyLike, val)
		} catch (error) {
			console.error('The localstorage dont works on incognit tabs: ', error)
		}
		pushLiked(val);
	}

	return (
		<Article ref={element}>
			{
				show && <Fragment>
					<a href={`/detail/${id}`}>
						<ImgWrapper>
							<Img src={src} />
						</ImgWrapper>
					</a>

					<Button onClick={() => SetLocalLiked(!liked)}>

						<Icon size='32px' /> {likes} likes!
          </Button>
				</Fragment>
			}
		</Article>
	)
}