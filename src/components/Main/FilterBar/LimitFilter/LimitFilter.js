import React from "react";

export default function LimitFilter({ filterPosts }) {
  const limitPosts = (event, pr) => {
    console.log(event, pr);
    
    filterPosts(event.target.value);
  };
  return (
    <select onChange={limitPosts} className="uk-select uk-width-small uk-margin-left">
      <option value={6}>6</option>
      <option value={12}>12</option>
      <option value={24}>24</option>
    </select>
  );
}
