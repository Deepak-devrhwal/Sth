import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
// import { Footer } from ".";
import MarkdownIt from "markdown-it";

import Footer from "./Footer";

// import characterInfo from "./characterinfo.json";

class Layout extends Component {
  static propTypes = {
    children: Component.PropTypes.element,
  };

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      // searchResults: characterInfo.items.slice(0, 3),
    };
  }

  updateSearch = (event) => {
    const query = event.target.value;
    this.setState({
      searchQuery: query,
      searchResults: this.performSearch(query),
    });
  };

  submitSearch = () => {
    this.props.history.push("/Characters");
  };

  // performSearch(query) {
  // return characterInfo.items.filter((item) => {
  //     return item.title.toLowerCase().match(query.toLowerCase());
  //   });
  // }

  render() {
    return (
      <div>
        <header>
          <Link to='/Home'>
            <img className='header1' src='../images/sth3.gif' alt='header1' />{" "}
          </Link>
          <nav>
            <ul id='noDots'>
              <li>
                <Link className='noUnders' to='/Home'>
                  Home
                </Link>
              </li>
              <li>
                <Link className='noUnders' to='/Characters'>
                  Characters
                </Link>
              </li>
              <li>
                <Link className='noUnders' to='/DevilFruit'>
                  Devil Fruits
                </Link>
              </li>
              <li>
                <Link className='noUnders' to='/Anime'>
                  Anime
                </Link>
              </li>
              <li>
                <Link className='noUnders' to='/Manga'>
                  Manga
                </Link>
              </li>
              <li>
                <Link className='noUnders' to='/Games'>
                  Games
                </Link>
              </li>
              <li>
                <Link className='noUnders' to='/Forums'>
                  Forums
                </Link>
              </li>
            </ul>
          </nav>
          <input
            id='Search'
            onChange={this.updateSearch}
            value={this.state.searchQuery}
          />
          <button id='submit' onClick={this.submitSearch}>
            submit
          </button>
        </header>
        {React.cloneElement(this.props.children, { ...this.state })}
        <Footer />
      </div>
    );
  }
}

export default Layout;
