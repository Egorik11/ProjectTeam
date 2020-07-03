import React from 'react'
import Search from './Search/Search'
import SortFilter from './SortFilter/SortFilter'
import LimitFilter from './LimitFilter/LimitFilter'
import ViewToggle from './ViewToggle/ViewToggle'

export default function FilterBar() {
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <Search />
      <SortFilter />
      <LimitFilter />
      <ViewToggle />
    </div>
  )
}
