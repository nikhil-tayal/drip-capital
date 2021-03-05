import React, { useEffect, useState } from "react";
import { API_GET_BLOG_DATA } from "../Utils/APIUrls";
import { GET } from "../Utils/webAPI.service";

export default function Blog({ match }) {
  const [blogData, setBlogData] = useState("");

  useEffect(() => {
    GET(API_GET_BLOG_DATA(match.params.id)).then(({ data }) => {
      setBlogData(data);
    });
  }, [match.params.id]);

  let { fields, sys } = blogData,
    { body, description, title, url } = fields || [];
  return (
    <div className="blog__wrapper">
      <div className="container">
        <img src={url} alt={"Drip Capital"} className="blog__image"/>
        <div className="h2">{title}</div>
        <div className="description__card">{description}</div>
        <div className="body">{body}</div>
      </div>
    </div>
  );
}
