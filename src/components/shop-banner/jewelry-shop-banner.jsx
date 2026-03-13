import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteInfo } from "@/data/contact-info";
import banner_bg_1 from "@assets/images/HomePageImages/Tech,Fashion&EverythingYouNeed.webp";
import banner_bg_2 from "@assets/images/HomePageImages/TrendingSmartGadgets.webp";
import banner_bg_3 from "@assets/images/HomePageImages/NewArrivalFashion&Wear.webp";
import banner_bg_4 from "@assets/images/HomePageImages/Mobile,Electronics&Accessories.webp";

function BannerCard({ label, title, href = "/shop", image, large = false, showBtn = false }) {
  return (
    <Link href={href} className={`easyunbox-banner-card ${large ? "easyunbox-banner-card--large" : ""}`}>
      <div className="easyunbox-banner-card__img-wrap">
        <Image
          src={image}
          alt=""
          fill
          sizes={large ? "(min-width: 992px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
          className="easyunbox-banner-card__img"
          style={{ objectFit: "cover" }}
        />
        <div className="easyunbox-banner-card__overlay" />
      </div>
      <div className="easyunbox-banner-card__content">
        <span className="easyunbox-banner-card__label">{label}</span>
        <h3 className="easyunbox-banner-card__title">{title}</h3>
        {showBtn && (
          <span className="easyunbox-banner-card__btn">
            Shop now
            <span className="easyunbox-banner-card__arrow">→</span>
          </span>
        )}
      </div>
    </Link>
  );
}

const JewelryShopBanner = () => {
  return (
    <section className="easyunbox-shop-banner">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-6 col-lg-7">
            <div className="row g-4">
              <div className="col-12">
                <BannerCard
                  large
                  label={siteInfo.companyName}
                  title={
                    <>
                      Tech, Fashion & <br /> Everything You Need
                    </>
                  }
                  image={banner_bg_1}
                  showBtn
                />
              </div>
              <div className="col-md-6">
                <BannerCard
                  label="Trending"
                  title="Smart Gadgets"
                  image={banner_bg_2}
                />
              </div>
              <div className="col-md-6">
                <BannerCard
                  label="New Arrival"
                  title="Fashion & Wear"
                  image={banner_bg_3}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-5">
            <BannerCard
              large
              label={siteInfo.domain}
              title={
                <>
                  Mobile, Electronics <br /> & Accessories
                </>
              }
              image={banner_bg_4}
              showBtn
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JewelryShopBanner;
