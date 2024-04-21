import React from "react";
import './Home.css';

import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div >
      <div className="context">
      
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" , textAlign:"center"}}>
        I have Completed Task 1 <br /> <br />Quickly use below links to navigate through all pages.
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/desktopseventyfive" style={{ color: "#87CEFA", textDecoration: "none" }}>
            DesktopSeventyFive
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/desktopseventythree" style={{ color: "#87CEFA", textDecoration: "none" }}>
            DesktopSeventyThree
          </Link>
        </li>
      </ul>
      </div>
      <div class="area" > 
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    </div>

    
  );
};
export default Home;
