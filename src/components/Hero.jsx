import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 text-center">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm <span className="text-green-400">Tran Duong Tien</span></h1>
      
      <TypeAnimation
        sequence={[
          "Backend Developer",
          2000,
          "Computer Science Student",
          2000,
          "Loves Clean Code ",
          2000,
        ]}
        wrapper="span"
        speed={50}
        className="text-xl text-green-300"
        repeat={Infinity}
      />
    </div>
  );
}

export default Hero;
