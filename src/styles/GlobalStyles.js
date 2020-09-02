import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
		box-sizing: border-box;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  *, *::before, *::after {
		box-sizing: inherit;
  }

  
  ul, li, h1, h2, h3, p, button {
		margin: 0;
  }
	h1, h2, h3{
		padding: 0px 16px;
	}

  ul {
		list-style: none;
		padding-left: 0px;
  }

  button {
		background: transparent;
		border: 0;
		outline: 0;
  }

  body {
		background: #fff;
		height: 100vh;
		margin: 0 auto;
		max-width: 100vh;
		overscroll-behavior: none;
		width: 100%;
  }

  #app {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
		overflow-x: hidden;
		min-height: 100vh;
		padding-bottom: 10px;
		margin-bottom: 60px;
	}
	
	.install{
		padding: 26px 32px 0px 32px;
		margin-bottom: 30px;
		max-width: 100vh;
		margin: 0 auto;

		&__button{
			border-radius: 30px;
			width: 100%;
			background: #a4d4d3;
			padding: 10px 20px;
			color: white;
			font-size: 18px;

			& .disabled {
				background: gray;
			}
		}

		&__button:active{
			background: #e3b0b4;
		}
	}
`