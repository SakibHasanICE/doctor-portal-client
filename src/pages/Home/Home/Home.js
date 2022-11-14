import React from "react";
import AppointmentHomeCard from "../AppointmentHomeCard/AppointmentHomeCard";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Dental from "../Dental/Dental";
import Testimonial from "../Testimonial/Testimonial";
import TreatmentCard from "../TreatmentCard/TreatmentCard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Card></Card>
      <TreatmentCard></TreatmentCard>
      <Dental></Dental>
      <AppointmentHomeCard></AppointmentHomeCard>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
