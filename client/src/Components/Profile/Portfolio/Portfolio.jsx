import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem";
import axios from "axios";

export default function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [popupForm, setpopupForm] = useState(false);
  const [portfolioData, setportfolioData] = useState({
    imageUrl: "",
    description: "",
    url: "",
    title: "",
    priority: "",
  });


  const handleChange = (event) => {
    setportfolioData({
      ...portfolioData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:9000/portfolio", portfolioData);
      console.log(res.data);
      setpopupForm(false);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <div className="border-col">
        <div className="title-bts">
          <h2>Portfolio</h2>
          <div className="buttons">
            <button>
              <img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" />
            </button>
            <button onClick={() => setpopupForm(true)}>
              <img src="https://cdn-icons-png.flaticon.com/512/2311/2311991.png" />
            </button>
            {popupForm && (
              <div className="popup">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="image">Image URL</label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    onChange={handleChange}
                  />
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    onChange={handleChange}
                  />
                  <label htmlFor="url">URL:</label>
                  <input
                    type="text"
                    id="url"
                    name="url"
                    onChange={handleChange}
                  />
                  <label htmlFor="url">Title</label>
                  <input
                    type="text"
                    id="title "
                    name="title"
                    onChange={handleChange}
                  />
                  <label htmlFor="priority">Priority</label>
                  <input
                    type="number"
                    id="priority"
                    name="priority"
                    onChange={handleChange}
                  />
                  <button onClick={() => setpopupForm(false)} >Submit</button>
                </form>
              </div>
            )}
          </div>
        </div>
        <div className="portfolio-items">
          {portfolioItems.map((item) => (
            <PortfolioItem
              imageUrl={item.imageUrl}
              description={item.description}
              url={item.url}
              priority={item.priority}
            />
          ))}
        </div>
      </div>
    </>
  );
          }
