import Image from "next/image";
import RecipieData from "./RecipieData";

export default function Home() {
  return (
    <>
      {/* <div className="m-6">
        <p className="">
          <span className="bg-green-500 rounded-l-lg p-[13px] text-lg text-white">
            Eat Healthy{" "}
          </span>
          <span className="border border-sm border-green-500 text-green-500 p-3 text-lg">
            Stay Healthy
          </span>
        </p>
      </div> */}
      <div className="hero min-h-screen  bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg"
            className="lg:w-2/5 xl:w-2/5 md:w-3/5 w-full rounded-lg shadow-2xl"
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
            <button className="btn bg-green-500 hover:bg-green-600 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <RecipieData />
    </>
  );
}
