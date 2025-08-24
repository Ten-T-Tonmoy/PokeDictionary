import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const TestPage = () => {
  const sendToast = () => {
    toast.success("toast worked ");
  };
  return (
    <div className="w-screen flex flex-col items-center p-10 gap-4">
      <div
        className="
            bg-warning
            p-2  
            rounded-md 
            text-white text-center text-[3rem]
            "
      >
        Tailwind Working
      </div>
      <button onClick={sendToast} className="btn btn-secondary">
        click to check Hot Toast
      </button>
      <Link to="/home">
        <div>
          <button className="btn btn-primary">Go to Home</button>
        </div>
      </Link>
      <Link to="/menu">
        <div>
          <button className="btn btn-primary">Go to Menu</button>
        </div>
      </Link>
    </div>
  );
};

export default TestPage;
