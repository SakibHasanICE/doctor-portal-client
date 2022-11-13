import React from "react";
import icon1 from "../../../assets/icons/clock.svg"
import icon2 from "../../../assets/icons/marker.svg"
import icon3 from "../../../assets/icons/phone.svg"
const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 mb-7">
      <div className="h-44 card card-side  shadow-xl bg-gradient-to-r from-secondary to-primary">
        <figure>
          <img className="pl-6" src={icon1} alt="" />
        </figure>
        <div className="card-body mt-6">
         <h2 className="card-title text-white">New movie is released!</h2>
          <p className="text-white">Click the button to watch on Jetflix app.</p>
        </div>
      </div>
      <div className="h-44 card card-side  shadow-xl bg-accent">
        <figure>
          <img className="pl-6" src={icon2} alt="" />
        </figure>
        <div className="card-body mt-6">
         <h2 className="card-title text-white">New movie is released!</h2>
          <p className="text-white">Click the button to watch on Jetflix app.</p>
        </div>
      </div>
      <div className="h-44 card card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary">
        <figure>
          <img className="pl-6" src={icon3} alt="" />
        </figure>
        <div className="card-body mt-6 text-white">
         <h2 className="card-title text-white">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
