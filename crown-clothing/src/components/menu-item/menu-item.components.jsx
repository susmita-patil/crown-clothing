import React from "react";
// import { withRouter } from "react-router-dom";
// import { withRouter } from "react-router";
import "./menu-item.styles.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";

// function withRouter(Component) {
//   function ComponentWithRouterProp(props) {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();

//     return <Component {...props} router={{ location, navigate, params }} />;
//   }

//   return ComponentWithRouterProp;
// }

let navigate;
const MenuItem = ({ title, imageUrl, size, linkUrl }) => (
  (navigate = useNavigate()),
  (
    <div
      className={`${size} menu-item`}
      onClick={() => {
        navigate(`/${linkUrl}`);
        // history.push(`/${linkUrl}`);
      }}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
);

export default MenuItem;
