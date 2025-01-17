import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";

function ProductDetail(){

const params = useParams();
console.log(params);

const{product:prof,loading}=useApi(`http://localhost:3000/product/${params.pid}`);
const navigate=useNavigate();
    return(
       <div>  
        
        { prof &&( 
      <>
        <p> Product Detail </p>

       <h2> {prof.id} </h2>
       <h2> {prof.name} </h2>
       <h2> {prof.category} </h2>
       <h2> {prof.price} </h2>
        </>
        
     ) }
        <button className="btn btn-success" onClick={
            ()=>setTimeout(
                ()=>{
                    navigate(`/product`)
                },2000)
        }
           
        >Go Back</button>
        
         </div>
      
    
    );
}

export default ProductDetail;