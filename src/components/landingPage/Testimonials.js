import testImage1 from "../../images/testimonials-image-1.jpeg";

import testImage2 from "../../images/testimonials-image-2.jpeg";
import arrowImage from "../../images/arrow.png";

const Testimonials = () => {
  const handleCLick = () => {
    document
      .querySelector(".first-test")
      .classList.toggle("-translate-x-[1000rem]");

    document
      .querySelector(".second-test")
      .classList.toggle("translate-x-[1000rem]");
  };

  return (
    <div className="w-full relative  bg-[rgb(237,231,231)] pb-20">
      <div className="w-10/12 mx-auto">
        <h1 className="text-6xl font-bold text-center py-24 ">
          What students say about us{" "}
        </h1>
        {/* testimonial wrapper  */}
        <div className="flex  relative h-96">
          {/*  left arrow */}
          <img
            alt="logo"
            onClick={handleCLick}
            className=" absolute left-40 top-2/4 rounded-full h-24 w-24 "
            src={arrowImage}
          ></img>
          {/*  right arrow */}
          <img
            alt="logo"
            onClick={handleCLick}
            className=" rotate-180 absolute right-40 top-2/4 rounded-full h-24 w-24 "
            src={arrowImage}
          ></img>

          {/*  1st card */}

          <div className="absolute left-[29%] top-0 first-test transition-all duration-500   w-5/12 flex flex-col items-center p-12 rounded-lg mx-auto bg-white">
            <img
              alt="logo"
              className="absolute -top-10 h-24 w-24 rounded-full"
              src={testImage1}
            ></img>
            <p className="leading-8 py-12 text-center font-semibold opacity-80">
              Tutorial book helped me in getting my first job explanation of
              every topic is so deep i enjoyed my whole learning process
            </p>

            <h1 className="text-center font-bold text-2xl"> Johnas</h1>
            <p className="text-sm">working for @gross</p>
          </div>

          {/*  2nd card */}

          <div className=" absolute top-0 left-[29%] second-test transition-all duration-500 translate-x-[1000rem]  w-5/12 flex flex-col items-center p-12 rounded-lg mx-auto bg-white">
            <img
              alt="logo"
              className="absolute -top-10 h-24 w-24 rounded-full"
              src={testImage2}
            ></img>
            <p className="leading-8 py-12 text-center font-semibold opacity-80">
              With easy and well structured way i am able to learn react and
              master it and also quiz helps me alot to make my fundamental
              stronger
            </p>

            <h1 className="text-center font-bold text-2xl"> Mattie</h1>
            <p className="text-sm">working for @sci-tech</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
