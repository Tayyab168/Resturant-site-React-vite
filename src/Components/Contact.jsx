import React from "react";

function Contact() {
  return (
    <section id="Contact">
      <div>
        <div className="flex flex-wrap justify-center text-center w-full mt-6 mb-6">
          <h1 className=" text-[35px] font-bold">
            CONTACT <span className="text-yellow-300">Us</span>{" "}
          </h1>
        </div>
        <div className="flex flex-wrap justify-evenly items-center">
          <div className="hidden sm:block">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.754473841274!2d71.64698277460359!3d29.377477449864706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b97bd11841eb5%3A0xee62cdf8d0cc7ad!2sKFC%20-%20Bahawalpur!5e0!3m2!1sen!2s!4v1717866834332!5m2!1sen!2s"
              style={{ width: 600, height: 450, border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex flex-wrap justify-center items-center flex-col">
            <h1 className=" text-[35px] font-bold mb-10 mt-10">
              GET IN <span className="text-yellow-300 ">TOUCH</span>{" "}
            </h1>
            <form action="">
              <div className="flex justify-center items-center flex-col flex-wrap gap-5">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    type="text"
                    placeholder="Name"
                    className="pl-10 pr-4 py-2 border border-gray-300 bg-black   sm:w-[350px] w-[280px] rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                </div>

                {/* >>>> */}
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    placeholder="Email"
                    className="pl-10 pr-4 py-2 border border-gray-300 bg-black rounded-md focus:outline-none focus:ring-2 sm:w-[350px] w-[280px] focus:ring-yellow-300"
                  />
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <i class="fa-solid fa-phone"></i>{" "}
                  </span>
                  <input
                    type="number"
                    placeholder="Number"
                    className="pl-10 pr-4 py-2 border border-gray-300 bg-black rounded-md focus:outline-none focus:ring-2 sm:w-[350px] w-[280px] focus:ring-yellow-300"
                  />
                </div>
                <button
                  type="submit "
                  className="border-2 border-solid border-yellow-300  px-4 py-1 rounded-lg hover:bg-yellow-400  "
                >
                  {" "}
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
