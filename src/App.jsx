import React from "react";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import toast, { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";

const App = () => {
  const sendToast = () => {
    toast.success("toast worked ");
  };
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
      <div
        className="
            bg-red-400
            p-2   m-10
            rounded-md 
            text-white text-center text-[3rem]
            "
      >
        Tailwind Working
      </div>
      <Link to="/home">
        <div>
          <button onClick={sendToast} className="btn btn-primary">
            click to check route and hot toast
          </button>
        </div>
      </Link>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
};

export default App;
