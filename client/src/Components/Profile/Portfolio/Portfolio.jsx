import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem";
import axios from "axios"
import { useUserContext } from "../../../hooks/UseUserContext";
///-------------------------------------------------------------------------

export default function Portfolio(props) {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [popupForm, setpopupForm] = useState(false);
  const [portfolioData, setportfolioData] = useState({
    imageURL: "",
    description: "",
    URL: "",
    title: "",
    priority: "",
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const { user } = useUserContext()


  const handleChange = (event) => {
    setportfolioData({
      ...portfolioData,
      [event.target.name]: event.target.value,
    });
  };

  // add new portfolio
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:9000/portfolio", portfolioData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        }
      });

      console.log(res.data);
      setpopupForm(false);

    } catch (error) {
      console.error(error);
    }
  };

  // delete portfolio
  const handleRemove = async () => {
    try {
      await axios.delete(`/api/portfolio/${selectedItem.id}`);
      setPortfolioItems(portfolioItems.filter((item) => item.id !== selectedItem.id));
      setSelectedItem(null);
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
            <button >
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
                    name="imageURL"
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
                    name="URL"
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

                  <input type="submit" value="Submit" />
                  {/* <button onClick={() => setpopupForm(false)}>Submit</button> */}
                </form>
              </div>
            )}
          </div>
        </div>
        <PortfolioItem portfolio={props} />

        {/* <div className="portfolio-items">
          {portfolioItems.map((item) => (
            <PortfolioItem
            // imageURL={item.imageURL}
            // description={item.description}
            // URL={item.URL}
            // title={item.title}
            // priority={item.priority}
            />
          ))}
        </div> */}
      </div>
    </>
  );
          }
