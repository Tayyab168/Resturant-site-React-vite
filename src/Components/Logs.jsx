import React from "react";
import food from "../assets/images/food.jpeg";
import sandwich from "../assets/images/sandwich.jpeg";
import juice from "../assets/images/juice.jpeg";

function Logs() {
  return (
    <section id="blogs">
      <div>
        <div className="flex flex-wrap justify-center items-center mt-5">
          <h1 className="text-[35px] font-bold">
            OUR <span className=" text-yellow-300">BLOGS</span>
          </h1>
        </div>
        <div className="flex flex-wrap justify-around items-center ">
          <div className="overflow-hidden ml-2 border-yellow-300 border-2 border-solid max-w-[430px] bg-black h-[500px] flex flex-wrap justify-evenly items-center flex-col font-bold text-center  "data-aos="zoom-in-left">
            <img
              className="transform transition-transform duration-300 hover:scale-105 m-[-30px] overflow-hidden rounded-b-[15px] items-center"
              src={food}
              alt=""
            />
            <h1 className="text-[25px] mt-3 text-white z-40">
              Tasty And Refreshing Spices
            </h1>
            <h3 className="text-yellow-300">By Admin / 21st May, 2021</h3>
            <p className="text-center text-white">
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non,
              Dicta.
            </p>
            <button className="border-2 ml-10 rounded-lg border-solid border-yellow-300 p-3 bg-yellow-400 text-white transition-all duration-300 w-32 hover:w-48">
              READ MORE
            </button>
          </div>

          <div className="overflow-hidden ml-2 border-yellow-300 border-2 border-solid max-w-[430px] bg-black h-[500px] flex flex-wrap justify-evenly items-center flex-col font-bold text-center mt-2 "data-aos="zoom-in">
            <img
              className="transform transition-transform duration-300 hover:scale-105 m-[-30px] overflow-hidden rounded-b-[15px] items-center"
              src={sandwich}
              alt=""
            />
            <h1 className="text-[25px] mt-3 text-white z-40">
              Tasty And Refreshing Spices
            </h1>
            <h3 className="text-yellow-300">By Admin / 21st May, 2021</h3>
            <p className="text-center text-white">
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non,
              Dicta.
            </p>
            <button className="border-2 ml-10 rounded-lg border-solid border-yellow-300 p-3 bg-yellow-400 text-white transition-all duration-300 w-32 hover:w-48">
              READ MORE
            </button>
          </div>
          <div className="overflow-hidden ml-2 border-yellow-300 border-2 border-solid max-w-[430px] bg-black h-[500px] flex flex-wrap justify-evenly items-center flex-col font-bold text-center mt-2 "data-aos="zoom-in-left">
            <img
              className="transform transition-transform duration-300 hover:scale-105 m-[-30px] overflow-hidden rounded-b-[15px] items-center"
              src={juice}
              alt=""
            />
            <h1 className="text-[25px] mt-3 text-white z-40">
              Tasty And Refreshing Spices
            </h1>
            <h3 className="text-yellow-300">By Admin / 21st May, 2021</h3>
            <p className="text-center text-white">
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non,
              Dicta.
            </p>
            <button className="border-2 ml-10 rounded-lg border-solid border-yellow-300 p-3 bg-yellow-400 text-white transition-all duration-300 w-32 hover:w-48">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Logs;
