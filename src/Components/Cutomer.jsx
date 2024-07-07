import React from "react";
import dow from "../assets/images/dow.png";

function Cutomer() {
  return (
    <>
      <section id="REVIEW">
        <div className="flex flex-wrap justify-center items-center">
          <h1 className="text-[35px] font-bold mb-5">
            CUSTOMER <span className=" text-yellow-300">REVIEW</span>
          </h1>
        </div>
        <section className="flex flex-wrap justify-evenly items-center w-[95%] m-auto    ">
          <div className="flex flex-wrap mt-3 justify-center items-center flex-col border-2 border-solid border-yellow-300  ">
            <i class="fa-solid fa-quote-right  p-1 sm:text-[55px] text-yellow-300"></i>
            <p className=" w-auto sm:w-[400px] text-center p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              corporis odio, temporibus molestiae perferendis delectus quod
              repellendus commodi deserunt fugit necessitatibus quas, quam
              quibusdam praesentium nulla mollitia maxime laboriosam voluptas,
              ducimus consequatur obcaecati? Praesentium placeat dicta assumenda
              inventore! Dolores, laboriosam.
            </p>
            <img className="rounded-[50%] p-2" src={dow} alt="" />
            <h1 className="p-2"> Jhon Doe</h1>
            <div className="flex flex-wrap justify-center items-center mb-4 ">
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px] "></i>
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px]"></i>
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px]"></i>
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px]"></i>
              <i class="fa-regular fa-star fa-star-half-alt text-yellow-300 sm:text-[25px]"></i>
            </div>
          </div>
          <div className="flex mt-3 flex-wrap justify-center items-center flex-col border-2 border-solid border-yellow-300  ">
            <i class="fa-solid fa-quote-right  p-1 sm:text-[55px] text-yellow-300"></i>
            <p className="sm:w-[400px] text-center p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              corporis odio, temporibus molestiae perferendis delectus quod
              repellendus commodi deserunt fugit necessitatibus quas, quam
              quibusdam praesentium nulla mollitia maxime laboriosam voluptas,
              ducimus consequatur obcaecati? Praesentium placeat dicta assumenda
              inventore! Dolores, laboriosam.
            </p>
            <img className="rounded-[50%] p-2" src={dow} alt="" />
            <h1 className="p-2"> Jhon Doe</h1>
            <div className="flex flex-wrap justify-center items-center mb-4 ">
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px] "></i>
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px]"></i>
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px]"></i>
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px]"></i>
              <i class="fa-regular fa-star fa-star-half-alt text-yellow-300 sm:text-[25px]"></i>
            </div>
          </div>

          <div className="flex flex-wrap mt-3 justify-center items-center flex-col border-2 border-solid border-yellow-300  ">
            <i class="fa-solid fa-quote-right  p-1 sm:text-[55px] text-yellow-300"></i>
            <p className="sm:w-[400px] text-center p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              corporis odio, temporibus molestiae perferendis delectus quod
              repellendus commodi deserunt fugit necessitatibus quas, quam
              quibusdam praesentium nulla mollitia maxime laboriosam voluptas,
              ducimus consequatur obcaecati? Praesentium placeat dicta assumenda
              inventore! Dolores, laboriosam.
            </p>
            <img className="rounded-[50%] p-2" src={dow} alt="" />
            <h1 className="p-2"> Jhon Doe</h1>
            <div className="flex flex-wrap justify-center items-center mb-4 ">
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px] "></i>
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px]"></i>
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px]"></i>
              <i class="fa-regular fa-star text-yellow-300 sm:text-[25px]"></i>
              <i class="fa-regular fa-star fa-star-half-alt text-yellow-300 sm:text-[25px]"></i>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Cutomer;
