import React, { useContext, Suspense } from "react"
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

// pages
const User = React.lazy(() => import('./pages/User'))
const Favs = React.lazy(() => import('./pages/Favs'))
const Home = React.lazy(() => import('./pages/Home'))
const ItemDetail = React.lazy(() => import('./pages/ItemDetail'))
const NotRegisterUser = React.lazy(() => import('./pages/NotRegisterUser'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

export const App = () => {
	const urlParams = new window.URLSearchParams(window.location.search)
	const { isAuth } = useContext(Context)

	return (
		<Suspense fallback={<p>Cargando...</p>}>
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
		</Suspense>
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
