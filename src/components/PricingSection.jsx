import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import Button from "./Button";

const PricingSection = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col justify-center text-center font-semibold mb-10">
        <h2 className="text-6xl opacity-20 -mb-9 ">Pricing</h2>
        <h4 className="text-4xl">Pricing</h4>
      </div>

      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-700 to-orange-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-4xl mt-6 mr-2 ">{option.price}</span>
                <span className="text-neutral-500 tracking-tight">/Month</span>
              </p>

              <ul>
                {option.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex mt-8 items-center text-neutral-500"
                  >
                    <CheckCircle2 />
                    <span className="ml-2 text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 ">
                <Button name={"Subscribe"} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
