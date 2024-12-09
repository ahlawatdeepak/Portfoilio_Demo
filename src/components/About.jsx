import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        As a software developer at Manufac Analytics, I am passionate about continuous learning and dedicated to delivering outstanding results. Over my professional journey, I’ve built a solid track record of academic and professional achievements.

With over two years of experience as a full-stack developer, I have honed my expertise in technologies like React, MongoDB, Node.js, and AWS. My passion for coding, strong problem-solving skills, and curiosity for new technologies inspire me to contribute meaningfully to the software industry.

I have a strong foundation in JavaScript, TypeScript, and Next.js and am always eager to expand my skill set further. My goal is to leverage innovative solutions to tackle challenges and help create a more connected and efficient world.
        </p>
      </div>
    </div>
  );
};

export default About;
