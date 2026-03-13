import React from "react";
import { Email, Location } from "@/svg";
import ContactForm from "../forms/contact-form";
import contactInfo from "@/data/contact-info";

const ContactArea = () => {
  return (
    <section className="easyunbox-contact">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-8 col-lg-7">
            <div className="easyunbox-contact__form-wrap">
              <h2 className="easyunbox-contact__form-title">Send a message</h2>
              <Contact Form />
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <aside className="easyunbox-contact__sidebar">
              <div className="easyunbox-contact__card">
                <span className="easyunbox-contact__card-icon">
                  <Email />
                </span>
                <h3 className="easyunbox-contact__card-title">Email &amp; Phone</h3>
                <p className="easyunbox-contact__card-text">
                  <a href={contactInfo.mailtoLink}>{contactInfo.email}</a>
                </p>
                <p className="easyunbox-contact__card-text">
                  <a href={contactInfo.telLink}>{contactInfo.phone}</a>
                </p>
              </div>
              <div className="easyunbox-contact__card">
                <span className="easyunbox-contact__card-icon">
                  <Location />
                </span>
                <h3 className="easyunbox-contact__card-title">Address</h3>
                <p className="easyunbox-contact__card-text">
                  <a href={contactInfo.mapLink} target="_blank" rel="noreferrer">
                    {contactInfo.addressDisplay}
                  </a>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
