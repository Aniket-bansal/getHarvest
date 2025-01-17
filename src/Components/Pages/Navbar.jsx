import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SecondNavbar from "../SignPages/SecondNavbar";
import {Box} from '@chakra-ui/react'
const Navbar = () => {

  const navigate = useNavigate();
 const [change,setChange] = useState(false)
const handleClick = ()=>{
  navigate("/signin")
 setChange(!change)
}


  return (
    <>
      {change? <SecondNavbar/> : <Box className="nav-container">
        <Box className="nav-left">
          <Link to="/">
            <img
              src="https://www.getharvest.com/hubfs/favicon-h-1.ico"
              alt="logo"
            />
          </Link>

          <Link className="link" to="/">
            <h2 style={{ color: "#FA5D00" }}>harvest</h2>
          </Link>
        </Box>
        <hr className="left-vert-right"></hr>
        <Box className="nav-middle">
          <ul>
            <NavLink className="link" to="/whyHarvest">
              <li>Why Harvest?</li>
            </NavLink>
            <NavLink className="link" to="/features">
              <li>Features</li>
            </NavLink>
            <NavLink className="link" to="/">
              <li>Customers</li>
            </NavLink>
            <NavLink className="link" to="/">
              <li>Integration</li>
            </NavLink>
            <NavLink className="link" to="/">
              <li to="/pricing">Pricing</li>
            </NavLink>
          </ul>
        </Box>
        <Box className="nav-right">
        {
          JSON.parse(localStorage.getItem("userName"))
          ? <h4>{JSON.parse(localStorage.getItem("userName"))}</h4> 
          // : <NavLink className="link" to="/signin">
            :<p onClick={handleClick}>Sign in</p>
          // </NavLink>
        }
          <NavLink className="link" to="/signin">
            <button className="nav_li_btn" >
              <h4>Try Harvest Free</h4>
            </button>
          </NavLink>
        </Box>
      </Box>}
    </>
  );
};

export default Navbar;
