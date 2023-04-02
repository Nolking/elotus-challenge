import React from "react";
import Logo from "../Components/Logo";
import SearchBar from "../Components/SearchBar";

const Header = function () {
  return (
    <header className="header">
      <Logo> </Logo>
      <SearchBar></SearchBar>
    </header>
  );
};

export default Header;
