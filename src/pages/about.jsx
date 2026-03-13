import React from "react";
import SEO from "@/components/seo";
import { seoDescriptions } from "@/data/seo-descriptions";
import HeaderThree from "@/layout/headers/header-3";
import FooterTwo from "@/layout/footers/footer-2";
import Wrapper from "@/layout/wrapper";
import AboutBreadcrumb from "@/components/breadcrumb/about-breadcrumb";
import AboutArea from "@/components/about/about-area";

const AboutPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="About Us" description={seoDescriptions.about} />
      <HeaderThree />
      <AboutBreadcrumb />
      <AboutArea />
      <FooterTwo />
    </Wrapper>
  );
};

export default AboutPage;
