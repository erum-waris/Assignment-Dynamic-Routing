import List from "@/app/components/List";
import React from "react";

function CountryList() {
  return (
    <div className=" text-center bg-teal-200 border-2 p-4 m-4 text-xl text-amber-800">
      <h1 className="bg-slate-300 text-blue-900 hover:bg-green-300 mb-6 text-center font-2xl">Countries List</h1>
 
        <List href="/country/pakistan" listname="pakistan" />
        <br />
        <List href="/country/india" listname="india" />
        <br />
        <List href="/country/china" listname="china" />
        <br />
        <List href="/country/oman" listname="oman" />
        <br />
        <List href="/country/indonesia" listname="indonesia" />
   
    </div>
  );
}

export default CountryList;
