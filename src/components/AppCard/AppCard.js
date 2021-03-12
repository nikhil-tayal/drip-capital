import React from "react";

export default function AppCard({ fields, history, id }) {
  let { title, description, url } = fields;
  return (
    <div className="card__wrapper" onClick={() => history.push(`/blog/${id}`)}>
      <div className="row">
        <div className="col-sm-3">
          <div className="right">
            <img src={url} alt="Card" className="card__image" />
          </div>
        </div>
        <div className="col-sm-9">
          <div className="left">
            <div className="h5">{title}</div>
            <div className="description">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
