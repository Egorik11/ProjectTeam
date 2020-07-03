<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
=======
import React from 'react'
import ReactDOM from 'react-dom'
import Blog from './Blog'
import * as serviceWorker from './serviceWorker'
>>>>>>> egor

ReactDOM.render(
  <React.StrictMode>
    <Blog />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
