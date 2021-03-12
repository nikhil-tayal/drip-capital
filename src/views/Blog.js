import React, { useEffect, useState } from "react";
import { API_GET_BLOG_DATA } from "../Utils/APIUrls";
import { GET } from "../Utils/webAPI.service";
import { Facebook } from "react-content-loader";
export default function Blog({ match }) {
  const [blogData, setBlogData] = useState("");

  useEffect(() => {
    GET(API_GET_BLOG_DATA(match.params.id)).then(({ data }) => {
      setBlogData(data);
    });
  }, [match.params.id]);

  let { fields } = blogData,
    { body, description, title, url } = fields || [];
  return (
    <div className="blog__wrapper">
      <div className="blog-container">
        {!blogData ? (
          <Facebook height={200}/>
        ) : (
          <React.Fragment>
            <div className="blog-title">{title}</div>
            <div className="description__card">{description}</div>
          </React.Fragment>
        )}
      </div>
      {!blogData ? <Facebook  height={300}/> : <img src={url} alt={"Drip Capital"} className="blog__image" />}

      <div className="blog-container">{!blogData ? <Facebook  height={200}/> : <div className="body">{body}</div>}</div>
    </div>
  );
}
