import React from 'react'
import ReactDOM from 'react-dom'
import Blog from './Blog'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Blog />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
