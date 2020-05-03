import 'babel-polyfill';
import express  from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import StyleContext from 'isomorphic-style-loader/StyleContext'
import { StaticRouter } from 'react-router';
import bodyParser from 'body-parser';

import App from './src/app'

const app = express()
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(express.static('build/public'));


app.get('*', (req,res)=> {

	const css = new Set() 
 	const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
	const context ={}

	const content = ReactDOMServer.renderToString(
		
		<StyleContext.Provider value={{ insertCss }} loaction={req.url}>
		<StaticRouter loaction={req.url} context={context}>
			<App/>
			</StaticRouter>
		</StyleContext.Provider>	
		
	)
	const html = `
		<html>
			<head>
				<title>Login Page</title>
				<style>${[...css].join('')}</style>
			</head>
			<body>
				<div id='root'>
					${content}
				</div>
				<script src="client_bundle.js"></script>
			</body>
		</html>
	`;

	res.send(html)
})

app.listen(PORT, () => {
	console.log(`App running ${PORT}`)
})