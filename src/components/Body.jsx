import RestoCard from "./RestoCard";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import { jsonData } from "../utils/JsonData";

const Body = () => {

  const [listOfRestaurants, setlistOfRestaurants] = useState(jsonData);

  useEffect( () => {
    console.log("useEffect called");
    
  }, []); 


  
  // {
// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const fetchData = async () => {

//   // const Api = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4174894&lng=72.8212903&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");


//   // const json =  Api.data.cards[2].card.card.gridElements.infoWithStyle.restaurants[0].info;

//   // console.log(json.name);

//   // console.log(Api);
// }
// }

const filterCards = () => {
            
    let filterdList = listOfRestaurants.filter(
       (res) => res.info?.avgRating > 4
    );
     setlistOfRestaurants(filterdList);
}


  return (
    <div className="body-container">
      <div className="btn-searchBar">
        <div className="filter-btn">
          <button onClick={filterCards}>
            Click to filter top restorants</button>
        </div>
        {/* <div className="search-bar">
          <SearchBar />
        </div> */}
      </div>
      <div className="resto-container">

      {listOfRestaurants.map((restaurant) => (
        <RestoCard
          key={restaurant.info?.id}
          name={restaurant.info?.name}
          cuisines={restaurant.info?.cuisines.join(", ")}
          
          star={restaurant.info?.avgRating}
          prices={restaurant.info?.costForTwo}
          areaName={restaurant.info?.areaName}
          area={restaurant.info?.locality}
          // imagelink={restaurant.imglink}
          cloudnaryimageId={restaurant.info?.cloudinaryImageId}
        />
      ))}

      </div>
    </div>
  );
};

export default Body;








