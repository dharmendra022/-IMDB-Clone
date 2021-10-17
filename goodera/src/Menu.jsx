import React from "react";
import { NavLink } from "react-router-dom";

const Menu=()=>{
    return(
        <>
       
        
        
        <div className="menu_style">  
        <h1>Discover</h1>
        <NavLink exact activeClassName="active_class" to="/">Popular</NavLink>
        <NavLink exact activeClassName="active_class" to="/trending">Trending</NavLink>
        <NavLink exact activeClassName="active_class" to="/newest">Newest</NavLink>
        <NavLink exact activeClassName="active_class" to="/rated">Highest Rated</NavLink>
        <input type="text" placeholder="Search" className="search" />
        </div>
       
        

        </>

    )
}
export default Menu;