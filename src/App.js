import React from "react"
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/photoCardWithQuery'
import { Router } from '@reach/router'
import { Home } from './pages/Home'

export const App = () => {
	const urlParams = new window.URLSearchParams(window.location.search)
	const detailId = urlParams.get('detail')

	return (
		<div>
			<GlobalStyle />
			<Logo />
			{
				detailId
					?
					<PhotoCardWithQuery id={detailId} />
					:
					<Router>
						<Home path="/" />
						<Home path="/pet/:cateId" />
						{/* <Home /> */}
					</Router>

			}
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
