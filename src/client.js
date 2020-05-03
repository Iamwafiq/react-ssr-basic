import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import StyleContext from 'isomorphic-style-loader/StyleContext'
import App from './app';

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}

if (typeof window !== 'undefined'){
   ReactDOM.hydrate(
   	<StyleContext.Provider value={{ insertCss }}>
	<BrowserRouter>
		<App/>
	</BrowserRouter>
	</StyleContext.Provider>,
document.getElementById('root')
)
}