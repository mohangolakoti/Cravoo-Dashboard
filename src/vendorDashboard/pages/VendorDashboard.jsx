import React from "react";
/* import { Login,Register,AddFirm,AddProduct } from '../components/forms'
import AllProducts from '../components/AllProducts' */

import { order,orders1, shift, cards,soldOut, revenue } from "../constants";

function VendorDashboard() {
    const firmName = localStorage.getItem("firmName");
    const date = new Date().toDateString()
  return (
      <div className="bg-[#30638E] text-white min-h-screen overflow-auto w-full py-8 px-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{firmName} Restaurant</h1>
          <div className="flex items-center">
            <p className="text-gray-400 mr-4">Period</p>
            <div className="relative">
              <button className="bg-gray-800 px-4 py-2 rounded-md">
                {date}
              </button>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="bg-[#D1495B] p-4 rounded-md">
            <div className="flex justify-between">
              <img src={revenue} className="rounded-full border p-2 border-white" alt="order" />
              <div ></div>
              <span className="text-lg">2.5%</span>
            </div>
            <h2 className="text-xl ffont-normal mt-20 mb-2">Today's Revenue</h2>
            <p className="text-2xl font-bold">$1,275,59</p>
          </div>
          {cards.map((prod)=>
          <div className="bg-[#003D58] p-4 rounded-md">
            <div className="flex justify-between">
              <img className="rounded-full border p-2 border-[#D1495B]" src={order} alt="order" />
              <span className="text-lg text-[#EDAE49]">{prod.percent}</span>
            </div>
            <h2 className="text-xl font-normal mt-20 mb-2">{prod.title}</h2>
            <p className="text-2xl font-bold">
            {prod.orders}<span className="font-normal text-xl"> Orders</span>
            </p>
          </div>)}
        </div>
        <div className="flex w-full md:flex-row flex-col">
          <div className="bg-[#003D58] p-6 rounded-md mt-6 w-full h-full max-[420px]:px-4">
            <h2 className="text-xl font-bold mb-2">Sold Out Menu</h2>
            {soldOut.map((item)=>
            <div className="flex justify-between text-xl bg-[#0e2a36] px-4 py-2 my-2 items-center rounded-lg">
              <p>
                <span className="font-bold mr-5">{item.index}</span>{item.item}
              </p>
              <button className="border border-[#D1495B] text-[#D1495B] max-[420px]:px-2 px-4 py-1 rounded-lg">
                Details
              </button>
            </div>
            )}
          </div>
          <div className="bg-[#003D58] p-6 rounded-md mt-6 w-full md:ml-4 max-[420px]:px-4">
            <h2 className="text-xl font-bold mb-2">Today's Shift</h2>
            {shift.map((person)=>
            <div className="flex justify-between text-xl bg-[#0e2a36] px-4 py-2 my-2 items-center rounded-lg">
              <p>
                <span className="font-bold mr-5">{person.img}</span>{person.name}
              </p>
              <button className="border border-[#00798C] first:bg-[#EDAE49] max-[420px]:px-2  bg-[#00798C] px-4 py-1 rounded-lg">
                {person.role}
              </button>
            </div>
            )}
          </div>
        </div>
      </div>
  );
}

export default VendorDashboard;
