import React from "react";
import icon1 from "../../../assets/images/fluoride.png";
import icon2 from "../../../assets/images/cavity.png";
import icon3 from "../../../assets/images/whitening.png";
const TreatmentCard = () => {
  return (
    <div className="mt-16">
      <h3 className="text-center text-secondary font-bold">Our Services</h3>
      <h1 className="text-center text-2xl ">Services We Provide</h1>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 mt-4 mb-7">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={icon1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>

        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={icon2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={icon3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
