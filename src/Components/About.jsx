import React from "react";
import about from "../assets/images/about.jpg";

function About() {
  return (
    
    <div className="" >
      <section id="about">
        <div className="flex flex-wrap justify-center text-center w-full mt-6">
          <h1 className=" text-[35px] font-bold">
            About <span className="text-yellow-300">Us</span>{" "}
          </h1>
        </div>

        <div className="flex flex-wrap justify-around items-center max-w-[92%]  m-auto">
          <div>
            <img className=" w-auto sm:max-w-[600px]  " src={about} alt="" />
          </div>
          <div className="sm:w-[50%] ml-2">
            <h1 className="font-bold text-[20px] mb-4 sm:text-[25px] sm:font-bold">
              What Makes Our Food Special?
            </h1>
            <p className="sm:w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              reiciendis iusto nostrum ea incidunt ipsam quasi reprehenderit
              ullam, cumque ipsum? Repellat quaerat officia ratione rerum, at
              fugiat illo porro reprehenderit. <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis voluptas est labore expedita quaerat quod eligendi
              tempore, praesentium odit eveniet!
            </p>
            <button className="border-2 ml-10 rounded-lg border-solid mt-12 font-bold border-yellow-300 p-3 bg-yellow-300 text-black transition-all duration-300 w-36 hover:w-56">
              READ MORE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
