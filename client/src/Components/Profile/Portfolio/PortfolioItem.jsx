import React from "react";

export default function PortfolioItem({imageUrl, description, url, title, priority}) {
  return (
    <div className="PortfolioItem">
      <img src={imageUrl} alt={description} />
      <p>{url}</p>
      <h3>{title}</h3>
      <p>{priority}</p>
    </div>
  );
};


