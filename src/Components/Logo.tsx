import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  const clickHanlder = () => {};
  return (
    <h2 className="logo col-light">
      <Link to={"/"} onClick={clickHanlder}>
        MOVIES
      </Link>
    </h2>
  );
};
export default Logo;
