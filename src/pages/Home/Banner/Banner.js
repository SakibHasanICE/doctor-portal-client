import React from "react";
import img from '../../../assets/images/chair.png'
import Components from "../../../Components/Components";
import './Banner.css'
const Banner = () => {
  return (
    <div className="hero mt-10 bg-img">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={img}
          className="w-1/2 rounded-lg shadow-2xl"
       alt='' />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Components>Get Started</Components>
        </div>
      </div>
    </div>
  );
};

export default Banner;
