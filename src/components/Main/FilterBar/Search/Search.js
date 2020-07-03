import React from 'react'

export default function Search() {
  return (
    <form className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
      <span data-uk-search-icon />
      {/* <span className="uk-search-icon uk-search-icon-flip" uk-spinner="ratio: 0.6" /> //Анимация загрузки */}
      <input className="uk-search-input" type="search" placeholder="Search..." />
    </form>
  )
}
