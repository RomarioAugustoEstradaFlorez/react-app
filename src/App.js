import React from "react"
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Router } from '@reach/router'
// pages
import { Home } from './pages/Home'
import { ItemDetail } from './pages/ItemDetail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'

const UserLogged = ({ children }) => {
	return children({ isAuth: false })
}

export const App = () => {
	const urlParams = new window.URLSearchParams(window.location.search)
	const detailId = urlParams.get('detail')

	return (
		<div>
			<GlobalStyle />
			<Logo />

			<Router>
				<Home path="/" />
				<Home path="/pet/:cateId" />
				<ItemDetail path="/detail/:itemId" />
			</Router>

			<UserLogged>
				{
					({ isAuth }) =>

						isAuth ?
							<Router>
								<Favs path="/favs" />
								<User path="/user" />
							</Router>
							:
							<Router>
								<NotRegisterUser path="/favs" />
								<NotRegisterUser path="/user" />
							</Router>

				}
			</UserLogged>

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
