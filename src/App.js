import React, { Fragment } from "react"
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './container/listOfPhotoCards'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/photoCardWithQuery'

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
					<Fragment>
						<ListOfCategories />
						<ListOfPhotoCards categoryId={null} />
					</Fragment>
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
