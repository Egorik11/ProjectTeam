import React from 'react'
import FilterBar from './FilterBar/FilterBar'
import PostsList from './PostsList/PostsList'
import LoadMore from './LoadMore/LoadMore'
import Pagination from './Pagination/Pagination'

export default function Main() {
  return (
    <main className="uk-main uk-section uk-container">
      <FilterBar />
      <PostsList />
      <LoadMore />
      <Pagination />
    </main>
  )
}
