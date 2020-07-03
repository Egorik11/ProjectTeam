import React from "react";
import Nav from "./components/Header/Nav/Nav";
function App() {

  
  return (
    <main className="uk-main">
      <Nav/>
      <div className="uk-section">
        <div className="uk-container">
          <div className="uk-margin-medium-bottom uk-flex">
            <form className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
              <span uk-search-icon />
              <span
                className="uk-search-icon uk-search-icon-flip"
                uk-spinner="ratio: 0.6"
              />
              <input
                className="uk-search-input"
                type="search"
                placeholder="Search..."
              />
            </form>
            <select className="uk-select uk-width-small uk-margin-auto-left">
              <option value="asc">ASC</option>
              <option value="desc">DESC</option>
            </select>
            <select className="uk-select uk-width-small uk-margin-left">
              <option value={5}>6</option>
              <option value={10}>12</option>
              <option value={20}>24</option>
            </select>
            <div className="uk-button-group uk-margin-left">
              <button className="uk-button uk-button-default uk-active">
                <span uk-icon="icon:  grid" />
              </button>
              <button className="uk-button uk-button-default">
                <span uk-icon="icon:  list" />
              </button>
            </div>
          </div>
          <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
            <div>
              <div className="uk-card uk-card-default uk-margin-medium-bottom">
                <div className="uk-card-header">
                  <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
                    Title{" "}
                    <a href="/" className="uk-icon-link" uk-icon="heart" />
                  </h3>
                </div>
                <div className="uk-card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
                <div className="uk-card-footer">
                  <a href="post.html" className="uk-button uk-button-text">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-margin-medium-bottom">
                <div className="uk-card-header">
                  <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
                    Title{" "}
                    <a href="/" className="uk-icon-link" uk-icon="heart" />
                  </h3>
                </div>
                <div className="uk-card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
                <div className="uk-card-footer">
                  <a href="post.html" className="uk-button uk-button-text">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-margin-medium-bottom">
                <div className="uk-card-header">
                  <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
                    Title{" "}
                    <a href="/" className="uk-icon-link" uk-icon="heart" />
                  </h3>
                </div>
                <div className="uk-card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
                <div className="uk-card-footer">
                  <a href="post.html" className="uk-button uk-button-text">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-margin-medium-bottom">
                <div className="uk-card-header">
                  <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
                    Title{" "}
                    <a href="/" className="uk-icon-link" uk-icon="heart" />
                  </h3>
                </div>
                <div className="uk-card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
                <div className="uk-card-footer">
                  <a href="post.html" className="uk-button uk-button-text">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-margin-medium-bottom">
                <div className="uk-card-header">
                  <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
                    Title{" "}
                    <a href="/" className="uk-icon-link" uk-icon="heart" />
                  </h3>
                </div>
                <div className="uk-card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
                <div className="uk-card-footer">
                  <a href="post.html" className="uk-button uk-button-text">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-margin-medium-bottom">
                <div className="uk-card-header">
                  <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
                    Title{" "}
                    <a href="/" className="uk-icon-link" uk-icon="heart" />
                  </h3>
                </div>
                <div className="uk-card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
                <div className="uk-card-footer">
                  <a href="post.html" className="uk-button uk-button-text">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="uk-margin">
            <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">
              Load more{" "}
              <div className="uk-margin-small-left" uk-spinner="ratio: 0.6" />
            </button>
          </div>
          <ul className="uk-pagination uk-flex-center uk-flex-middle" uk-margin>
            <li>
              <a href="#">
                <span uk-pagination-previous />
              </a>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            {/* <li class="uk-disabled"><span>...</span></li> */}
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li className="uk-active">
              <span>4</span>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li>
              <a href="#">
                <span uk-pagination-next />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
