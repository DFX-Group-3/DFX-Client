import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import { useUserContext } from "../../../hooks/UseUserContext";

export default function PortfolioItem() {

  const [portfolio, setPortfolioItems] = useState([])
  const { user } = useUserContext()


  //-------------getting data
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get("http://localhost:9000/portfolio", {
  //         headers: {
  //           'Authorization': `Bearer ${user.token}`
  //         }
  //       }
  //       );
  //       setPortfolioItems(response.data[0]);
  //       console.log(response)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // }, []);
  // console.log(portfolio)


  useEffect(() => {
    const getPortfolio = async () => {
      const uri = `http://localhost:9000/portfolio`

      const response = await axios.get(uri, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      setPortfolioItems(response.data)
    }
    getPortfolio();
  }, [])
  // console.log(portfolio)

  // const mapping = portfolio.map((element) => {

  //         <img src={element.imageUrl} alt={element.description} />
  //         <p>{element.URL}</p>
  //         <h3>{element.title}</h3>
  //         <p>{element.priority}</p>
  // })





  return (
    // <div className="PortfolioItem">
    //   <img src={portfolio.imageUrl} alt={portfolio.description} />
    //   <p>{portfolio.URL}</p>
    //   <h3>{portfolio.title}</h3>
    //   <p>{portfolio.priority}</p>
    // </div>


    <div className="portfolio-items">
      {portfolio.map((item) => (
        <div key={item._id}>
          <img src={item.imageUrl} alt={item.description} />
          <div className="portfolio-url-title">
          
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="item-url">
              <a href={item.URL}>Full Project</a>
              </div>
            </div>
        </div>
      ))}
    </div>
  );
};


