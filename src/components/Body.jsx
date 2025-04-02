import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ItemCard from './ItemCard';
import Shammer from './Shammer';
import { requestURL } from '../utils/api';

// export let globalData = "";

const Body = () => {
  const [restorantValue, setRestorantValue] = useState([]);
  const [filteredResto, setFilteredResto] = useState([]);
  const [searchText, setSearchText] = useState("")


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requestURL);
        const data = response.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setRestorantValue(data);
        setFilteredResto(data);
        // globalData = data;

      } catch (error) {
        console.error('Error fetching data with axios:', error.message);
        console.error('Full error details:', error);
      }
    };

    fetchData();
  }, []);


  // here adding the filter based on rating
  // (() =>{
  //   const filterdResto = restorantValue.filter((value) => value.info.avgRating >=4);
  //   setRestorantValue(filterdResto);
  // })();

  const filtered = () => {
    const filterdResto = filteredResto.filter((value) => value.info.avgRating >= 4.3);
    setFilteredResto(filterdResto);
  };
  // console.log(filteredResto.info.avgRating)


  useEffect(() => {
    const searchFilter = restorantValue.filter((value) =>
      value.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResto(searchFilter);

  }, [searchText, restorantValue]);




  if (restorantValue.length === 0) {
    return <Shammer />
  }

  return (
    <>
      <div className='flex justify-evenly'>
        <button
          onClick={filtered}
          className='m-2 ml-4 p-2 border bg-orange-300 ring-emerald-200 rounded-md'
        >Filter High Rated</button>

        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
          className="my-2 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>
      <div className="flex flex-wrap">
        {(filteredResto.length !== 0 ?
          (filteredResto.map((restoData) => (
            <li key={restoData.info.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 bg-slate-200 ">
              <ItemCard {...restoData} />
            </li>
          )))
          :
          (restorantValue.map((restoData) => (
            <li key={restoData.info.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 bg-slate-200 ">
              <ItemCard {...restoData} />
            </li>
          )))
        )}
      </div>

    </>
  );
};

export default Body;



/*

{(filteredResto.info.length !== 0 ?
          (filteredResto.map((restoData) => (
            <Link key={restoData.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 bg-slate-200 ">
              <ItemCard {...restoData} />
            </Link>
          )))
          :
          (restorantValue.map((restoData) => (
            <Link key={restoData.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 bg-slate-200 ">
              <ItemCard {...restoData} />
            </Link>
          )))
        )}


*/