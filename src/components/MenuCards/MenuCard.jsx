import React from "react";
import { useParams } from "react-router-dom";
import useMenuCard from "../../hooks/useMenuCard";
import HeaderSection from "./HeaderSection";
import DealsSection from "./DealsSection";
import DishesCardsSection from "./DishesCardsSection";

const MenuCard = () => {
  const { id } = useParams();

  const menuCard = useMenuCard(id);

  // console.log(menuCard);

  const headerSectionData = menuCard?.data?.cards[2]?.card?.card?.info;
  // console.log(headerSectionData);

  const dealsSectionData =
    menuCard?.data?.cards[3]?.card?.card.gridElements.infoWithStyle.offers || [];
  // console.log(dealsSectionData);


  const dishesSectionData = menuCard?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  // console.log(dishesSectionData);

  return (
    <div className="container mx-auto my-5">
      <HeaderSection {...headerSectionData} />
      <div className="h-auto">
        <DealsSection deals={dealsSectionData} />
      </div>
      <div className="h-auto">
        {
          dishesSectionData.map((dish, index) => {
            const dishData = dish?.card?.card.itemCards || [];
            if (dishData.length > 0) {
              return <DishesCardsSection key={index} title={dish?.card?.card?.title} dishes={dishData} />;
            }
            return null;
          })
        }
      </div>
      {/* <DishesCardsSection  /> */}
    </div>
  );
};

export { MenuCard };
