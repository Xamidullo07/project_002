"use client";

import React from "react";
import "./style.css";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link href={"/"} className="icon">
            {"</>"}
          </Link>{" "}
          DevConnector
        </div>
        <ul className="navLinks">
          <li>
            <Link href={"/developers"}>Developers</Link>
          </li>
          <li>
            <a href="#">Posts</a>
          </li>
          <li>
            <Link href={"/"} className="icon">
              👤Dashboard
            </Link>{" "}
          </li>
          <li>
            <Link href={"/login"} className="icon">
              ↪️
            </Link>{" "}
            Logout
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
