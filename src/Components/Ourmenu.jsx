import React from "react";
import burgar from "../assets/images/burgar.png";
import fries from "../assets/images/fries.png";
import wings from "../assets/images/wings.png";
import piza from "../assets/images/piza.png";
import menu from "../assets/images/menu.png";
import coffee from "../assets/images/coffee.png";

function Ourmenu() {
  return (
    <div id="menu">
      <div
        className="flex flex-wrap justify-center items-center mt-5"
        data-aos="fade-right"
      >
        <h1 className="text-[35px] font-bold">
          OUR <span className=" text-yellow-300">MENU</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly sm:w-[90%] m-auto gap-6 mt-10">
        <div
          className="hover:bg-[#ffc107;] flex flex-wrap justify-center border-2 border-solid border-yellow-300 items-center flex-col sm:h-[350px] w-[380px] transition-colors duration-[1000ms]"
          data-aos="fade-up"data-aos-duration="800"
         
        >
          <img src={menu} alt="" />
          <h1 className="mt-2 text-[22px] font-bold">Tasty And Healty</h1>
          <div className="flex flex-wrap  gap-4 justify-center items-center mt-8">
            <h2 className="text-[35px]">$15.99</h2>
            <h1 className="line-through mt-4 text-[20px]">$20</h1>
          </div>
          <button className="border-2 ml-10 rounded-lg border-solid mt-12 font-bold border-yellow-300 p-3 bg-yellow-300 text-black transition-all duration-300 w-36 hover:w-56">
            READ MORE
          </button>
        </div>
        <div className="hover:bg-[#ffc107;] flex flex-wrap justify-center border-2 border-solid border-yellow-300 items-center flex-col sm:h-[350px] w-[380px] transition-colors duration-[1000ms]"  data-aos="fade-up-right" data-aos-duration="800">
          <img src={fries} alt="" />
          <h1 className="mt-2 text-[22px] font-bold">Tasty And Healty</h1>
          <div className="flex flex-wrap  gap-4 justify-center items-center mt-8">
            <h2 className="text-[35px]">$15.99</h2>
            <h1 className="line-through mt-4 text-[20px]">$20</h1>
          </div>
          <button className="border-2 ml-10 rounded-lg border-solid mt-12 font-bold border-yellow-300 p-3 bg-yellow-300 text-black transition-all duration-300 w-36 hover:w-56">
            READ MORE
          </button>
        </div>
        <div className="hover:bg-[#ffc107;] flex flex-wrap justify-center border-2 border-solid border-yellow-300 items-center flex-col sm:h-[350px] w-[380px] transition-colors duration-[1000ms]" data-aos="fade-up-left"data-aos-duration="800"> 
        
          <img src={burgar} alt="" />
          <h1 className="mt-2 text-[22px] font-bold">Tasty And Healty</h1>
          <div className="flex flex-wrap  gap-4 justify-center items-center mt-8">
            <h2 className="text-[35px]">$15.99</h2>
            <h1 className="line-through mt-4 text-[20px]">$20</h1>
          </div>
          <button className="border-2 ml-10 rounded-lg border-solid mt-12 font-bold border-yellow-300 p-3 bg-yellow-300 text-black transition-all duration-300 w-36 hover:w-56">
            READ MORE
          </button>
        </div>
        <div className="hover:bg-[#ffc107;] flex flex-wrap justify-center border-2 border-solid border-yellow-300 items-center flex-col sm:h-[350px] w-[380px] transition-colors duration-[1000ms]" data-aos="fade-down-right"data-aos-duration="700">
          <img src={wings} alt="" />
          <h1 className="mt-2 text-[22px] font-bold">Tasty And Healty</h1>
          <div className="flex flex-wrap  gap-4 justify-center items-center mt-8">
            <h2 className="text-[35px]">$15.99</h2>
            <h1 className="line-through mt-4 text-[20px]">$20</h1>
          </div>
          <button className="border-2 ml-10 rounded-lg border-solid mt-12 font-bold border-yellow-300 p-3 bg-yellow-300 text-black transition-all duration-300 w-36 hover:w-56">
            READ MORE
          </button>
        </div>
        <div className="hover:bg-[#ffc107;] flex flex-wrap justify-center border-2 border-solid border-yellow-300 items-center flex-col sm:h-[350px] w-[380px] transition-colors duration-[1000ms]"data-aos="fade-down-left" data-aos-duration="600">
          <img src={piza} alt="" />
          <h1 className="mt-2 text-[22px] font-bold">Tasty And Healty</h1>
          <div className="flex flex-wrap  gap-4 justify-center items-center mt-8">
            <h2 className="text-[35px]">$15.99</h2>
            <h1 className="line-through mt-4 text-[20px]">$20</h1>
          </div>
          <button className="border-2 ml-10 rounded-lg border-solid mt-12 font-bold border-yellow-300 p-3 bg-yellow-300 text-black transition-all duration-300 w-36 hover:w-56">
            READ MORE
          </button>
        </div>
        <div className="hover:bg-[#ffc107;] flex flex-wrap justify-center border-2 border-solid border-yellow-300 items-center flex-col sm:h-[350px] w-[380px] transition-colors duration-[1000ms]" data-aos="fade-up-left"data-aos-duration="800">
          <img src={coffee} alt="" />
          <h1 className="mt-2 text-[22px] font-bold">Tasty And Healty</h1>
          <div className="flex flex-wrap  gap-4 justify-center items-center mt-8">
            <h2 className="text-[35px]">$15.99</h2>
            <h1 className="line-through mt-4 text-[20px]">$20</h1>
          </div>
          <button className="border-2 ml-10 rounded-lg border-solid mt-12 font-bold border-yellow-300 p-3 bg-yellow-300 text-black transition-all duration-300 w-36 hover:w-56">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ourmenu;
