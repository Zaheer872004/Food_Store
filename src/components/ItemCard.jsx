import React, { useState } from 'react';
import Shammer from './Shammer';

const ItemCard = (props) => {
    // const [feedData, setFeedData ] = useState([]);

    // setFeedData([...props.info]);
    // ₹

    const {
        id,
        name,
        cloudinaryImageId,
        locality,
        areaName,
        costForTwo,
        cuisines,
        avgRating,
    } = props.info;

    if (!props.info) {
        return <Shammer />;
    }
    console.log(props.info.name)

    return (
        <div className="bg-white drop-shadow-lg rounded-lg border hover:ring-1 hover:border-gray-400 flex flex-row flex-wrap ">
            <div className="flex flex-col">
                <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                    alt={name}
                    className="object-cover border rounded-lg"
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{name}</h2>
                    <p className="text-gray-600 text-sm">
                        {locality}, {areaName}
                    </p>
                    <p className="text-gray-800 font-medium mt-2">
                        Cost for Two: {costForTwo}
                    </p>
                    <p className="text-gray-800 font-medium">
                        Cuisines: {cuisines.join(', ')}
                    </p>
                    <div className="flex items-center mt-2">
                        <span className="bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full">
                            {avgRating} ★
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default ItemCard;
