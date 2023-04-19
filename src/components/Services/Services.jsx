import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="sevicesCont">
      <div className="sevicesHeader">
        <span className="servicesMini">SERVICES WE DELIVER</span>
        <h1 className="servicesMainHead">
          Preparing for your success, we provide truly prominent IT solutions.
        </h1>
      </div>
      <div className="sevicesLists">
        <div className="serviceCard" style={{ backgroundColor: "#e7f0f7" }}>
          <img
            className="serviceLogo"
            src="https://woxro.com/public/assets/png/services/webdesigning.png"
            alt=""
          />
          <p className="cardHeader">Web Desiging</p>
          <p className="cardDesc">
            We create interfaces. Usability + user experience are creared based
            on a study of prfereces and user behavior, using the latest web
            trnds, our experience,and achievements
          </p>
        </div>
        <div className="serviceCard" style={{ backgroundColor: "#f6f5f3" }}>
          {" "}
          <img
            className="serviceLogo"
            src="https://woxro.com/public/assets/png/services/webapplication.png"
            alt=""
          />
          <p className="cardHeader">Web Application</p>
          <p className="cardDesc">
            We have compleated projects in full-cycle web applicatons including
            CRM, HRM and project management solutions. Look no further if you
            are in search of a professional partner who can develop stunning web
            solutions.
          </p>
        </div>
        <div className="serviceCard" style={{ backgroundColor: "#F6F5F3" }}>
          {" "}
          <img
            className="serviceLogo"
            src="	https://woxro.com/public/assets/png/services/mobileappdevelopment.png"
            alt=""
          />
          <p className="cardHeader">Web App Development</p>
          <p className="cardDesc">
            We develop high-quality and effective applicatons for your
            bussiness.Our expertise and knowledge help us ceate mobile
            applications for ios and Android and cross-platform solutions.
          </p>
        </div>
        <div className="serviceCard" style={{ backgroundColor: "#FCF0E4" }}>
          {" "}
          <img
            className="serviceLogo"
            src="https://woxro.com/public/assets/png/services/ecommercedevelopment.png"
            alt=""
          />
          <p className="cardHeader">Ecommerce Development</p>
          <p className="cardDesc">
            For some of you involments as an eCommerce and consulting partner
            will mean a powerfull bussiness launch with the right technology
            stack.For others - a possibility to goive their bussiness a fresh
            start.
          </p>
        </div>
        <div className="serviceCard" style={{ backgroundColor: "#F5F6F8" }}>
          {" "}
          <img
            className="serviceLogo"
            src="https://woxro.com/public/assets/png/services/digitalmarketing.png"
            alt=""
          />
          <p className="cardHeader">Digital Marketing</p>
          <p className="cardDesc">
            We bring together expertise in brand marketing amd sustainabilty to
            design and implement ideas in breanding.We also bring purpose
            to,lofe by communicating great stories.Nowmaximize your inline
            visibilty.
          </p>
        </div>
        <div className="serviceCard" style={{ backgroundColor: "#EFFBFB" }}>
          {" "}
          <img
            className="serviceLogo"
            src="	https://woxro.com/public/assets/png/services/graphic.png"
            alt=""
          />
          <p className="cardHeader">Graphics Designing</p>
          <p className="cardDesc">
            We build sustainable , brands by connecting your product and message
            with audience that would want to get your and or services. We
            nurture ideas transform ands through creativity focussed on growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
