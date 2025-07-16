import { useState } from 'react';
import ResturantCard from'./ResturantCard';
import { listOfRestaurants1 } from './../service/mockdata';

const Body = () => {
 
  const [listOfRestaurants, setListOfResturants]=useState(listOfRestaurants1);
  return(
    <div className="body">
      <div className="filter">
        <button
        className='filter-btn'
        onClick={()=>{
         setListOfResturants(listOfRestaurants.filter(
            (res) => res.data.avgRating >= 4
          ))
        }}>
          Top Rated Restuarants
        </button>
      <div className="res-container">
        {listOfRestaurants.map((res,i)=>{
          return <ResturantCard key={i} resVal={res}/>
        })}
      
     
      </div>
    </div>
    </div>
  );
};
export default Body;
