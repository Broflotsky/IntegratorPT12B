import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { onSearch } = props;

  return (
    <div className={styles.navbar}>
      <div className={styles.wrapperLink}>
        <Link className={styles.link} to={"/home"}>
          Home
        </Link>
        <Link className={styles.link} to={"/about"}>
          About
        </Link>
        <Link className={styles.link} to={"/favorites"}>
          Favorites
        </Link>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default NavBar;
