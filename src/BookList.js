import React, { Component } from "react";

// Components
import BookTable from "./BookTable";
import SearchBar from "./SearchBar";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books
    };

    this.filterBooks = this.filterBooks.bind(this);
  }

  //   componentDidMount() {
  //     this.filterBooks();
  //   }

  //   componentDidUpdate(prevProps) {
  //     if (
  //       prevProps.match.params.bookColor !== this.props.match.params.bookColor
  //     ) {
  //       this.filterBoks();
  //     }
  //   }

  filterBooks(query) {
    let filteredBooks = this.props.books.filter(book => {
      return book.title.toLowerCase().includes(query);
    });
    this.setState({ books: filteredBooks });
  }

  render() {
    // console.log(this.state.books);
    // console.log(this.props.match.params.bookColor);

    //const color = this.props.match.params.color;
    //let books = this.state.filterBooks;

    //if (color) books = books.filter(book => book.color === color);

    return (
      <div className="books">
        <h3>Books</h3>
        <SearchBar changeHandler={this.filterBooks} />
        {/* <SearchBar changeHandler={() => alert("Search Books")} /> */}
        <BookTable books={this.state.books} />
      </div>
    );
  }
}

export default BookList;
