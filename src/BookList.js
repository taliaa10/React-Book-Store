import React, { Component } from "react";

class BookList extends Component {
  render() {
    let bookItems = this.props.books.map(book => {
      return (
        <div key={book.imageLink} className="book">
          <a target="_blank" rel="noopener noreferrer" href={book.link}>
            <img
              alt="{book.name}"
              src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`}
            />
          </a>
          <h4 className="book__title">{book.title}</h4>
        </div>
      );
    });
    return <div className="books__container">{bookItems}</div>;
  }
}

export default BookList;
