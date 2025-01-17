
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

function Card(props){
    return(
        <div className="card" style={{width:400}} id="a">
  <img className="card-img-top" src={props.pic_url} alt="Card image"/>
  <div className="card-body">
  <h4 className="card-title">{props.id}</h4>
    <h4 className="card-title">{props.category}</h4>
    <p className="card-text">{props.name}</p>
   <h5 className="card-title">{props.price}</h5>
   <p>
    <Link to={`/product/${props.id}`}>ReadMore</Link>
   </p>
  </div>
</div>
    
    );
}
export default Card;