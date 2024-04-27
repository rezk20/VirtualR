import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.png";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <>
      <hr className="border-t border-orange-600 shadow shadow-orange-400" />
      <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide mb-12">
          Accelerate Your{" "}
          <span className="bg-gradient-to-r from-orange-800 to-orange-500 text-transparent bg-clip-text ">
            Coding Workflow
          </span>{" "}
        </h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/2 p-2 ">
            <img src={codeImg} alt="Coding Image" />
          </div>
          <div className="w-full lg:w-1/2 pt-12 ">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex mb-12">
                <div className="text-green-500 mx-6 bg-neutral-950 h-10 w-10 p-2 justify-center items-center rounded-full">
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                  <p className="text-base text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Workflow;
