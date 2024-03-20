import React, { useState, useEffect } from "react";
import "../styles/dyanimicmenu.css";
import a from "../assests/Logo.png";
import { CiSearch } from "react-icons/ci";

const DynamicNavigationMenu = ({ menuItems }) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [hiddenItems, setHiddenItems] = useState([]);

  const calculateMenuItems = () => {
    const containerWidth =
      document.getElementById("menu-container").offsetWidth;
    console.log(containerWidth);
    const menuItemWidth = 150;

    const maxVisibleItems = Math.floor(containerWidth / menuItemWidth);
    setVisibleItems(menuItems.slice(0, maxVisibleItems));
    setHiddenItems(menuItems.slice(maxVisibleItems));
  };

  useEffect(() => {
    calculateMenuItems();
    window.addEventListener("resize", calculateMenuItems);

    return () => {
      window.removeEventListener("resize", calculateMenuItems);
    };
  }, [menuItems]);

  return (
    <div className="nac">
      <div id="menu-container" className="menu-container">
        <div>
          <img className="icon-image" src={a}></img>
        </div>
        <ul className="main-menu">
          {visibleItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          {hiddenItems.length > 0 && (
            <>
              <div class="dropdown">
                <li class="dropbtn">More</li>
                <div class="dropdown-content">
                  {hiddenItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                  {/* <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a> */}
                </div>
              </div>
              {/* <div className="more-items" onClick={handleToggleMore}>
            More
          </div> */}
            </>
          )}
        </ul>
        <div className="inp">
          <CiSearch className="search-icon" />
          <input type="search" placeholder="Search Something"></input>
        </div>
      </div>
    </div>
  );
};

export default DynamicNavigationMenu;
