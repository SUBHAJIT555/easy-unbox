import React from "react";
import SEO from "@/components/seo";
import { seoDescriptions } from "@/data/seo-descriptions";
import HeaderThree from "@/layout/headers/header-3";
import FooterTwo from "@/layout/footers/footer-2";
import Wrapper from "@/layout/wrapper";
import PolicyBreadcrumb from "@/components/breadcrumb/policy-breadcrumb";
import FaqArea from "@/components/faq/faq-area";

const FAQPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="FAQ" description={seoDescriptions["faq"]} />
      <HeaderThree />
      <PolicyBreadcrumb title="FAQ" subtitle="Frequently Asked Questions" />
      <FaqArea />
      <FooterTwo />
    </Wrapper>
  );
};

export default FAQPage;
