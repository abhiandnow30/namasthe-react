import { useEffect, useState } from 'react';
import ResturantCard from'./ResturantCard';
import Shimmer from './Shimmer';

const Body = () => {
   console.log("Rendered")

  const [listOfRestaurants, setListOfResturants]=useState([]);
  const [searchText,setSearchText] = useState("");

  const [count,setCount] = useState(0)

  useEffect(()=>{fetchData()},[]);

  // useEffect(()=>{
     
  //   console.log("componentDidmount",count)
  //   return()=>{
  //     console.log("componentwillUnmount",count)
  //   }
  // },[count])

  const fetchData=async()=>{
    const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    
    setListOfResturants(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    
  }
  const filterResturants = () => {
      const filteredRes = listOfRestaurants.filter((value,index)=>{
       return value.info.name.toLowerCase().includes(searchText.toLowerCase()) 
      })
      setListOfResturants(filterResturants)
  }
  
  //conditional rendering
  return listOfRestaurants==0 ?<Shimmer/>:(
    <div className="body">
      <div className="filter">
        <div className='search'>
             <input type="text" 
                    className='search-box' 
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value) }></input>
             <button onClick={() => filterResturants()}>search</button>

        </div>
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
