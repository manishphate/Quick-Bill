import React from "react";
import { FaBeer } from "react-icons/fa";
import style from "./Solution.module.css";
import img1 from "../../../../assets/solutionimg1.png";
import PartnerCard from "../Cards/PartnerWithUSCards/PartnerCard";
const Solution = () => {
    console.log(FaBeer);
  return (
    <>
      <div className={style.cont1}>
        <div className={style.left}>
          <h1>
            <span>The Best Accounting</span>
          </h1>
          <h1>Software for Startups</h1>
          <p>
            Quick-Bill streamlines your back office operations and <br />
            simplifies accounting for your startup, so you can focus on <br />
            growing your business.
          </p>

          <button>Start my 14 day free trial</button>
        </div>
        <div className={style.right}>
          <img src={img1} alt="" />
        </div>
      </div>

      <div className={style.cont2}>
        <h1>
          Why startups choose <span>Quick-Bill for accounting</span>{" "}
        </h1>
        <div className={style.cardsec}>
          <PartnerCard
            logo={FaBeer}
            head="Effortless setup"
            paragraph=" Setting up Quick-Bill is easy and totally free. Its hassle free setup lets you get your accounting up and running in no time."
          />

          <PartnerCard
            logo="img"
            head="Integrate and Collaborate"
            paragraph="Quick-Bill works well with payment gateways, partner banks, and other Quick apps to help you and your clients simplify business workflows and inter-department collaboration."
          />

          <PartnerCard
            logo={FaBeer}
            head="Integrate and Collaborate"
            paragraph="Quick-Bill works well with payment gateways, partner banks, and other Quick apps to help you and your clients simplify business workflows and inter-department collaboration."
          />
        </div>
      </div>
    </>
  );
};

export default Solution;

