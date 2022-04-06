import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "./Context";
import "./Profile.css";
export default function Profile() {
  const ctx = useContext(myContext);
  const history = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      history("/trolly1");
    }, 4000);
  }, [history]);

  return (
    <div className="prof">
      <h1 className="py-4">Thank you</h1>
      <h2 className="h1 py-4">For</h2>
      <h3 className="h1 py-4">Sign Up</h3>
      <h4 className="h1 py-4">{ctx.username}</h4>
    </div>
  );
}
