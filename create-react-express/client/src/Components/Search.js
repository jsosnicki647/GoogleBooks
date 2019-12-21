import React, { Component } from "react";
import "./SearchStyle.css"

class Search extends Component {
  render() {
    return (
      <div>
        <h2 className="alert alert-success">Search Books</h2>
        <form>
            <div className="form-group">
                <input type="text" placeholder="Book Title" onChange={this.props.handleTitleChange} />
                <button type="submit" className="btn btn-primary" onClick={this.props.searchBooks}>Search</button>
            </div>
        </form>
      </div>
    );
  }
}

export default Search;
