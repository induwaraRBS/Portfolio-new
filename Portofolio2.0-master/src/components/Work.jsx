import React from "react";
import Pizza from "../assets/pizza.png";
import biodoor from "../assets/biodoor.jpg";
import bookshop from "../assets/booshop.jpg";
import giftofblood from "../assets/giftofblood.png";
import mobile from '../assets/game.jpg'
import mechdate from '../assets/mechdate.jpg'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">//Check out some of my recent works</p>
        </div>
       
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          <div
            style={{ backgroundImage: `url(${giftofblood}` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
          
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center">
                <p className="my-4">Gift Of Blood Blood donation system</p>
                <a href="https://github.com/induwaraRBS/GiftofBlood-FE-">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${mechdate}` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
           
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center">
              <p className="my-4">Web Application for make Appointments for mechanics</p>
                <a href="https://github.com/induwaraRBS/MECHDATE">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg">
                    Code
                  </button>
                </a>
               
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${bookshop}` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
         
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center">
              <p className="my-4">Desktop Application for Book shop</p>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg">
                    Code 
                  </button>
                </a>           
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${biodoor}` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
         
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center">
              <p className="my-4">Bio metric Door Security system</p>
                <a href="https://github.com/haritha99ch/PUSL2022Coursework">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${mobile}` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center">
              <p className="my-4">Social Media Mobile Application for Gamers</p>
                <a href="https://github.com/haritha99ch/PUSL2023CourseWork">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-700 font-bold text-lg">
                   Code
                  </button>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
