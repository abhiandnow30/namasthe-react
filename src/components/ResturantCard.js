import {reslog_URL} from '../service/constants';

const ResturantCard=({resVal}) =>{
  return(
    
    <div className ="res-card">
      <img className="res-log " alt="res.log" src={reslog_URL}></img>
    
    <h4>{resVal.data.name}</h4>
    <h4>{resVal.data.cuisines.join(
      ' '
    )}</h4>
    <h5>{resVal.data.avgRating} stars</h5>
      <h5>{resVal.data.deliveryTime} minutes</h5>
    </div>
  );
};

export default ResturantCard;