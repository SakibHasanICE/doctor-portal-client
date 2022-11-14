import React from 'react';
import img from '../../../assets/images/doctor.png'
import bgImg from '../../../assets/images/appointment.png'
import Components from '../../../Components/Components';
const AppointmentHomeCard = () => {
    return (
        <div className="hero  mt-32"
        style={{
            background:`url(${bgImg})`
            
        }}
        >
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="w-1/2 hidden lg:block -mt-32 rounded-lg shadow-2xl" alt=''/>
          <div className="ml-20">
            <h1 className="text-5xl font-bold text-white ">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The point
              of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop publishing
              packages and web page
            </p>
            <Components>Getting started</Components>
          </div>
        </div>
      </div>
    );
};

export default AppointmentHomeCard;