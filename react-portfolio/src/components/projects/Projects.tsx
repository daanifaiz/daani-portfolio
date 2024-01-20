import React from "react";
import "./projects.css";
const cochlearImplantCartoon = require("../../assets/cochlearImplantCartoon.jpg");
const cartoonHabitTracker = require("../../assets/cartoonHabitTracker.png");
const breathlyserOutputGraph = require("../../assets/breathlyserOutputGraph.png");

export default function Projects(): JSX.Element {
  return (
    <section id="projects" className="projects container projects__container">
      <h1 className="projects__title">Featured Projects</h1>
      <div className="flex-container">
        <div className="flex-item-left">
        <h2 className="projects__subheading">
            Cochlear: N7 for N22 Lead Engineer
          </h2>
          <h4 className="projects__body">
            Lead design engineer for enabling the latest Cochlear Implant
            external sound processor at the time to be compatibilie with the
            earliest implant
          </h4>
          <a
            href="https://hearandnow.cochlear.com/hearing-solutions/cochlear-implants/cochlear-nucleus-7-upgrade/"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Explore
          </a>
          <img
            className="projects__image"
            alt="cochlear implant"
            src={cochlearImplantCartoon}
          ></img>
        </div>
        <div className="flex-item-right projects__rightcolumn">
          <h2 className="projects__subheading">
            Holitic: Health Tech Startup Founder
          </h2>
          <h4 className="projects__body">
            Founded a startup and led a team of to release to market an AI driven
             habit tracker. We partnered with communities around Australia to help people build positive daily habits.
          </h4>
          <a
            href="https://play.google.com/store/apps/details?id=com.holitic"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Explore
          </a>
          <img
            className="projects__image"
            alt="habit tracker"
            src={cartoonHabitTracker}
          ></img>
        </div>
        <div className="flex-item-right">
          
        </div>
      </div>
      <div className="flex-container">
        
      </div>
      <div className="flex-container">
        <div className="flex-item-left">
        <h2 className="projects__subheading">Alcolizer Technology: R&D</h2>
          <h4 className="projects__body">
            Operating as a research mechatronics engineer, developed a novel
            machine learning algorithm to detect mouth alcohol presence as part
            of a honours engineering thesis.
          </h4>
          <div className="projects__disabled">Embargoed until Nov 2026</div>
          <img
            className="projects__image"
            alt="breathlyser output graph"
            src={breathlyserOutputGraph}
          ></img>
        </div>
        <div className="flex-item-right projects__rightcolumn">
        
        </div>
      </div>
    </section>
  );
}
