import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  //document.title = `NewsMonkey - ${this.props.category}`;

  const updatenews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9723ed0e06654779951c645c7be83c9c&pageSize=${props.pageSize}&page=${page}`;
    setLoading(true);
    props.setProgress(20);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(60);
    console.log(parsedData);
    props.setProgress(80);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updatenews();
  }, []); 
  
  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9723ed0e06654779951c645c7be83c9c&pageSize=${props.pageSize}&page=${page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
      <>
      <div className={`text-${props.mode === 'light'?'dark':'light'}`}>
        <h1 className="text-center text-capitalize">
          NewsMonkey - Top Headlines From {props.category}{" "}
        </h1>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row my-2">
          {articles.map((element) => {
            return (
              <div className="col-md-4 my-2" key={element.url}>
                <Newsitem
                  imageUrl={element.urlToImage}
                  Title={element.title}
                  description={element.description}
                  url={element.url}
                  publishedAt={element.publishedAt}
                  author={element.author}
                  source={element.source.name}
                />
              </div>
              
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
        </div>
      </>
  );
}
News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "sports",
};

News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
};
