import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Customer = () => {
  return (
    <section className="py-16 bg-white text-center">
     
      <h2 className="dance text-4xl font-bolder mb-12 font-serif">
        What Says Our Customers
      </h2>

    
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-12 px-6">
     
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 md:w-1/3">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
          <h3 className="font-bold">Moana Michell</h3>
          <p className="text-gray-400">magna aliqua</p>
        </div>

      
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 md:w-1/3">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
          <h3 className="font-bold">Mike Hamell</h3>
          <p className="text-gray-400">magna aliqua</p>
        </div>
      </div>

      <div className="flex justify-center gap-20 mb-8">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Moana"
          className="w-20 h-20 rounded-full border-4 border-yellow-500"
        />
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Mike"
          className="w-20 h-20 rounded-full border-4 border-yellow-500"
        />
      </div>

    
      <div className="flex justify-center gap-4">
        <button className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white hover:bg-yellow-600">
          <FaChevronLeft />
        </button>
        <button className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white hover:bg-yellow-600">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Customer;
