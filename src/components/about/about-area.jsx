import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteInfo } from "@/data/contact-info";
import FeatureAreaThree from "@/components/features/feature-area-3";

const HOME_PAGE_IMAGES = "/assets/images/HomePageImages";
const ABOUT_IMAGES = {
  main: `${HOME_PAGE_IMAGES}/About-01.webp`,
  thumb: `${HOME_PAGE_IMAGES}/About-02.webp`,
};

const AboutArea = () => {
  return (
    <>
      <section className="easyunbox-about-page__story">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="easyunbox-about-page__images">
                <div className="easyunbox-about-page__img-main">
                  <Image
                    src={ABOUT_IMAGES.main}
                    alt={`${siteInfo.companyName} - About`}
                    width={600}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="easyunbox-about-page__img-thumb">
                  <Image
                    src={ABOUT_IMAGES.thumb}
                    alt={`${siteInfo.companyName} collections`}
                    width={280}
                    height={220}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="easyunbox-about-page__content">
                <span className="easyunbox-about-page__label">{siteInfo.domain}</span>
                <h2 className="easyunbox-about-page__title">{siteInfo.tagline}</h2>
                <div className="easyunbox-about-page__text">
                  <p>
                    Welcome to <strong>{siteInfo.companyName}</strong>, where you can find
                    everything from mobile accessories and smart gadgets to computer and
                    home electronics, books, stationery, men&apos;s and women&apos;s and
                    kids wear, and fashion accessories—all in one place.
                  </p>
                  <p>
                    We believe shopping should be simple and fast. We curate quality
                    products across tech, fashion, and everyday essentials so you get the
                    best selection and service. Whether you need the latest gadgets, a new
                    read, or style for the whole family, we&apos;re here to deliver.
                  </p>
                </div>
                <Link href="/contact" className="easyunbox-about-page__cta">
                  Contact Us <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="easyunbox-about-page__mission">
        <div className="container">
          <div className="easyunbox-about-page__mission-header">
            <span className="easyunbox-about-page__label">{siteInfo.companyName}</span>
            <h2 className="easyunbox-about-page__mission-title">What We Stand For</h2>
          </div>
          <div className="row g-4">
            <div className="col-xl-4 col-md-6">
              <div className="easyunbox-about-page__card">
                <span className="easyunbox-about-page__card-icon" aria-hidden>✨</span>
                <h3 className="easyunbox-about-page__card-title">Quality First</h3>
                <p className="easyunbox-about-page__card-text">
                  We stock trusted brands and genuine products across tech, fashion, and
                  essentials so you can shop with confidence.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="easyunbox-about-page__card">
                <span className="easyunbox-about-page__card-icon" aria-hidden>💎</span>
                <h3 className="easyunbox-about-page__card-title">Customer Satisfaction</h3>
                <p className="easyunbox-about-page__card-text">
                  Your happiness is our priority. We&apos;re committed to smooth orders,
                  quick support, and a hassle-free shopping experience.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="easyunbox-about-page__card">
                <span className="easyunbox-about-page__card-icon" aria-hidden>⏰</span>
                <h3 className="easyunbox-about-page__card-title">Wide Range</h3>
                <p className="easyunbox-about-page__card-text">
                  From mobile accessories and smart gadgets to fashion, books, and
                  stationery—find what you need in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="easyunbox-about-page__choose">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="easyunbox-about-page__choose-content">
                <span className="easyunbox-about-page__label">Why Choose Us</span>
                <h2 className="easyunbox-about-page__choose-title">Excellence in Every Detail</h2>
                <ul className="easyunbox-about-page__choose-list">
                  <li>
                    <span className="easyunbox-about-page__choose-icon" aria-hidden>✓</span>
                    <div>
                      <h4>Genuine Products</h4>
                      <p>
                        We offer authentic tech, fashion, and lifestyle products from
                        trusted brands so you shop with confidence.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="easyunbox-about-page__choose-icon" aria-hidden>✓</span>
                    <div>
                      <h4>One-Stop Shop</h4>
                      <p>
                        Mobile accessories, smart gadgets, electronics, books, stationery,
                        and fashion—all in one place.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="easyunbox-about-page__choose-icon" aria-hidden>✓</span>
                    <div>
                      <h4>Reliable Support</h4>
                      <p>
                        We stand behind our products with clear policies and responsive
                        customer support when you need it.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="easyunbox-about-page__choose-icon" aria-hidden>✓</span>
                    <div>
                      <h4>Fast & Easy</h4>
                      <p>
                        Simple checkout, secure payment options, and delivery so you get
                        your orders without hassle.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="easyunbox-about-page__choose-img">
                <Image
                  src={ABOUT_IMAGES.main}
                  alt="Why choose us"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureAreaThree />
    </>
  );
};

export default AboutArea;
