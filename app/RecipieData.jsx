"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const RecipieData = () => {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  console.log("data", data);
  // id: "",
  // name: "",
  // ingredients: [],
  // instructions: [],
  // prepTimeMinutes: "",
  // cookTimeMinutes: "",
  // servings: "",
  // difficulty: "",
  // cuisine: "",
  // caloriesPerServing: "",
  // tags: [],
  // userId: "",
  // image: "",
  // rating: "",
  // reviewCount: "",
  // mealType: [],

  const getData = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/recipes`);
      // console.log("res",res?.data?.products);
      setLoading(false);
      setData(res?.data.recipes);
    } catch (error) {
      console.log("get data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="p-5 m-auto">
        <h1 className="text-center text-4xl font-bold">Our Top Recipes</h1>
        {/* <Link href="/"> */}
        {/* <button className="btn btn-neutral">Go Back Home</button> */}
        {/* </Link> */}
        {Loading ? (
          <div className="mt-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {Array.from({ length: 8 }).map((_, index) => {
              return (
                <div className="m-5 p-5">
                  <div className="skeleton w-52 h-32 my-4"></div>
                  <div className="skeleton h-2 w-32 my-4"></div>
                  <div className="skeleton h-2 w-48 my-4"></div>
                  <div className="skeleton h-2 w-48 my-4"></div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="m-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 justify-center mt-9">
            {data.map((res) => {
              return (
                <>
                  <div className="card w-72 shadow-xl glass my-5">
                    {/* <Link href={`/user/${index + 1}`}> */}
                    <figure>
                      <Image
                        src={res.image}
                        width={300}
                        height={200}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{res.name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-neutral">Buy Now</button>
                      </div>
                    </div>
                    {/* </Link> */}
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default RecipieData;
