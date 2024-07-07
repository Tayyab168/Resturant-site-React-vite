import React from "react";
import towerb from "../assets/images/towerb.png";
import coffee from "../assets/images/coffee.png";
import ice from "../assets/images/ice.png";

export function Ourproduct() {
  return (
    <section id="product">
      <div
        className="flex flex-wrap justify-center  items-center mt-5 sm:w-[95%] m-auto flex-col"
      >
        <h1 className="text-[35px] font-bold">
          OUR <span className=" text-yellow-300">PRODUCT</span>
        </h1>
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex flex-wrap justify-around flex-col items-center border-2 border-solid border-yellow-300 m-5" data-aos="flip-left">
            <div className="flex justify-center items-center mt-6    ">
              <i class="fa-solid fa-cart-shopping hover:text-yellow-300 text-[25px] sm:ml-6 border-2 border-solid border-yellow-300 p-3"></i>
              <i class="fa-solid fa-heart hover:text-yellow-300 text-[25px] sm:ml-6 border-2 border-solid border-yellow-300 p-3"></i>
              <i class="fa-regular fa-eye hover:text-yellow-300 text-[25px] sm:ml-6 border-2 border-solid border-yellow-300 p-3"></i>
            </div>
            <img
              className=" w-[auto] sm:w-[350px] sm:h-[350px] "
              src={ice}
              alt=""
            />
            <h1 className="items-center sm:text-[25px] font-bold mb-4">
              FRESH BURGAR
            </h1>
            <div className="flex flex-wrap justify-center items-center mb-4 ">
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px] "></i>
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px]"></i>
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px]"></i>
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px]"></i>
              <i class="fa-regular fa-star fa-star-half-alt text-yellow-300 sm:text-[25px]"></i>
            </div>
            <div className="flex flex-wrap  gap-4 justify-center items-center mt-8">
              <h2 className="text-[35px]">$15.99</h2>
              <h1 className="line-through mt-4 text-[20px]">$20</h1>
            </div>
          </div>
          {/* >>>>>>>>>>> */}

          <div className="flex flex-wrap justify-around flex-col items-center border-2 border-solid border-yellow-300 m-5" data-aos="flip-down">
            <div className="flex justify-center items-center mt-6    ">
              <i class="fa-solid fa-cart-shopping hover:text-yellow-300 text-[25px] sm:ml-6 border-2 border-solid border-yellow-300 p-3"></i>
              <i class="fa-solid fa-heart hover:text-yellow-300 text-[25px] sm:ml-6 border-2 border-solid border-yellow-300 p-3"></i>
              <i class="fa-regular fa-eye hover:text-yellow-300 text-[25px] sm:ml-6 border-2 border-solid border-yellow-300 p-3"></i>
            </div>
            <img
              className=" w-[auto] sm:w-[350px] sm:h-[350px] "
              src={ice}
              alt=""
            />
            <h1 className="items-center sm:text-[25px] font-bold mb-4">
              FRESH BURGAR
            </h1>
            <div className="flex flex-wrap justify-center items-center mb-4 ">
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px] "></i>
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px]"></i>
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px]"></i>
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px]"></i>
              <i class="fa-regular fa-star fa-star-half-alt text-yellow-300 sm:text-[25px]"></i>
            </div>
            <div className="flex flex-wrap  gap-4 justify-center items-center mt-8">
              <h2 className="text-[35px]">$15.99</h2>
              <h1 className="line-through mt-4 text-[20px]">$20</h1>
            </div>
          </div>
          {/* >>>>>> */}
          <div className="flex flex-wrap justify-around flex-col items-center border-2 border-solid border-yellow-300 m-5" data-aos="flip-right">
            <div className="flex justify-center items-center mt-6    ">
              <i class="fa-solid fa-cart-shopping hover:text-yellow-300 text-[25px] sm:ml-6 border-2 border-solid border-yellow-300 p-3"></i>
              <i class="fa-solid fa-heart hover:text-yellow-300 text-[25px] sm:ml-6 border-2 border-solid border-yellow-300 p-3"></i>
              <i class="fa-regular fa-eye hover:text-yellow-300 text-[25px] sm:ml-6 border-2 border-solid border-yellow-300 p-3"></i>
            </div>
            <img
              className=" w-[auto] sm:w-[350px] sm:h-[350px] "
              src={ice}
              alt=""
            />
            <h1 className="items-center sm:text-[25px] font-bold mb-4">
              FRESH ICE CREAMS
            </h1>
            <div className="flex flex-wrap justify-center items-center mb-4 ">
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px] "></i>
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px]"></i>
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px]"></i>
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px]"></i>
              <i class="fa-regular fa-star fa-star-half-alt text-yellow-300 sm:text-[25px]"></i>
            </div>
            <div className="flex flex-wrap  gap-4 justify-center items-center mt-8">
              <h2 className="text-[35px]">$15.99</h2>
              <h1 className="line-through mt-4 text-[20px]">$20</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
