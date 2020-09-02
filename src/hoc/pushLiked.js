import { gql } from 'apollo-boost'

const LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!) {
  likePhoto(input: $input) {
    id,
    liked,
    likes
  }
}`

export const pushLiked = LIKE_PHOTO