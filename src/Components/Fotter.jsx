import React from "react";

function Fotter() {
  return (
    <>
      <div className="">
        <div className="flex flex-wrap justify-center items-center flex-col bg-[#13131a]  sm:h-[300px] h-auto mt-16">
          <div data-aos="fade-left">
            <i
              class=" fa-brands fa-facebook text-[30px] p-4 border-2 border-solid border-yellow-400 hover:bg-yellow-300 rounded-[50%] ml-5 "
              data-aos="fade-left"
              data-aos-duration="500"
            ></i>
            <i
              class=" fa-brands fa-instagram  text-[30px] p-4 border-2 border-solid border-yellow-400 hover:bg-yellow-300 rounded-[50%] ml-5"
              data-aos="fade-left"
              data-aos-duration="1000"
            ></i>
            <i
              class=" fa-brands fa-pinterest text-[30px] p-4 border-2 border-solid border-yellow-400 hover:bg-yellow-300 rounded-[50%] ml-5"
              data-aos="fade-left"
              data-aos-duration="1500"
            ></i>
            <i
              class=" fa-brands fa-linkedin text-[30px] p-4 border-2 border-solid border-yellow-400 hover:bg-yellow-300 rounded-[50%] ml-5"
              data-aos="fade-left"
              data-aos-duration="2000"
            ></i>
            <i
              class=" fa-brands fa-youtube text-[30px] p-4 border-2 border-solid border-yellow-400 hover:bg-yellow-300 rounded-[50%] ml-5"
              data-aos="fade-left"
              data-aos-duration="2500"
            ></i>
          </div>
          <div className="flex flex-wrap justify-evenly items-center mt-10 ">
            <button className=" w-[120px] ml-5 border-2 mt-2 border-solid border-yellow-400 p-3 hover:bg-yellow-400 px-5">
              Home
            </button>
            <button className=" w-[120px] ml-5 border-2 border-solid mt-3 border-yellow-400 p-3 hover:bg-yellow-400 px-5">
              ABOUT
            </button>
            <button className=" w-[120px] ml-5 border-2 border-solid mt-3 border-yellow-400 p-3 hover:bg-yellow-400 px-5">
              MENU
            </button>
            <button className=" w-[120px] ml-5 border-2 border-solid mt-3 border-yellow-400 p-3 hover:bg-yellow-400 px-5">
              PRODUCT
            </button>
            <button className=" w-[120px] ml-5 border-2 border-solid mt-3 border-yellow-400 p-3 hover:bg-yellow-400 px-5">
              REVIEW
            </button>
            <button className="ml-5 border-2 border-solid border-yellow-400 p-3 hover:bg-yellow-400 px-5 mt-3">
              CONTACT
            </button>
            <button className=" w-[120px] ml-5 border-2 border-solid border-yellow-400 p-3 hover:bg-yellow-400 mt-3 px-5">
              BLOGS
            </button>
          </div>
          <div>
            <p className="flex flex-wrap justify-evenly items-center mt-10  text-[25px]">
              Created By.{" "}
              <span className="text-yellow-400"> APNA RESTTURANT</span> | All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fotter;
