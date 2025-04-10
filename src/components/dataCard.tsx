import React, { useEffect, useState } from "react";
import "./dataCard.css"; // Import the CSS file for styling
import { _USER_DATA } from "@/types";

const Field = ({ prop, value }: { prop: String; value: String | number }) => {
  return (
    <div className="flex border-2 border-[color:rgb(var(--pine-rgb))] rounded-2xl grid-item ">
      <div className=" bg-[rgb(var(--pine-rgb))] p-3 pr-8 rounded-r-[45px] rounded-l-2xl  text-black font-bold text-left">
        {prop}
      </div>
      <div className=" p-3">{value}</div>
    </div>
  );
};

const DataCard = ({ data }: { data: _USER_DATA | undefined }) => {
  return (
    <>
    {
      data == undefined ||
      data == null ||

    <div className="relative w-screen md:w-[60%] p-6 rounded-3xl datacontainer">
      <div className="flex flex-auto flex-wrap justify-around items-center">

        <span className="text-4xl border-b-2 border-[color:rgb(var(--iris-rgb))] font-bold z-10 relative">
          {data?.Name}
        </span>

        <div className="pt-10">
          <img
            src={data?.img}
            alt="image"
            className="w-32 h-32 rounded-full border-4 border-[color:rgb(var(--iris-rgb))] z-10"
            />
        </div>
      </div>
      <div className="grid-container mt-8 z-10 relative">
        {data == undefined ||
          data == null ||
          Object?.keys(data).map((key, index) => {
            if (key === "id" || key === "StSig") return null;
            return (
              <Field
                key={index}
                prop={key}
                value={data[key as keyof _USER_DATA]}
              />
            );
          })}
      </div>
    </div>
    }
    </>

  );
};

export default DataCard;
