import React from "react";
import SEO from "@/components/seo";
import { seoDescriptions } from "@/data/seo-descriptions";
import HeaderThree from "@/layout/headers/header-3";
import FooterTwo from "@/layout/footers/footer-2";
import Wrapper from "@/layout/wrapper";
import PolicyBreadcrumb from "@/components/breadcrumb/policy-breadcrumb";
import CookiePolicyArea from "@/components/terms/cookie-policy-area";

const CookiePolicyPage = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Cookie Policy"
        description={seoDescriptions["cookie-policy"]}
      />
      <HeaderThree />
      <PolicyBreadcrumb title="Cookie Policy" subtitle="Cookie Policy" />
      <CookiePolicyArea />
      <FooterTwo />
    </Wrapper>
  );
};

export default CookiePolicyPage;
