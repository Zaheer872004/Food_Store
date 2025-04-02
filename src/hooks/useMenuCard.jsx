import React, { useState,useEffect } from "react";

const useMenuCard = (id) => {
  const [menuCard, setMenuCard] = useState(null);

  const fetchMenuCard = async (id) => {
    try {
      let data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.39720&lng=76.56780&restaurantId=${id}`
      );

      let response = await data.json();
      setMenuCard(response);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // console.log(id);
    fetchMenuCard(id);
  }, [id]);

  return menuCard;
};

export default useMenuCard;
