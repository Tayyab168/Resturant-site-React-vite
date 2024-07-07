import React from "react";

function Home() {
  return (
    <section id="home" className="home h[90vh]">
    <div className="flex flex-col  flex-wrap items-start w-[80%] m-auto">
      <h2 className="max-w-[50%] mt-28 text-[55px] font-bold ">
        Fresh <span className="text-yellow-300">Food In The </span> Morning
      </h2>
      <p className="sm:max-w-[60%] sm:text-[20px] tracking-wider mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam animi
        voluptatum quaerat repellat nam odit natus cupiditate temporibus ex
        iusto!
      </p>
      <button className="border-2 ml-10 rounded-lg border-solid mt-12 font-bold border-yellow-300 p-3 bg-yellow-300 text-black transition-all duration-300 w-36 hover:w-56">
              READ MORE
            </button>
    </div>
  </section>
  );
}

export default Home;
