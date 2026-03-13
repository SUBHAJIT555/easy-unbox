import React from "react";
import SEO from "@/components/seo";
import { seoDescriptions } from "@/data/seo-descriptions";
import HeaderThree from "@/layout/headers/header-3";
import FooterTwo from "@/layout/footers/footer-2";
import Wrapper from "@/layout/wrapper";
import PolicyBreadcrumb from "@/components/breadcrumb/policy-breadcrumb";
import PrivacyArea from "@/components/terms/privacy-area";

const PrivacyPolicyPage = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Privacy Policy"
        description={seoDescriptions["privacy-policy"]}
      />
      <HeaderThree />
      <PolicyBreadcrumb title="Privacy Policy" subtitle="Privacy Policy" />
      <PrivacyArea />
      <FooterTwo />
    </Wrapper>
  );
};

export default PrivacyPolicyPage;
