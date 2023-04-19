import React from "react";
import "./Connect.css";

const Connect = () => {
  return (
    <div className="parentDiv">
      <div
        className="connectMain"
        style={{
          backgroundImage:
            "url(https://woxro.com/public/assets/png/woxroglobe.png)",
        }}
      >
        <div className="connectDesc">
          We offer all kind of IT services that ensure your success
        </div>
        <div className="buttonContainer">
          <button className="buttons">Contact Us</button>
          <button className="buttons">Lets Talk</button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
