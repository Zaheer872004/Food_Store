import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import ItemCard from './ItemCard'; 

const Body = () => {
  const [restorantValue, setRestorantValue] = useState([]);

  const requestURL = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4174894&lng=72.8212903&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requestURL);
        const data = response.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        // console.log(data);
        setRestorantValue(data);
      } catch (error) {
        console.error('Error fetching data with axios:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      {restorantValue.map((restoData) => (
        <Link key={restoData.id} to={`/restaurant/${restoData.id}`}>
          <ItemCard {...restoData} />
        </Link>
      ))}
    </div>
  );
};

export default Body;
