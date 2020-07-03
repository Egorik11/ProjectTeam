import React from 'react'
import Navigation from './Navigation/Navigation'
import Favorites from './Favorites/Favorites'

export default function Header() {
  return (
    <nav className="uk-navbar uk-navbar-container" uk-navbar>
      <Navigation />
      <Favorites />
    </nav>
  )
}
