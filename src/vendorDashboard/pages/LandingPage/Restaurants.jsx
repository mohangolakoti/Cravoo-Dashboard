import React from "react";
import { collab, collab1, comp, owner, smile1 } from "../../constants/images";
import { navLinks, partner, steps, testmonials } from "../../constants";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Restaurants = () => {
  return (
    <div className="w-full">
      <section className="flex px-10 w-full flex-col md:flex-row ">
        <div className="md:w-1/2 px-6 py-6 flex flex-col justify-center items-start leading-loose">
          <h1 className="font-Montserrat text-4xl font-bold">
            Register Your <span className="text-r-btn">Restaurant</span>
          </h1>
          <p className="font-Montserrat text-4xl font-bold">
            Expand your reach and grow your{" "}
            <span className="text-r-btn">bussiness</span>
          </p>
          <p className="text-lg font-OpenSans mt-4">
            Become a partner and start receiving more orders today
          </p>
          <Link to='/login'><button className="border border-r-logo font-OpenSans text-r-nrml px-10 py-[7px] mt-5 rounded-full bg-r-logo hover:text-r-logo hover:bg-white">
            Get Started
          </button></Link>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img src={comp} alt="image" className="h-[650px] mt-8" />
        </div>
      </section>

      <section className="px-10 py-20 w-full">
        <h2 className="text-center text-3xl font-Montserrat font-bold">
          Why Partner With Us?
        </h2>
        <div className="flex flex-col">
          {partner.map((item) => (
            <div className="flex md:flex-row flex-col-reverse md:even:flex-row-reverse py-10">
              <img
                src={item.src}
                alt="image"
                className="md:w-1/2 p-5 h-[350px] rounded-[30px] rounded-tr-[90px] "
              />
              <div className="md:w-1/2 md:p-10 p-5">
                <h2 className="font-semibold text-2xl font-Montserrat text-r-dbtn">
                  {item.title}
                </h2>
                <p className="text-lg font-OpenSans py-5">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="md:px-20 px-10">
        <h2 className="text-center text-3xl font-Montserrat font-bold">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row py-14">
          <div className="md:w-1/2 flex flex-col">
            {steps.map((step) => (
              <div className="flex flex-col py-10">
                <h2 className="text-xl font-Montserrat font-semibold text-r-dbtn">
                  <span className="text-2xl font-bold text-r-logo">
                    {step.step}:
                  </span>{" "}
                  {step.title}
                </h2>
                <p className="text-lg font-OpenSans py-2">{step.text}</p>
              </div>
            ))}
          </div>
          <img src={smile1} alt="steps" className="md:w-1/2 md:h-[80vh] h-[60vh] rounded-lg" />
        </div>
      </section>

      <section className="py-10 flex text-center items-center justify-center">
        <img src={collab1} alt="collab" className="relative flex h-[50vh] w-full blur-sm"/>
        <Link to='/register' className="flex absolute items-center justify-center"><button className="text-r-nrml md:text-4xl text-2xl font-semibold hover:border-b-2 uppercase">Register Your Restaurant</button></Link>
      </section>

      <section className="py-16 mx-10">
        <h2 className="text-center text-3xl font-Montserrat font-bold">What Our Partners Say</h2>
        <div className="flex mt-20 md:gap-6 gap-14 md:flex-row flex-col">
          {testmonials.map((test)=>(
            <div className="bg-[#ffefe8] p-5 rounded-lg">
              <div className="flex flex-col items-center">
              <img src={test.src} alt="image"  className="absolute mt-[-50px] w-[70px] border-2 border-white rounded-full"/>
              </div>
              <h3 className="text-xl font-semibold pt-9 text-r-logo text-center">{test.title}</h3>
              <p className="text-lg pt-2"><span className="text-xl font-bold text-r-dbtn">"</span>{test.text}<span className="text-xl font-bold text-r-dbtn">"</span></p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-5 bg-slate-500">
          <p className="text-center pt-10 font-medium">&copy; 2024 FoodOrdering Platform. All rights reserved.</p>
      </section>
    </div>
  );
};

export default Restaurants;
