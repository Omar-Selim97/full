import React from "react";
import { useNavigate } from "react-router-dom";
import "./article.css";
const Article = () => {
  const route = useNavigate();

  return (
    <div>
      <button
        className="tod btn bg-transparent "
        onClick={() => {
          route("/plan");
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
          route("/register");
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
      <h2 className="pt-3">Article Rainy days ahead</h2>
      <div className="articleHead"></div>
      <h3 className="text-start p-3">Rainy day ahead</h3>
      <p className="text-start p-3 fw-bold">
        Take out your umbrellas!<br/> rainy days are ahead! they say this season<br/> is
        the coldest measured it the past 10 years.<br/> Rainfall is expected to be
        between 30 and<br/> 40 millimetres, but is likely to exceed 50<br/>. “Heavy
        downpours can cause flash floods and water pooling on roads,” the agency
        said. Western New Brunswick can expect lower amounts of rainfall, under
        50 mms, but areas along the Fundy coast will exceed that.
      </p>
    </div>
  );
};

export default Article;
