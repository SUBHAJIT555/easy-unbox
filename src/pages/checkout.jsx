import React from "react";
import SEO from "@/components/seo";
import { seoDescriptions } from "@/data/seo-descriptions";
import HeaderThree from "@/layout/headers/header-3";
import FooterTwo from "@/layout/footers/footer-2";
import Wrapper from "@/layout/wrapper";
import PolicyBreadcrumb from "@/components/breadcrumb/policy-breadcrumb";
import CheckoutArea from "@/components/checkout/checkout-area";

const CheckoutPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Checkout" description={seoDescriptions["checkout"]} />
      <HeaderThree />
      <PolicyBreadcrumb title="Checkout" subtitle="Checkout" />
      <CheckoutArea />
      <FooterTwo />
    </Wrapper>
  );
};

export default CheckoutPage;
