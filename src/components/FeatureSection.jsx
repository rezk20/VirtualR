import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="flex flex-col text-center  min-h-[800px] container mx-auto lg:px-14">
      {/* <h4 className=" text-5xl font-medium text-opacity-30 text-orange-600 -mb-8">
        Features
      </h4> */}

      <h3 className="my-4 text-3xl font-medium text-orange-600 rounded-full bg-neutral-950 py-1 ">
        Features
      </h3>

      <p className="text-3xl lg:text-6xl mt-6">
        Easily Build{" "}
        <span className="bg-gradient-to-r from-orange-800 to-orange-500 text-transparent bg-clip-text">
          your Code
        </span>
      </p>

      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((features, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-950 text-orange-700 justify-center items-center rounded-full">
                {features.icon}
              </div>
              <div>
                <h4 className="mt-1 mb-6 text-xl">{features.text}</h4>
                <p className="text-base p-2 mb-20 text-neutral-500">
                  {features.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
