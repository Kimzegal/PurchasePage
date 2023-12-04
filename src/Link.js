import React from "react";
import "./App.css";

const Link = () => {
  return (
    <section>
      <div className="xlink">
        <a href="https://twitter.com/zkpepes">
          <img src="/X로고.png" width="60px" alt="X로 이동" />
        </a>
      </div>
      <div className="otherlink">
        <button className="w-btn w-btn-red"> BUY THIS </button>
        <button className="w-btn w-btn-red"> DISCORD </button>
      </div>
    </section>
  );
};

export default Link;
