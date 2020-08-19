import React from "react"
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { ItemDetail } from './pages/ItemDetail'

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
				{/* <Home /> */}
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
