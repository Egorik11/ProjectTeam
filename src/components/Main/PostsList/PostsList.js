import React from 'react'
import PostItem from './PostItem/PostItem'

export default function PostsList() {
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  )
}
