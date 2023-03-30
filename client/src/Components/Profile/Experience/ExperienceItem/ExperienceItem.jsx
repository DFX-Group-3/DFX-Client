import React, { useState, useEffect } from 'react';
import './ExperienceItem.css';
import axios from 'axios';
import { useUserContext } from '../../../../hooks/UseUserContext';

export default function ExperienceItem(props) {
  const { user } = useUserContext();
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const getExperience = async () => {
      const uri = `http://localhost:9000/experience`;

      const response = await axios.get(uri, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setExperience(
        response.data.map((exp) => ({
          ...exp,
          showExpand: false,
        }))
      );
    };
    getExperience();
  }, []);

  const toggleExpand = (id) => {
    setExperience((prevExperience) =>
      prevExperience.map((exp) =>
        exp._id === id ? { ...exp, showExpand: !exp.showExpand } : exp
      )
    );
  };

  const experiences = experience.map((exp) => {

    const { _id, organization, position, startDate, endDate, description, imageURL, showExpand } = exp;

    let formatStartDate = new Date(startDate);
    let formatEndDate = new Date(endDate);

    return (
      <div key={_id}>
        <div className="row exp-item-row">
          <div className="col-4 company-col">
            <div className="col-6">
              <img alt="lorem picsum" src={imageURL} />
            </div>
            <div className="col-5">{organization}</div>
          </div>

          <div className="col-4 pos-name-col">{position}</div>
          <div className="col-2">
            {formatStartDate.toLocaleDateString()} - {formatEndDate.toLocaleDateString()}
          </div>
          <div className="col-1 expand">
            <button onClick={() => toggleExpand(_id)}>{!showExpand ? "Expand" : "Collapse"}</button>
          </div>
        </div>
        {showExpand && (
          <div className="expand-row">
            <div className="title-bts">
              <h6 className="title">{position}</h6>
              <div className="buttons">
                <button>
                  <img src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" alt='update button'/>
                </button>
              </div>
            </div>
            <p>{description}</p>
            {/* needs fix in database, to have skills as well */}
          </div>
        )}
      </div>
    );
  });

  return <>{experiences}</>;
}