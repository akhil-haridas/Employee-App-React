import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div
      className="leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed h-[100vh]"
      style={{ backgroundImage: 'url("images/bg-rainbow.png")' }}
    >
      <div className="backdrop-blur-[5px]">
        <div className="container ml-[5rem] sm:ml-[2rem] pt-24 md:pt-36 mx-auto sm:inline flex flex-wrap flex-row md:flex-row items-center">
          <div
            onClick={() => navigate("/employees")}
            className="p-4 sm:pt-16 sm:px-8 flex flex-col sm:w-full w-[42%] xl:w-2/5 justify-center lg:items-start overflow-y-hidden"
          >
            <h1 className="my-4 md:text-5xl sm:text-2xl text-[#fff] text-[50px] text-start ml-[1rem] opacity-75 font-bold leading-tight text-center md:text-left">
              Hey
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                {" "}
                I'm AKHIL K.
              </span>
              <br></br>
              click here to open the project➡️
            </h1>
            <p className="font-sans leading-normal text-base mb-8 text-start ml-[1rem] md:text-left text-[27px]">
              I am excited about the opportunity to work for{" "}
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-yellow-500">
                Realtime Innovations
              </span>{" "}
              as a MERN Stack Developer.
            </p>
          </div>
          <div
            className="w-[47%] sm:w-full xl:w-3/5 p-12 overflow-hidden custom-cursor"
            onClick={() => navigate("/employees")}
            title="Go to the project."
          >
            <img
              className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
              src="images/macbook.svg"
              alt="macbook"
            />
          </div>
          <div className="w-full sm:pl-[2rem] pt-16 pb-6 text-sm text-center md:text-left fade-in">
            <a
              className="text-gray-500 no-underline hover:no-underline"
              href="https://akhil-k.vercel.app"
            >
              © App 2023
            </a>
            - Connect me {""}
            <a
              className="text-gray-500 no-underline hover:no-underline"
              href="https://akhil-k.vercel.app"
            >
              - akhil-k.vercel.app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
