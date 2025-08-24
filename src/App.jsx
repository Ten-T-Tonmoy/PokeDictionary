import React from "react";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import toast, { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";
import TestPage from "./pages/Misc/TestPage";

const App = () => {
  return (
    <>
      <div
        className="fixed top-0 left-0 overflow-hidden w-screen
      h-screen bg-black z-[99] md:flex hidden "
      >
        <p
          className=" z-[100] text-white flex h-full w-full
           justify-center
      items-center text-xl text-center"
        >
          Open it on a Mobile Device or Shrink your Window size!
          <br />
          This Dev has a life and too lazy to make the site responsive
        </p>
      </div>
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
};

export default App;
