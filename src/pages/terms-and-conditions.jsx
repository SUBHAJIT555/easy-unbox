import React from "react";
import SEO from "@/components/seo";
import { seoDescriptions } from "@/data/seo-descriptions";
import HeaderThree from "@/layout/headers/header-3";
import FooterTwo from "@/layout/footers/footer-2";
import Wrapper from "@/layout/wrapper";
import PolicyBreadcrumb from "@/components/breadcrumb/policy-breadcrumb";
import TermsArea from "@/components/terms/terms-area";

const TermsAndConditionsPage = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Terms and Conditions"
        description={seoDescriptions["terms-and-conditions"]}
      />
      <HeaderThree />
      <PolicyBreadcrumb title="Terms and Conditions" subtitle="Terms and Conditions" />
      <TermsArea />
      <FooterTwo />
    </Wrapper>
  );
};

export default TermsAndConditionsPage;
