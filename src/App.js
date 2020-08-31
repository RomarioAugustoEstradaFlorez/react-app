import React, { useContext } from "react"
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Router, Redirect } from '@reach/router'
// pages
import { Home } from './pages/Home'
import { ItemDetail } from './pages/ItemDetail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { NotFound } from './pages/NotFound'

import { Context } from './Context'

export const App = () => {
	const urlParams = new window.URLSearchParams(window.location.search)
	const { isAuth } = useContext(Context)

	return (
		<div>
			<GlobalStyle />
			<Logo />

			<Router>
				<NotFound default />
				<Home path='/' />
				<Home path="/pet/:cateId" />
				<ItemDetail path="/detail/:itemId" />
				{!isAuth && <NotRegisterUser path='/login' />}
				{!isAuth && <Redirect noThrow from='/favs' to='/login' />}
				{!isAuth && <Redirect noThrow from='/user' to='/login' />}
				{isAuth && <Redirect noThrow from='/login' to='/' />}
				<Favs path='/favs' />
				<User path='/user' />
			</Router>

			<NavBar />
		</div>
	)
}

// export const App = () => (
// 	<div>
// 		{/* <p>puto</p> */}
// 		<GlobalStyle />
// 		<Logo />
// 		<ListOfCategories />
// 		<ListOfPhotoCards categoryId={5} />
// 	</div>
// )
