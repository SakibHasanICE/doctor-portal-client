import React from "react";
import img from '../../../assets/images/chair.png'
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
          <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
