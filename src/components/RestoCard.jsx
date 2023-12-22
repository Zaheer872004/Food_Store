import { URL } from "../utils/JsonData";

const RestoCard = (props) => {

const {name,cuisines,star,prices,areaName,imagelink, cloudnaryimageId, area} = props;

//
    return (
            
      <div className='resto-card'>
        <div className="item-container">
        <img className="food-img" src={ URL + '/' + cloudnaryimageId} alt="photos" />
            <h3 className="item">{name}</h3>
            <p className="item">{cuisines}</p>   
            <p className="item">{star} Star </p>
            {/* <p className="item">{star} Star </p> */}
            <p className="item">{prices}</p>
            <p className="item">{areaName}</p>
            <p className="item">{area}</p>

        </div>
      </div>
    )
  }
  
  export default RestoCard;
  