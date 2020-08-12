import React, { Fragment } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useNearItemsToShow } from '../../hooks/useNearItemsToShow'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useMouseBehaviour } from '../../hooks/useMouseBehaviour'
import { LikeButton } from '../../components/LikeButton'
import { ToggleLikeMutation } from '../../container/toggleLikeMutation'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
	const [show, element] = useNearItemsToShow() // this get for the element instead
	const keyLike = 'like-' + id
	const [liked, pushLiked] = useLocalStorage(keyLike, false) // this shit is awesome jaja, I love the custom hooks
	const [over, setOver] = useMouseBehaviour();

	return (
		<Article ref={element}
			onMouseEnter={() => setOver(true)}
			onMouseLeave={() => setOver(false)}>

			{
				show && <Fragment>
					<a href={`/?detail=${id}`}>
						<ImgWrapper>
							<Img src={src} />
						</ImgWrapper>
					</a>

					<ToggleLikeMutation>
						{
							(listenerLike) => {
								const handleLikeClick = () => {
									!liked && listenerLike({ // i dont know how but this increment the likes in 1
										variables: {
											input: { id }
										}
									})

									pushLiked(!liked)
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