import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People{" "}
        <span className="bg-gradient-to-r from-orange-800 to-orange-500 text-transparent bg-clip-text">
          Are Saying
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 ">
            <div className="bg-neutral-950 rounded-md p-6 text-base border border-neutral-800 font-thin">
              <div className="flex mb-6 items-start">
                <img
                  className="w-12 mr-4 rounded-full border border-neutral-500"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <h5>{testimonial.user}</h5>
                  <span className="text-neutral-600 text-sm font-normal italic">
                    {testimonial.company}
                  </span>
                </div>
              </div>
              <p>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
