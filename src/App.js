import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import BookList from "./BookList";
import Header from "./partials/Header";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
    this.fetchBooks();
  }

  fetchBooks = async () => {
    try {
      let books = await axios(
        "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"
      );
      this.setState({
        books: books.data
      });
    } catch (err) {
      alert(err);
    }
  };

  render() {
    return (
      <div className="container">
        <Header />
        <div className="main">
          <div className="ad"></div>
          <h2 className="page-title">Genres</h2>

          <div className="books__section">
            <div className="left-section">
              <div className="genre__searchbox">
                <input placeholder="Find a genre by name"></input>
                <button>Find Genre</button>
              </div>
              <h4 className="section-title">
                BEST BOOKS OF THE MONTH: OCTOBER 2018
              </h4>
              <BookList books={this.state.books} />
            </div>
            <div className="right-section">
              <div className="ad-box">
                <img src="ad.png" />
              </div>
              <div className="category-list">
                {/* <img src="genres.png" /> */}
                <h4 className="section-title">BROWSE</h4>
                <ul>
                  <li>Art</li>
                  <li>Biography</li>
                  <li>Chick Lit</li>
                  <li>Children's</li>
                  <li>Christian</li>
                  <li>Classics</li>
                  <li>Comics</li>
                  <li>Contemporary</li>
                  <li>Cookbooks</li>
                  <li>Crime</li>
                  <li>Ebooks</li>
                  <li>Fantasy</li>
                  <li>Fiction</li>
                  <li>Gay and Lesbian</li>
                  <li>Graphic Novels</li>
                  <li>Historical Fiction</li>
                  <li>History</li>
                  <li>Horror</li>
                  <li>Humor and Comedy</li>
                  <li>Manga</li>
                  <li>Memoir</li>
                  <li>Music</li>
                  <li>Mystery</li>
                  <li>Nonfiction</li>
                  <li>Paranormal</li>
                  <li>Philosophy</li>
                  <li>Poetry</li>
                  <li>Psychology</li>
                  <li>Religion</li>
                  <li>Romance</li>
                  <li>Science</li>
                  <li>Science Fiction</li>
                  <li>Self Help</li>
                  <li>Suspense</li>
                  <li>Spirituality</li>
                  <li>Sports</li>
                  <li>Thriller</li>
                  <li>Travel</li>
                  <li>Young Adult</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
