import React from "react";
import SEO from "@/components/seo";
import { seoDescriptions } from "@/data/seo-descriptions";
import HeaderThree from "@/layout/headers/header-3";
import FooterTwo from "@/layout/footers/footer-2";
import Wrapper from "@/layout/wrapper";
import PolicyBreadcrumb from "@/components/breadcrumb/policy-breadcrumb";
import ReturnPolicyArea from "@/components/terms/return-policy-area";

const ReturnPolicyPage = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Return Policy"
        description={seoDescriptions["return-policy"]}
      />
      <HeaderThree />
      <PolicyBreadcrumb title="Return Policy" subtitle="Return Policy" />
      <ReturnPolicyArea />
      <FooterTwo />
    </Wrapper>
  );
};

export default ReturnPolicyPage;
