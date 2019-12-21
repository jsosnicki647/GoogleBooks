import React, { Component } from "react";
import "./App.css";
import Search from "./Components/Search";

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
      "https://www.googleapis.com/books/v1/volumes?q=" + title + "&key=AIzaSyDwSps7qU62IJji7xSY5EkpSAcyApIcyqA"
    )
      .then(res => res.json())
      .then(data =>
        data.items.map(book => {
          return console.log(book);
        })
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
      </div>
    );
  }
}

export default App;
