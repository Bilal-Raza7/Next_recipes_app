import Image from "next/image";
import RecipieData from "./RecipieData";
import Marquee from "react-fast-marquee";
import heroImage from "./heroImage.png";

export default function Home() {
  return (
    <>
      {/* <div className="ml-6 mt-6">
        <p className="">
          <span className="bg-green-500 rounded-l-lg p-[13px] text-lg text-white">
            Eat Healthy
          </span>
          <span className="border border-sm border-green-500 text-green-500 p-3 text-lg">
            Stay Healthy
          </span>
        </p>
      </div> */}
      <div className="hero min-h-screen bg-gradient-to-b from-green-50 to-green-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={heroImage}
            width={500}
            height={500}
            alt="image"
            className="lg:w-1/2 xl:w-2/5 md:w-3/5 w-full rounded-lg "
          />
          <div>
            <h1 className="text-5xl font-bold">
              Be The <span className="text-green-500">First</span> To Prepare It
              By Yourself
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-green-500 hover:bg-transparent hover:text-green-500 hover:border-green-500 text-white text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <RecipieData />
      <div className="testomonieals m-5">
        <p className="text-xl lg:text-7xl md:text-5xl sm:text-3xl text-center mb-6">
          Testimonials
        </p>
        <Marquee speed={80} autoFill={true} pauseOnHover={true}>
          <div className="card lg:w-96 md:w-80 w-74 bg-base-100 shadow-xl border-l-4 border-green-500 m-6 bg-gradient-to-l hover:from-green-50 hover:to-green-200">
            <div className="card-body">
              <h2 className="card-title text-green-500">Simply amazing!</h2>

              <p>
                &quot;This recipe elevated my cooking game to a whole new level.
                Highly recommended!&quot; -<strong>Sarah</strong>
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card lg:w-96 md:w-80 w-74 bg-base-100 shadow-xl border-l-4 border-green-500 m-6 bg-gradient-to-l hover:from-green-50 hover:to-green-200">
            <div className="card-body">
              <h2 className="card-title text-green-500">
                Deliciously easy to follow!{" "}
              </h2>
              <p>
                &quot;My family loved every bite. This recipe is now a weekly
                favorite&quot;-<strong> Mark</strong>
              </p>

              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card lg:w-96 md:w-80 w-74 bg-base-100 shadow-xl border-l-4 border-green-500 m-6 bg-gradient-to-l hover:from-green-50 hover:to-green-200">
            <div className="card-body">
              <h2 className="card-title text-green-500">
                Perfectly balanced and incredibly tasty!
              </h2>
              <p>
                &quot;This recipe exceeded all expectations. A must-try for
                foodies!&quot; -<strong> Alex</strong>
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
}
