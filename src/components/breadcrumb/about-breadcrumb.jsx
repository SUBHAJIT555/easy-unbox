import React from "react";
import Link from "next/link";

const AboutBreadcrumb = () => {
  return (
    <section className="easyunbox-breadcrumb">
      <div className="container">
        <div className="easyunbox-breadcrumb__inner pt-95 pb-50">
          <h1 className="easyunbox-breadcrumb__title">About Us</h1>
          <nav className="easyunbox-breadcrumb__nav" aria-label="Breadcrumb">
            <span>
              <Link href="/">Home</Link>
            </span>
            <span className="easyunbox-breadcrumb__sep" aria-hidden="true">/</span>
            <span>About Us</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default AboutBreadcrumb;
