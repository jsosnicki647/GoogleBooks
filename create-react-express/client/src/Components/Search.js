import React, { Component } from "react";
import "./SearchStyle.css"

class Search extends Component {
  render() {
    return (
      <div>
        <h2 className="alert alert-success">Search Books</h2>
        <form>
            <div className="form-group">
                <input type="text" placeholder="Book Title"/>
                <button type="button" className="btn btn-primary">Search</button>
            </div>
        </form>
      </div>
    );
  }
}

export default Search;
