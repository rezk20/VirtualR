/* eslint-disable no-unused-vars */
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR Build Tools{" "}
        <span className="bg-gradient-to-r from-orange-700 to-orange-400 text-transparent bg-clip-text">
          For Developers
        </span>
      </h1>

      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        suscipit repellat quo reiciendis perferendis possimus architecto magni,
        quos aspernatur consequatur ex doloribus excepturi a incidunt dolores
        minima corrupti, consequuntur vitae!
      </p>

      <div className="mt-10 ">
        <Button name={"Try It Free"} />
      </div>

      <div className="flex my-10 justify-center lg:px-16">
        <video
          //   autoPlay
          loop
          muted
          className="w-1/2 rounded-lg border border-orange-700 shadow-orange-400 mx-2 my-4 "
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          //   autoPlay
          loop
          muted
          className="w-1/2 rounded-lg border border-orange-700 shadow-orange-400 mx-2 my-4 "
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
