import React, { useState, useEffect } from "react";

<<<<<<< HEAD
export default function PostItem({ id, title, body }) {
  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom">
        <div className="uk-card-header">
          <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
            {title}
            <a href="/" className="uk-icon-link" uk-icon="heart" />
          </h3>
        </div>
        <div className="uk-card-body">
          <p>{body}</p>
        </div>
        <div className="uk-card-footer">
          <a href="post.html" className="uk-button uk-button-text">
            Read more
          </a>
        </div>
      </div>
=======
export default function PostItem() {
  const [postTitle, setPostTitle] = useState([]);
  useEffect(async () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPostTitle(data);
      });
  }, []);

  return (
    <div>
      {postTitle.map((post) => {
        return (
          <div
            key={post.id}
            className="uk-card uk-card-default uk-margin-medium-bottom"
          >
            <div className="uk-card-header">
              <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
                {post.title}
                <a href="/" className="uk-icon-link" uk-icon="heart" />
              </h3>
            </div>
            <div className="uk-card-body">
              <p>{post.body}</p>
            </div>
            <div className="uk-card-footer">
              <a href="post.html" className="uk-button uk-button-text">
                Read more
              </a>
            </div>
          </div>
        );
      })}
>>>>>>> master
    </div>
  );
}
