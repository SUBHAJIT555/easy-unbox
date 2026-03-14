import React from "react";
import SEO from "@/components/seo";
import { seoDescriptions } from "@/data/seo-descriptions";
import HeaderThree from "@/layout/headers/header-3";
import FooterTwo from "@/layout/footers/footer-2";
import Wrapper from "@/layout/wrapper";
import PolicyBreadcrumb from "@/components/breadcrumb/policy-breadcrumb";
import CartArea from "@/components/cart-wishlist/cart-area";

const CartPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Cart" description={seoDescriptions["cart"]} />
      <HeaderThree />
      <PolicyBreadcrumb title="Shopping Cart" subtitle="Shopping Cart" />
      <CartArea />
      <FooterTwo />
    </Wrapper>
  );
};

export default CartPage;
