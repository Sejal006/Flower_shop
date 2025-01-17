import React from "react";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Outlet } from "react-router-dom";


function App(){

   // const[profiles,setProfile]=useState([]);
   // const[url,setUrl]=useState('http://localhost:3000/product');
         

        return(
            <>
           <header>
            <NavBar/>
            <main>
              <Outlet/>
            </main>
           </header>
            
             
           </>
        )


    

}

export default App;