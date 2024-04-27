import "./Button.css";
// import { useContext } from "react";
// import { ButtonName } from "./HeroSection";

// eslint-disable-next-line react/prop-types
const Button = ({ name }) => {
  return (
    <button className="btn w-auto p-2" type="button">
      <strong>{name}</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
  );
};

export default Button;
