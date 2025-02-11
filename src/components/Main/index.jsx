"use client";

import useFetch from "@/app/hooks/useFetch";
import React from "react";
import "./style.css";

function Main() {
  //   let res = useFetch("/test");
  //   console.log(res);

  return (
    <>
      <div className="container">
        <h2 className="title">Dashboard</h2>
        <p className="welcome">
          <span className="icon">👤</span> Welcome
        </p>
        <p className="info">
          You have not yet setup a profile, please add some info
        </p>
        <button className="button">Create Profile</button>
      </div>
    </>
  );
}

export default Main;
