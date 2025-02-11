"use client";

import useFetch from "@/app/hooks/useFetch";
import React from "react";
import "./style.css";
import Link from "next/link";

function Main() {
  //   let res = useFetch("/test");
  //   console.log(res);

  return (
    <>
      <div className="landing">
        <div className="overlay">
          <div className="content">
            <h1>Developer Connector</h1>
            <p>
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </p>
            <div className="buttons">
              <Link href={"/register"} className="btn signup">
                Sign Up
              </Link>
              <Link href={"/login"} className="btn login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
