import React, { Component } from "react";
import { Link } from "react-router-dom";
// import BookList from "./BookList";

class BookRow extends Component {
  render() {
    const book = this.props.book;
    return (
      <tr>
        <td>{book.title}</td>
        <td>
          {book.authors.map(author => (
            <Link key={author.name} to={`/authors/${author.id}`}>
              <div>{author.name}</div>
            </Link>
          ))}
        </td>
        <td>
          <Link to={`/books/${book.color}`}>
            {/* wrap buttons in link */}
            {/* <link to ={`/books/${book.color}} */}
            <button className="btn" style={{ backgroundColor: book.color }} />
          </Link>
        </td>
      </tr>
    );
  }
}

export default BookRow;
