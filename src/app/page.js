"use client";

import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Home() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      router.push("/login");
    }
  }, []);
  return (
    <div>
      <Main />
    </div>
  );
}

export default Home;
