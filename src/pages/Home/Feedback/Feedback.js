import React from "react";
import bgImg from "../../../assets/images/appointment.png";
import Components from "../../../Components/Components";
const Feedback = () => {
  return (
    <div
      className="text-center mb-16 mt-16"
      style={{
        background: `url(${bgImg})`,
      }}
    >
      <h3 className="text-secondary font-bold mt-6 mb-1 pt-3">Contact Us</h3>
      <p className="text-white mb-3 text-2xl">Stay Connected with us</p>
      <div className="flex flex-col items-center">
        <input
          className="mb-5 rounded-md pl-3 w-1/3 py-2"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <input
          className="mb-5 rounded-md pl-3 w-1/3 py-2 "
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
        />
        <textarea
          className="mb-5 rounded-md pl-3 h-32 w-1/3 pt-2"
          name="message"
          id="message"
          placeholder="Your Message"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <Components>Submit</Components>
    </div>
  );
};

export default Feedback;
