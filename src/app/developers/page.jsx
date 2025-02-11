"use client";

import React, { useEffect, useState } from "react";
import "./style.css";

function Developers() {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    //fake API yoki backend API chaqirish
    setDevelopers([
      {
        id: 1,
        name: "No Name",
        title: "Developer at Najot Talim",
        location: "Tashkent",
        skills: ["HTML", "CSS", "React"],
      },
      {
        id: 2,
        name: "Sardorbek",
        title: "Junior Developer at MDIST",
        location: "Tashkent, Uzbekistan",
        skills: ["JavaScript", "React"],
      },
    ]);
  }, []);

  return (
    <div className="dev-container">
      <h2 className="title">Developers</h2>
      <p className="subtitle">Browse and connect with developers</p>

      {developers.map((dev) => (
        <div key={dev.id} className="developer-card">
          <div className="avatar"></div>
          <div className="dev-info">
            <h3>{dev.name}</h3>
            <p className="job-title">{dev.title}</p>
            <p className="location">{dev.location}</p>
            <p className="skills">
              {dev.skills.map((skill, index) => (
                <span key={index} className="skill">
                  ✔ {skill}
                </span>
              ))}
            </p>
            <button className="view-profile">View Profile</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Developers;
