import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid-cols-2 gap-8">
          <div className=" pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              About
            </p>
          </div>
          <div></div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi,I'm Induwara Subasinghe, nice to meet you.Please take a look
                around.
              </p>
            </div>
            <div>
              <p>
              I am an enthusiastic Computer Science Fresh Graduate student who is
 interested in the  Software Engineering. I can describe myself as a punctual , honest person
 and I m dedicated to anything I am interested in and my effort is growing as a good
person with a good personality, as a professional, and moving forward at every time.
 Highly self-motivated and Self-learning every day with every experience  to gain
  knowledge ,  are the main priorities and future goals in my life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
