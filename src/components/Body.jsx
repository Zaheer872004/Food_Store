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


// here adding the filter based on rating
// const filterRating = () =>{
//   restorantValue.filter((e)=> e.info.avgRating)
// }

  return (
    <>
    <div className="flex flex-wrap">
      {restorantValue.filter(e=> e.info.avgRating >= 4).map((restoData) => (
        <Link key={restoData.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 ">
          <ItemCard {...restoData} />
        </Link> 
      ))}
    </div>
   
</>
  );
};

export default Body;
