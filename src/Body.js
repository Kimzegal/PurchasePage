import React from "react";
import "./App.css";

const Body = () => {
  return (
    <main>
      <header>
        <h2> ROADMAP 2.0 </h2>
        <hr className="bodyHr" />
      </header>
      <section className="mainSection">
        <aside>
          <img src="/사이드.webp" alt="사이드바 사진" />
        </aside>
        <article>
          <h3> Community is our Focus</h3>

          <h4> Q4 2023</h4>
          <h4> Nov 25 to 27</h4>
          <div className="list">Black Friday sale for 2X airdrop</div>

          <h4> Dec 15 </h4>
          <div className="list">
            LP Farming on Major Dex with 3X #airdrop for LP holders{" "}
          </div>
        </article>
      </section>
    </main>
  );
};

export default Body;
