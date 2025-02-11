"use client";

import React, { useState } from "react";
import "./style.css";

function Dashboard() {
  const [showForm, setShowForm] = useState(false);

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
        {!showForm ? (
          <button className="button" onClick={() => setShowForm(true)}>
            Create Profile
          </button>
        ) : (
          <CreateProfile />
        )}
      </div>
    </>
  );
}

function CreateProfile() {
  const [formData, setFormData] = useState({
    status: "",
    company: "",
    website: "",
    location: "",
    skills: "",
    github: "",
    bio: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data:", formData);
    // API ga post qilishni shu joyga qo'shish mumkin
  };

  return (
    <div className="profile-container">
      <h2>Let's get some information to make your profile</h2>
      <p>* = required field</p>
      <form onSubmit={handleSubmit}>
        <select name="status" onChange={handleChange} required>
          <option>* Select Professional Status</option>
          <option value="Developer">Developer</option>
          <option value="Junior Developer">Junior Developer</option>
        </select>
        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={handleChange}
        />
        <input
          type="text"
          name="website"
          placeholder="Website"
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />
        <input
          type="text"
          name="skills"
          placeholder="* Skills"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="github"
          placeholder="Github Username"
          onChange={handleChange}
        />
        <textarea
          name="bio"
          placeholder="A short bio of yourself"
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Dashboard;
