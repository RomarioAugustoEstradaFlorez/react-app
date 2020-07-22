import React from "react";
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'


export const App = () => (
	<div>
		{/* <p>puto</p> */}
		<GlobalStyle />
		<Logo />
		<ListOfCategories />
		<ListOfPhotoCards />
	</div>
)
