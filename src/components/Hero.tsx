import React from "react";
import Image from "next/image";
import dp from "@/public/dp.jpg";

export default function Hero() {
  return (
    <div className="bg-blue-500 text-white text-center py-20">
      <div className=" mb-8">
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl shadow-red-900 border-4 border-black ">
          <Image src={dp} alt="Profile Picture" width={192} height={192} />
        </div>
      </div>
      <h1 className="text-4xl font-bold">
        Hi, I&apos;m Ammad Sheikh – A Web Developer & Designer
      </h1>
      <p className="mt-4 text-lg">
        Building Beautiful Websites and Creating Digital Experiences
      </p>
      <a
        href="/projects"
        className="mt-6 inline-block bg-green-500 px-8 py-3 rounded-lg text-white hover:bg-green-600 transition-all duration-300"
      >
        View My Work
      </a>
    </div>
  );
}
