import React, { Fragment } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { useNearItemsToShow } from '../../hooks/useNearItemsToShow'
import { useMouseBehaviour } from '../../hooks/useMouseBehaviour'
import { LikeButton } from '../LikeButton'
import { ToggleLikeMutation } from '../../container/toggleLikeMutation'
import { Link as TheLink } from '@reach/router'
import PropTypes from 'prop-types'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
	const [show, element] = useNearItemsToShow() // this get for the element instead
	const [over, setOver] = useMouseBehaviour();

	return (
		<Article ref={element}
			onMouseEnter={() => setOver(true)}
			onMouseLeave={() => setOver(false)}>

			{
				show && <Fragment>
					<TheLink to={`/detail/${id}`}>
						<ImgWrapper>
							<Img src={src} />
						</ImgWrapper>
					</TheLink>

					<ToggleLikeMutation>
						{
							(listenerLike) => {
								const handleLikeClick = () => {
									listenerLike({ // i dont know how but this increment the likes in 1
										variables: {
											input: { id }
										}
									})
								}

								return <LikeButton liked={liked} likes={likes} onClick={handleLikeClick} />
							}
						}
					</ToggleLikeMutation>

				</Fragment>
			}

		</Article>
	)
}

PhotoCard.propTypes = {
	id: PropTypes.string.isRequired,
	liked: PropTypes.bool.isRequired,
	src: PropTypes.string.isRequired,
	likes: function (props, propName, componentName) {
		const propValue = props[propName]

		if (propValue === undefined) {
			return new Error(`${propName} value must be defined`)
		}

		if (propValue < 0) {
			return new Error(`${propName} value must be greater than 0`)
		}
	}
}