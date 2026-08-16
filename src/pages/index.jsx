import SEO from "@/components/seo";
import { seoDescriptions } from "@/data/seo-descriptions";
import Wrapper from "@/layout/wrapper";
import JewelryBanner from "@/components/banner/jewelry-banner";
import JewelryShopBanner from "@/components/shop-banner/jewelry-shop-banner";
import JewelryAbout from "@/components/about/jewelry-about";
import PopularProducts from "@/components/products/jewelry/popular-products";
import ProductArea from "@/components/products/jewelry/product-area";
import JewelryCollectionBanner from "@/components/shop-banner/jewelry-collection-banner";
import BestSellerPrd from "@/components/products/jewelry/best-seller-prd";
import FeatureAreaThree from "@/components/features/feature-area-3";
import FooterTwo from "@/layout/footers/footer-2";
import HeaderThree from "@/layout/headers/header-3";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle="Home" description={seoDescriptions.home} />
      <HeaderThree />
      <JewelryBanner />
      <FeatureAreaThree />
      <JewelryShopBanner />
      <JewelryAbout />
      <PopularProducts />
      <ProductArea />
      <JewelryCollectionBanner />
      <BestSellerPrd />
      <FooterTwo />
    </Wrapper>
  );
}
