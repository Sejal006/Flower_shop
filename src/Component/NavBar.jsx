import React,{useContext} from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { NavLink } from "react-router-dom";
import dark from "../DarkMode.svg";
import light from "../LightMode.svg";

function NavBar(){

   const{theme,ChangeTheme}=useContext(ThemeContext)
   console.log(theme);
   
   let ThemeStyle={};
   if(theme === 'light'){
    ThemeStyle={
         background:'#white',
         color:'#333'
    }
   }
   else{
    ThemeStyle={
        background:'#333',
        color:"white"
    }
   }


    return(
        <nav style={ThemeStyle} onClick={()=>ChangeTheme('dark')}>
        <h2>Flower Shop</h2>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contactus">ContactUs</NavLink>

       {
        theme === 'light'
        ?
        (
            <img src={dark} alt="dark"/>
        )
        :
        (
            <img src={light} alt="light"/>
        )
       }
        


     </nav>
    
    );
}

export default NavBar;