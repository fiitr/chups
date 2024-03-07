"use client";
import { useState } from "react";
import axios from "axios";
import DataCard from "@/components/dataCard";
import { _USER_DATA } from "@/types";

export default function Home() {
  const [enr, setEnr] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState<_USER_DATA>();

  function abc(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    var targetElement: EventTarget | null = event.target; // Element that was clicked
    var targetDiv: HTMLElement | null = document.getElementById("input-box");
    var grad: HTMLElement | null = document.getElementById("gradient");
    if (targetElement !== targetDiv) {
      grad?.classList.remove("fillt");
    }
  }
  const addGrad = async () => {
    const grad = document.querySelector(".grad");
    grad?.classList.add("fillt");
  };

  const searchEnr = async () => {
    if (enr.length === 0) {
      setMessage("Please Enter a Enrollment Number");
      return;
    }
    if (enr.length !== 8) {
      setMessage("Invalid Enrollment Number");
      return;
    }
    setMessage("");
    const res = await axios.post("/api/getData", {
      enr: enr,
    });
    if (res.data === null) {
      setMessage("No Data Found");
      return;
    }
    setData(res.data.user);
  };
  return (
    <main
      className="flex min-h-screen flex-col items-center gap-14 p-24"
      onClick={abc}
    >
      {" "}
      <div className="flex-col items-center gap-10 flex">
        <h1 className=" text-6xl font-extrabold noto-sans-bold  ">
          People
          <span className="gradient-text"> Search</span>
        </h1>
        <div className="box ">
          <div className="grad" id="gradient"></div>
          <i className="fa fa-search" aria-hidden="true"></i>{" "}
          <input
            className="searchbox"
            type="text"
            name=""
            onClick={addGrad}
            onChange={(e) => setEnr(e.target.value)}
            id="input-box"
          />
        </div>
        <button
          onClick={searchEnr}
          className="bg-[rgb(var(--iris-rgb))] hover:bg-[rgb(var(--rose-rgb))] text-white font-bold py-2 px-12 rounded-3xl focus:outline-none focus:shadow-outline  searchbtn"
        >
          Go
        </button>{" "}
        {message && <p className="text-red-500">{message}</p>}
      </div>
      <DataCard data={data}/>
    </main>
  );
}
