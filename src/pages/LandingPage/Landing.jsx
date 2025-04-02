import React from "react";
import styel from "./Landing.module.css";
import LodingNavbar from "./Components/LoadingNavBar/LodingNavbar.jsx";
import BtnComp from "./Components/BtnComponents/BtnComp.jsx";
import lodingImg1 from "../../assets/lodingPageimg1.webp";
import LeftCard from "./Components/Cards/LeftCard/LeftCard.jsx";

import lCimg1 from "../../assets/leftCardimg1.png";
import lCimg2 from "../../assets/leftCarding2.jpeg";
import lCimg3 from "../../assets/leftCardImg3.avif";

import quatationImg from "../../assets/landingDoubleQuatationImg.svg";
import UserFevCard1 from "./Components/Cards/UserFavroiteCards/UserFevCard1.jsx";

import userFevCardImag1 from "../../assets/userFevCard1Img1.png";
import userFevCardImag2 from "../../assets/userFevCardImg2.png";
import userFevCardImag3 from "../../assets/userFevCardImg3.png";

import btoomImg1 from "../../assets/landingBottomImg1.png";

const Landing = () => {
  return (
    <>
      <LodingNavbar />
      {/* ----------------- Top container --------------------------- */}
      <div className={styel.mSection1}>
        <div className={styel.headingContent}>
          <h1 className={styel.headingText}>
            Comprehensive <br /> accounting platform for growing businesses
          </h1>
          <p className={styel.hParagraphText}>
            Manage end-to-end accounting—from banking & e-invoicing to inventory
            & payroll with the best accounting software in India.
          </p>
          <div className={styel.botn}>
            <BtnComp name="Start free trial" variant="primary" />
            <BtnComp name="Request a demo" variant="secondery" />
          </div>
          <div className={styel.imgCont}>
            <img src={lodingImg1} alt="" />
          </div>
        </div>
      </div>

      {/* --------------------- middle container ------------------------- */}
      <div className={styel.middleCont}>
        <div className={styel.left}>
          <h1 className={styel.lefth1}>
            Make the switch to the future of business accounting
          </h1>
          <hr />
          <LeftCard
            img={lCimg1}
            head="Most versatile accounting software for every business need "
            name="Safwan Ahmad , CO-FOUNDER"
          />
          <hr />
          <LeftCard
            img={lCimg2}
            head="Backbone of my company's finance and operations"
            name="Md Aarif , CEO"
          />
          <hr />
          <LeftCard
            img={lCimg3}
            head="Best accounting software made for businesses worldwide"
            name="Shahraukh Khan , CEO - MAVI"
          />
          <hr />
        </div>
        <div className={styel.right}>
          <div>
            <img src={quatationImg} alt="" />
            <h1>
              I TRUST <br />
              <span>QUICK&nbsp;BILL</span>
              <br /> FOR MY <br />
              BUSINESS
            </h1>
          </div>
        </div>
      </div>
      {/* ------------------------ user Feverote Section ---------------------------- */}
      <div className={styel.userFevSect}>
        <div className={styel.userCont}>
          <p>User favorites</p>
          <h1>
            Do it all,
            <br />
            and then some more!
          </h1>
          <div className={styel.cardCont}>
            <UserFevCard1
              width="700px"
              head="Receivables"
              paragraph="Raise tax-compliant, professional invoices and quotes in no time.
                       Offer multiple payment options, automate invoices and reminders, and
                       send online payment links."
              img={userFevCardImag1}
            />
            <UserFevCard1
              width="535px"
              head="Payables"
              paragraph="Track vendor bills and other expenses easily. Add recurring expenses. Include client expenses on invoices. Make payments from Quick-Bill with partner bank integrations."
              img={userFevCardImag2}
            />
          </div>
          <UserFevCard1
            width="170vh"
            head="Payables"
            paragraph="Track vendor bills and other expenses easily. Add recurring expenses. Include client expenses on invoices. Make payments from Quick-Bill with partner bank integrations."
            img={userFevCardImag3}
          />
        </div>
      </div>
      {/* -------------------- bottom section --------------------------- */}

      <div className={styel.bottomSect}>
        <div className={styel.bottomCont}>
          <img src={btoomImg1} alt="" />
         <div className={styel.content}>
         <h1>Your accounting is now in your <span>pocket</span> </h1>
          <p>
            Make accounting even more convenient by bringing portability through
            the <b>Quick-Bill</b> app for mobiles.
            Download the app for Android and iOS
            and take your accounting everywhere.
          </p>
         </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
