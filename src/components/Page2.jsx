import React from "react";

const Page2 = () => {
  let card1 = [
    {
      img: "https://themewagon.github.io/feane/images/o1.jpg", // Burger Image
      para: "Tasty Thursdays",
      dis: "20% Off",
      btn: "Order Now 🛒",
    },
    {
      img: "https://themewagon.github.io/feane/images/o2.jpg", // Pizza Image
      para: "Pizza Days",
      dis: "15% Off",
      btn: "Order Now 🛒",
    },
  ];

  return (
    <section className="grid grid-cols-2 gap-10 justify-center p-12 bg-white">
      {card1.map((ele, ind) => {
        let { img, para, dis, btn } = ele;
        return (
          <div
            
            className="bg-[#232B38] text-white flex items-center gap-10 p-10 rounded-xl shadow-xl w-[550px] h-[210px] ml-[50px]"
          >
          
            <div className="flex-shrink-0 w-38 h-36 rounded-full border-4 border-yellow-400 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transform transition duration-300 hover:scale-110"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </div>

         
            <div>
              <p className="italic text-xl">{para}</p>
              <h2 className="text-3xl font-bold">{dis}</h2>
              <button className="mt-4 bg-yellow-400 text-black px-6 py-3 rounded-full
               font-semibold hover:bg-yellow-500 transition">
                {btn}
              </button>
            </div>
          </div>
        );
      })}

        <section className="ml-[40%]">
          
      <h1 className="dance text-5xl  mt-30 ml-[30px]  ">Our Menu</h1>
       <ul className="mt-10 mr-[100px] flex gap-20 text-2xl ">
         <a href="" ><button className=" bg-yellow-400 text-black px-8 py-2 rounded-full
               font-semibold hover:bg-yellow-500 transition mt-[-20px]">
                All
              </button></a>
         <a href="">Burger</a>
         <a href="">Pizza</a>
         <a href="">Pasta</a>
         <a href="">Fries</a>
      </ul>
        </section>

    </section>
  );
};

export default Page2;
