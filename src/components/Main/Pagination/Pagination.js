import React from 'react'

export default function Pagination({ handlePaginationSelect, totalPages, currentPage }) {
  const getLiClass = (index) => index + 1 === currentPage ? 'uk-active' : '';
  const li = new Array(totalPages)
    .fill(0)
    .map((_, index) => (
      <li 
        key={index} 
        onClick={() => handlePaginationSelect(index + 1)} 
        className={getLiClass(index)
      }>
        <span>{index + 1}</span>
      </li>
    ))
  
  return (
    <ul className="uk-pagination uk-flex-center uk-flex-middle" uk-margin>
      {li}
    </ul>
  )
}
