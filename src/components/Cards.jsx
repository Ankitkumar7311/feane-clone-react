import React from "react";
import images1 from '../assets/de-4.png'
import d5 from '../assets/de-5.png'
import d6 from '../assets/de-3.png'
import d7 from '../assets/de-6.png'
import d8 from '../assets/de-7.png'
import d9 from '../assets/de-8.png'
import d10 from '../assets/de-9.png'
import d11 from '../assets/de-10.png'


const Cards = () => {
  let cardss = [
    {
      img: `${d6}`,
      content: "Delicious Pizza",
      para: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: [{ cost: "$20", cart: "🛒" }],
    },
    {
      img: `${images1}`,
      content: "Delicious Burger",
      para: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: [{ cost: "$15", cart: "🛒" }],
    },
    {
      img: `${d5}`,
      content: "Delicious Pizza",
      para: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: [{ cost: "$17", cart: "🛒" }],
    },
    {
      img: `${d7}`,
      content: "Delicious Pasta",
      para: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: [{ cost: "$18", cart: "🛒" }],
    },
    {
      img: `${d8}`,
      content: "French Fries",
      para: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: [{ cost: "$12", cart: "🛒" }],
    },
    {
      img:`${d9}`,
      content: "Delicious Pizza",
      para: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: [{ cost: "$19", cart: "🛒" }],
    },
    {
      img: `${d10}`,
      content: "Delicious Pizza",
      para: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: [{ cost: "$21", cart: "🛒" }],
    },
    {
      img: `${d5}`,
      content: "Healthy Salad",
      para: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: [{ cost: "$16", cart: "🛒" }],
    },
    {
      img: `${d6}`,
      content: "Delicious Pizza",
      para: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: [{ cost: "$22", cart: "🛒" }],
    },
  ];

  return <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cardss.map((val, i) => (
        <div
          className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
        >
       
          <div className="flex justify-center items-center p-6">
            <img
              src={val.img}
              alt={val.content}
              className="w-36 rounded-full h-36 object-contain transition-transform duration-500 hover:scale-110"
            />
          </div>

          
          <div className="bg-gray-900 text-white rounded-t-3xl p-5">
            <h3 className="text-lg font-semibold mb-2">{val.content}</h3>
            <p className="text-sm text-gray-300">{val.para}</p>

            <div className="flex justify-between items-center mt-4">
              <span className="font-bold text-xl">{val.price[0].cost}</span>
              <button className="bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-500 transition">
                {val.price[0].cart}

              </button>
              
            </div>

          </div>

        </div>

      ))}



    </div>

  );
  <button className="mt-[20px] bg-yellow-400 text-white px-9 py-3 rounded-full
               font-semibold hover:bg-yellow-500 transition  ml-[45%] ">
                View More
              </button>
  </>
};

export default Cards;
