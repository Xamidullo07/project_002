"use client";
import React, { useEffect } from "react";
import "./style.css";
import axios from "axios";
import { baseUrl } from "@/utils/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Login() {
  const route = useRouter();

  useEffect(() => {
    // localStorage faqat brauzerda ishlashi kerak
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      if (token) {
        route.push("/dashboard");
      }
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    try {
      let res = await axios.post(`${baseUrl}/auth`, { email, password });
      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.token);
        route.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Sign In</h2>
      <p className="subtitle">
        <span className="icon">👤</span> Sign Into Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <input type="email" placeholder="Email Address" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <button type="submit" className="button">
          Login
        </button>
      </form>
      <p className="signupText">
        Don't have an account?{" "}
        <Link href={"/register"} className="signupLink">
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default Login;
