import React from 'react'

export default function LimitFilter() {
  return (
    <select className="uk-select uk-width-small uk-margin-left">
      <option value={5}>6</option>
      <option value={10}>12</option>
      <option value={20}>24</option>
    </select>
  )
}
