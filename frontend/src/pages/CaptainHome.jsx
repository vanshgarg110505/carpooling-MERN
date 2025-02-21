import React from "react";
import { Link } from "react-router-dom";

const CaptainHome = () => {
  return (
    <div className="h-screen">
      <div className="fixed p-3 top-0 flex items-center justify-between w-screen">
        <img className="w-16" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link
          to="/"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full  "
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div className="h-1/2 p-4">
        <div>
          <div>
            <img src="" alt="" />
            <h4>Harsh Patel</h4>
          </div>
          <div>
            <h4>₹295.0</h4>
            <p>Earned</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CaptainHome;
