"use client";
import axios from "axios";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Fetch data from API and store it in the 'data' state variable.
  const getData = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com${pathname}?${searchParams}`
      );
      setLoading(false);
      setData(res?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="cont m-6">
        <div className="card glass lg:card-side bg-base-100 shadow-xl">
          <figure className="py-6">
            <img
              src={data.image}
              alt="Album"
              className="w-1/2 rounded-full border-b-4 border-green-500"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New Recipe Released!</h2>
            <p className="text-5xl">{data.name}</p>
            {/* {data.tags.map((res) => {
              return <div className="badge">{res}</div>;
            })} */}
            <div className="badge">{data.ingredients}</div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Back</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
