import React from 'react'
import { Link, Nav } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const sizeLink = '32px'

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'><MdHome size={sizeLink} /></Link>
      <Link to='/favs'><MdFavoriteBorder size={sizeLink} /></Link>
      <Link to='/user'><MdPersonOutline size={sizeLink} /></Link>
    </Nav>
  )
}