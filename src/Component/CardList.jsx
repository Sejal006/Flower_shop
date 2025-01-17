import React,{useState} from "react";
import Card from "./Card";
import useApi from "../hooks/useApi";

function CardList(){
   // const[profile,setProfile]=useState([]);

    const[url,setUrl]=useState('http://localhost:3000/product');

    
 
   
    const{profile:prod,loading}=useApi(url);
    console.log(loading);


    return(
     <> 

<header>
    <div>
         <button id="Button" className="btn btn-warning" onClick={()=>{setUrl('http://localhost:3000/product')}}>All</button>
        <button  id="Button" className="btn btn-warning"  onClick={()=>{setUrl('http://localhost:3000/product?category=White Flower Bouquet')}}>Bouquet</button>
        <button id="Button" className="btn btn-warning" onClick={()=>{setUrl('http://localhost:3000/product?category=Custom Floral Designs')}}> Tulip</button>
    </div>

    
</header>
     <main> 

     <div>{loading && 'Loading...'}</div>
        {
        prod && prod.map((p,ind)=>{
       return<Card{...p} key={ind}/>;
         })}

      </main>
     </>
        
    
    );
}
export default CardList;