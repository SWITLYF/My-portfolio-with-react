import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Research.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Persona Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Journey Mapping.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wireframing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Prototyping.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Interface (UI) Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Experience (UX) Design.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive web Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-Commerce Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Hosting and Deployment.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integration of Third-Party Services.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Consultation and Planning.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Maintenance.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Training and Support.</p>
            </li>
            
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blogging and Article Writing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Email Newsletter Creation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Curation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Strategy Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-book and Whitepaper Creation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Analytics and Reporting.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Brand Voice Development.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
