import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteInfo } from "@/data/contact-info";

const HOME_PAGE_IMAGES = "/assets/images/HomePageImages";
const COLLECTION_IMAGES = {
  leftBg: `${HOME_PAGE_IMAGES}/TECH,FASHION&MORE.webp`,
  rightThumb: `${HOME_PAGE_IMAGES}/Tech,Fashion,Books&More.webp`,
};

const JewelryCollectionBanner = () => {
  return (
    <section className="easyunbox-collection-banner">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-6">
            <div className="easyunbox-collection-banner__left">
              <div className="easyunbox-collection-banner__left-img">
                <Image
                  src={COLLECTION_IMAGES.leftBg}
                  alt=""
                  fill
                  sizes="(min-width: 992px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="easyunbox-collection-banner__left-overlay" />
              </div>
              <div className="easyunbox-collection-banner__left-content">
                <span className="easyunbox-collection-banner__left-label">
                  {siteInfo.companyName} — Tech, Fashion & More
                </span>
                <div className="easyunbox-collection-banner__hotspots">
                  <div className="easyunbox-collection-banner__hotspot">
                    <span className="easyunbox-collection-banner__hotspot-dot" />
                    <div className="easyunbox-collection-banner__hotspot-content">
                      <strong>Smart Gadgets</strong>
                      <span>Mobile accessories, electronics & more.</span>
                    </div>
                  </div>
                  <div className="easyunbox-collection-banner__hotspot easyunbox-collection-banner__hotspot--top">
                    <span className="easyunbox-collection-banner__hotspot-dot" />
                    <div className="easyunbox-collection-banner__hotspot-content">
                      <strong>Fashion & Wear</strong>
                      <span>Men&apos;s, women&apos;s, kids & accessories.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="easyunbox-collection-banner__right">
              <span className="easyunbox-collection-banner__right-label">{siteInfo.domain}</span>
              <Link href="/shop" className="easyunbox-collection-banner__right-img-wrap">
                <Image
                  src={COLLECTION_IMAGES.rightThumb}
                  alt="Tech, Fashion, Books & More"
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                />
              </Link>
              <h3 className="easyunbox-collection-banner__right-title">
                <Link href="/shop">Tech, Fashion, Books & More</Link>
              </h3>
              <Link href="/shop" className="easyunbox-collection-banner__right-cta">
                Shop now
                <span className="easyunbox-collection-banner__right-cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JewelryCollectionBanner;
