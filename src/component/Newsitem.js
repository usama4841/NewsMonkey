import React, { Component } from "react";
import defalut from "./img/defalut.jpg";

export class Newsitem extends Component {
  render() {
    let { Title, description, imageUrl, url, publishedAt, author } = this.props;
    return (
      <div>
        <div className="card card-expand-lg mb-1">
          <img
            src={imageUrl?imageUrl:defalut}
            className="card-img-top"
            alt=""
            style={{height: '200px'}}
          />
          <div className="card-body" style={{height: '300px'}}>
            <h5 className="card-title">{Title.slice(0, 40)}...</h5>
            <p className="card-text">
              {description ? description.slice(0, 90) : "No Description Attached To This News By The Auther"}...
            </p>
            <h6 className="card-text text-success">
              Published by {author ? author : "unknown"} <br/> on {publishedAt}
            </h6>
            <a href={url} target="/" className="btn btn-primary d-grid gap-2">
              Read More
            </a>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Newsitem;
