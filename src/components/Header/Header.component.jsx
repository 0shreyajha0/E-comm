import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./Header.module.scss";
import WebsiteLogo from "../../assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { NAV_ITEMS } from "./Header.constants";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const Header = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [hiddenItems, setHiddenItems] = useState([]);
  const menuContainerRef = useRef(null);

  const calculateMenuItems = useCallback(() => {
    const containerWidth = menuContainerRef.current.offsetWidth;
    const menuItemWidth = 240;

    const maxVisibleItems = Math.floor(containerWidth / menuItemWidth);
    setVisibleItems(NAV_ITEMS.slice(0, maxVisibleItems));
    setHiddenItems(NAV_ITEMS.slice(maxVisibleItems));
  }, []);

  useEffect(() => {
    calculateMenuItems();
    window.addEventListener("resize", calculateMenuItems);

    return () => {
      window.removeEventListener("resize", calculateMenuItems);
    };
  }, [calculateMenuItems]);

  return (
    <div ref={menuContainerRef} className={styles.headerContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.img} src={WebsiteLogo} alt="E-comm's logo"></img>
      </div>
      <ul className={styles.navBar}>
        {visibleItems.map((item) => (
          <li className={styles.navItem} key={item}>
            {item}
          </li>
        ))}
        {hiddenItems.length > 0 && (
          <div className={styles.dropdown}>
            <li className={styles.navItem}>
              More <MdOutlineKeyboardArrowDown style={{ marginLeft: "2px" }} />
            </li>
            <div className={styles.dropdownContent}>
              {hiddenItems.map((item) => (
                <li
                  className={`${styles.navItem} ${styles.navItemDropdown}`}
                  key={item}
                >
                  {item}
                </li>
              ))}
            </div>
          </div>
        )}
      </ul>
      <div className={styles.inputBox}>
        <CiSearch className={styles.searchIcon} />
        <input type="search" placeholder="Search Something"></input>
      </div>
    </div>
  );
};
