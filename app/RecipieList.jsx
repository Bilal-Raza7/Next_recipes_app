"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const RecipieList = () => {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/recipes`);
      // console.log("res",res?.data?.products);
      setLoading(false);
      setData(res?.data.recipes);
    } catch (error) {
      // console.log("get data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="p-5 m-auto ">
        <h1 className="text-xl lg:text-7xl md:text-5xl sm:text-3xl text-center">
          Recipes You Love
        </h1>

        {Loading ? (
          <div className="mt-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 justify-items-center">
            {Array.from({ length: 8 }).map((_, index) => {
              return (
                <div key={index + 1} className="m-5 p-5 grid">
                  <div className="skeleton w-64 h-52 my-9 "></div>
                  <div className="skeleton h-6 w-32 my-2"></div>
                  <div className="skeleton h-3 w-68 my-2"></div>
                  <div className="skeleton h-3 w-68 my-2"></div>
                  <div className="skeleton h-3 w-68 my-2"></div>
                  <div className="skeleton h-12 justify-self-end rounded-md w-24 my-2"></div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 justify-items-center mt-9 bg-gradient-to-b from-white to-green-200">
            {data.map((res) => {
              return (
                <div className="card w-72 shadow-xl glass my-5" key={res.id}>
                  <figure className="rounded-b-full shadow-lg border-b-4 border-green-300">
                    <Image
                      src={res.image}
                      width={300}
                      height={200}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{res.name}</h2>
                    <div className="flex justify-between my-5">
                      <span className="badge bg-red-200 text-red-700">
                        {res.cuisine}
                      </span>
                      <div className="rating">
                        {res.rating}
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-yellow-300 mx-2"
                        />
                      </div>
                    </div>
                    <div className="card-actions">
                      <Link href={`/recipes/${res.id}`}>
                        <button className="btn bg-green-500 hover:bg-transparent hover:text-green-500 hover:border-green-500 text-white w-full">
                          Try Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default RecipieList;
