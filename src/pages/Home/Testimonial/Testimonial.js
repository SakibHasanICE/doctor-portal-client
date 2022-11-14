import React from "react";
import icon from "../../../assets/icons/quote.svg";
import img1 from "../../../assets/images/people1.png";
import img2 from "../../../assets/images/people2.png";
import img3 from "../../../assets/images/people3.png";
const Testimonial = () => {
  return (
    <div className="mt-16">
      <div className="flex justify-between">
        <div>
          <h3 className="text-primary font-bold text-md">Testimonial</h3>
          <p className="text-accent  text-2xl">What Our Patients Says</p>
        </div>
        <img className="h-32" src={icon} alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 mb-7">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
          </div>
          <div className="flex items-center mb-7">
            <figure>
              <img className="h-16 ml-7" src={img1} alt="Shoes" />
            </figure>
            <p className="font-bold ml-3">
              Winson Conway <br></br>
              <small className="font-semibold">California</small>
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
          </div>
          <div className="flex items-center mb-7">
            <figure>
              <img className="h-16 ml-7" src={img2} alt="Shoes" />
            </figure>
            <p className="font-bold ml-3">
              Winson Conway <br></br>
              <small className="font-semibold">California</small>
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
          </div>
          <div className="flex items-center  mb-7">
            <figure>
              <img className="h-16 ml-7" src={img3} alt="Shoes" />
            </figure>
            <p className="font-bold ml-3">
              Winson Conway <br></br>
              <small className="font-semibold">California</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
