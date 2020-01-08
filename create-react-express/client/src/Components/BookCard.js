import React from "react";
import "./SearchStyle.css";

function BookCard(props) {
    return (
      <div className="card">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"><strong>{props.title}</strong></h5>
          {props.authors[0] ? <h5>By {props.authors.map((author, index) => (index ? ', ': '') + author)}</h5> : ''}
          <p className="card-text">
            {props.description}
          </p>
          <a href={props.link} target="_blank" className="btn btn-primary">
            Preview
          </a>
          <button className="btn btn-success">
              Save
          </button>
        </div>
      </div>
    );
}

export default BookCard;
