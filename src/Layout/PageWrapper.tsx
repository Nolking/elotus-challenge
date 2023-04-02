import React from "react";
import Header from "./Header";
import Footer from "./Footer";


type PageWrapperProps = {
  children: React.ReactChild | React.ReactChild[];
};
function PageWrapper({ children }: PageWrapperProps) {
  return (
    <React.Fragment>
      <div className="page-wrapper">
        <Header></Header>
        <div>{children}</div>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}

export default PageWrapper;
