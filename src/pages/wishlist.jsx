import React from "react";
import SEO from "@/components/seo";
import { seoDescriptions } from "@/data/seo-descriptions";
import HeaderTwo from "@/layout/headers/header-2";
import Footer from "@/layout/footers/footer";
import Wrapper from "@/layout/wrapper";
import WishlistArea from "@/components/cart-wishlist/wishlist-area";
import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";

const WishlistPage = () => {
  console.log("wishlist page loaded");
  return (
    <Wrapper>
      <SEO pageTitle="Wishlist" description={seoDescriptions.wishlist} />
      <HeaderTwo style_2={true} />
      <div className="tp-wishlist-page-neo">
        <CommonBreadcrumb title="Wishlist" subtitle="Wishlist" />
        <WishlistArea />
      </div>
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default WishlistPage;
