import React, { useEffect, useState } from 'react'
// import { globalData } from './Body'
import Shammer from './Shammer';
import ItemCard from './ItemCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { requestURL } from '../utils/api';



const Restaurant = () => {
  // console.log(globalData)

  const [restorantValue, setRestorantValue] = useState([]);
  const [filteredData, setFilteredData] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requestURL);
        const data = response.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setRestorantValue(data);

      } catch (error) {
        console.error('Error fetching data with axios:', error.message);
        console.error('Full error details:', error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {

    const filtered = () => {
      const filterdResto = restorantValue.filter((value) => value.info.avgRating >= 4.5);
      setFilteredData(filterdResto);
    };
    filtered()
  }, [restorantValue]);


  if (filteredData.length === 0) {
    return <Shammer className='' />
  }


  return (
    <>
      <div className='flex flex-wrap'>
        {
          filteredData.map((restoData) => (
            <Link key={restoData.info.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 ">
              <ItemCard {...restoData} />
            </Link>
          ))
        }
      </div>
    </>
  )
}

export default Restaurant