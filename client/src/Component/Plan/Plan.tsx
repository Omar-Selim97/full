import React from "react";
import { useNavigate } from "react-router-dom";
import "./Plan.css";
const Plan = () => {
  const route = useNavigate();

  return (
    <div className="plan">
      <button
        className="tod btn bg-transparent "
        onClick={() => {
          route("/trolly");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </button>
      <button
        className=" tdr btn transperant text-end "
        onClick={() => {
          route("/article");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </button>
      <h1 className="mt-3">Saved NYC travel Plan</h1>
      <div className="planHeader">
        <div className="planTop"></div>
        <h2 className="pt-3">NYC</h2>
        <h5 className="pt-4">
          Oct6 - Oct 10 ,<strong>Trolly</strong>{" "}
        </h5>
      </div>
      <div className="planUnder">
        <h3 className="h1 pb-2">Fun things to know about NYC</h3>
        <div className="planFoot"></div>
        <h4 className="h2 text-start px-3 pt-3">Rainy days ahead</h4>
        <p className="pt-2 px-3 fw-bold text-start">Take out your Umberallas</p>
        <p className="pt-2 px-3 fw-bold text-start">
          Raniy days are ahead ! they say this season
        </p>
        <p className="pt-2 px-3 fw-bold text-start">
          is the coldest measured it the past 10 years !
        </p>
      </div>
    </div>
  );
};

export default Plan;
