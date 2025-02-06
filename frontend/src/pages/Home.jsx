import React from "react";

const Home = () => {
  return (
    <div>
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
      />
      <div className="h-screen w-screen">
        {/*IMAGE FOR TEMPORARY USE */}
        <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" />
      </div>
      <div className="bg-white absolute">
        <h4>Find a trip</h4>
        <form>
          <input type="text" placeholder="Add a pick-up location"/>
          <input type="text" placeholder="Enter your destination"/>
        </form>
      </div>
    </div>
  );
};

export default Home;
