"use client";

import React, { useEffect, useState } from "react";
import "./style.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

function Navbar() {
  const [token, setToken] = useState(null);
  //   const token = localStorage.getItem("accessToken");
  useEffect(() => {
    const checkToken = () => {
      setToken(localStorage.getItem("accessToken"));
    };

    checkToken(); // Component yuklanganda tokenni tekshirish

    window.addEventListener("storage", checkToken); // localStorage o‘zgarsa qayta tekshiradi

    return () => {
      window.removeEventListener("storage", checkToken); // Cleanup
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setToken(localStorage.getItem("accessToken"));
    }, 1000); // Har 1 soniyada tekshirish (alternativ variant)

    return () => clearInterval(interval); // Cleanup
  }, []);

  const route = useRouter();
  const logOut = () => {
    localStorage.removeItem("accessToken");
    setToken(null);
    route.push("/");
    toast.success("Muvaffaqiyatli bajarildi!");
  };
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link href={"/"} className="icon">
            {"</>"}
            DevConnector
          </Link>{" "}
        </div>
        <ul className="navLinks">
          <li className="link">
            <Link href={"/developers"}>Developers</Link>
          </li>

          {!token ? (
            <div className="nav">
              <li className="link">
                <Link href={"/register"} className="register">
                  Register{" "}
                </Link>
              </li>
              <li className="link">
                <Link href={"/login"} className="register">
                  Login{" "}
                </Link>
              </li>
            </div>
          ) : (
            <div className="nav2">
              <li className="link">
                <Link href={"/post"}>Posts</Link>
              </li>
              <li className="link">
                <Link href={"/dashboard"} className="icon">
                  👤Dashboard
                </Link>{" "}
              </li>
              <li className="link">
                <button onClick={logOut} className="logOut">
                  Logout
                </button>{" "}
              </li>
            </div>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
