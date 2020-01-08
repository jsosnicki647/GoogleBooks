import React, { Component } from "react";
import "./App.css";
import Search from "./Components/Search";
import BookCard from "./Components/BookCard"

class App extends Component {
  state = {
    searchBookTitle: "",
    books: []
  };

  handleTitleChange = e => {
    this.setState({ searchBookTitle: e.target.value });
  };

  handleSearchBooks = e => {
    e.preventDefault()
    const title = this.state.searchBookTitle
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=" + title + "&key=" + APIKEY
    )
      .then(res => res.json())
      .then(data => {
        console.log("data: ", data)
        if (data.totalItems > 0){
          this.setState({ books: data.items })
        }
        else{
          this.setState({ books: ["No Results"]})
        }
        console.log("state: ", this.state)
      }
      );
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Google Book Search</h2>
        </div>
        <Search
          handleTitleChange={this.handleTitleChange}
          searchBooks={this.handleSearchBooks}
        />
        {this.state.books[0] != "No Results" ? this.state.books.map(book => (
          <BookCard
            id={book.id}
            key={book.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors ? book.volumeInfo.authors : []}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks.smallThumbnail}
            link={book.volumeInfo.previewLink}
          />
        )) : ''}
      </div>
    );
  }
}

export default App;
