import React from "react";

export default function LimitFilter({ handleLimitChange }) {
  const limits = [6, 12, 24];
  const limitPosts = (event) => handleLimitChange(event.target.value);

  return (
    <select onChange={limitPosts} className="uk-select uk-width-small uk-margin-left">
      {limits.map((limit, index) => <option value={limit} key={index}>{limit}</option>)}
    </select>
  );
}
