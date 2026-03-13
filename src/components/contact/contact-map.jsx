import React from "react";
import contactInfo from "@/data/contact-info";

const ContactMap = () => {
  return (
    <section className="easyunbox-contact-map">
      <div className="container">
        <div className="easyunbox-contact-map__wrap">
          <iframe src={contactInfo.mapEmbedUrl} title="Location map" />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
