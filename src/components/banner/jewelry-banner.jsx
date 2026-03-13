import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
// internal
import { ArrowNextTwo, ArrowPrevTwo } from "@/svg";
import { siteInfo } from "@/data/contact-info";

const HERO_IMAGES_BASE = "/assets/images/HeroImages";
const HOME_ICONS_BASE = "/assets/images/HeroIcons";

// slider data – 10 slides using images from HeroImages folder
const getSliderData = () => [
  { subtitle: siteInfo.companyName, title: "Mobile Accessories", img: `${HERO_IMAGES_BASE}/MobileAccessoriesHero.webp` },
  { subtitle: siteInfo.domain, title: "Smart Gadgets", img: `${HERO_IMAGES_BASE}/SmartGadgetsHero.webp` },
  { subtitle: siteInfo.companyName, title: "Computer Accessories", img: `${HERO_IMAGES_BASE}/ComputerAccessoriesHero.webp` },
  { subtitle: siteInfo.domain, title: "Home Electronics", img: `${HERO_IMAGES_BASE}/HomeElectronicsHero.webp` },
  { subtitle: siteInfo.companyName, title: "Books", img: `${HERO_IMAGES_BASE}/BooksHero.webp` },
  { subtitle: siteInfo.domain, title: "Stationery Items", img: `${HERO_IMAGES_BASE}/StationeryItemsHero.webp` },
  { subtitle: siteInfo.companyName, title: "Men's Wear", img: `${HERO_IMAGES_BASE}/MensWearHero.webp` },
  { subtitle: siteInfo.domain, title: "Women's Wear", img: `${HERO_IMAGES_BASE}/WomensWearHero.webp` },
  { subtitle: siteInfo.companyName, title: "Kids Wear", img: `${HERO_IMAGES_BASE}/KidsWearHero.webp` },
  { subtitle: siteInfo.domain, title: "Fashion Accessories", img: `${HERO_IMAGES_BASE}/FashionAccessoriesHero.webp` },
];

// slider nav data – product categories (icons from HeroIcons folder)
const slider_nav_data = [
  { icon: `${HOME_ICONS_BASE}/MobileAccessoriesIcon.webp`, title: <>Mobile <br /> Accessories</> },
  { icon: `${HOME_ICONS_BASE}/SmartGadgetsIcon.webp`, title: <>Smart <br /> Gadgets</> },
  { icon: `${HOME_ICONS_BASE}/ComputerAccessoriesIcon.webp`, title: <>Computer <br /> Accessories</> },
  { icon: `${HOME_ICONS_BASE}/HomeElectronicsIcon.webp`, title: <>Home <br /> Electronics</> },
  { icon: `${HOME_ICONS_BASE}/BooksIcon.webp`, title: <>Books</> },
  { icon: `${HOME_ICONS_BASE}/StationeryItemsIcon.webp`, title: <>Stationery <br /> Items</> },
  { icon: `${HOME_ICONS_BASE}/MensWearIcon.webp`, title: <>Men&apos;s <br /> Wear</> },
  { icon: `${HOME_ICONS_BASE}/WomensWearIcon.webp`, title: <>Women&apos;s <br /> Wear</> },
  { icon: `${HOME_ICONS_BASE}/KidsWearIcon.webp`, title: <>Kids&apos;s <br /> Wear</> },
  { icon: `${HOME_ICONS_BASE}/FashionAccessoriesIcon.webp`, title: <>Fashion <br /> Accessories</> },
];

const JewelryBanner = () => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  const main_slider_setting = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    centerMode: false,
  };

  const nav_slider_setting = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
  };

  return (
    <>
      <section className="tp-slider-area p-relative z-index-1 fix">
        <Slider
          {...main_slider_setting}
          asNavFor={slider2}
          ref={(slider) => setSlider1(slider)}
          className="tp-slider-active-4 khaki-bg"
        >
          {getSliderData().map((item, i) => (
            <div
              key={i}
              className="tp-slider-item-4 tp-slider-height-4 p-relative khaki-bg d-flex align-items-center"
            >
              <div className="tp-slider-thumb-4">
                <Image src={item.img} alt={item.title} width={700} height={500} style={{ width: "100%", height: "auto" }} />
                <div className="tp-slider-thumb-4-shape">
                  <span className="tp-slider-thumb-4-shape-1"></span>
                  <span className="tp-slider-thumb-4-shape-2"></span>
                </div>
              </div>

              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-8">
                    <div className="tp-slider-content-4 p-relative z-index-1">
                      <span>{item.subtitle}</span>
                      <h3 className="tp-slider-title-4">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* arrow start */}
        <div className="tp-slider-arrow-4">
          <button
            className="tp-slider-3-button-prev slick-arrow"
            onClick={() => slider1?.slickPrev()}
          >
            <ArrowPrevTwo />
          </button>
          <button
            className="tp-slider-3-button-next slick-arrow"
            onClick={() => slider1?.slickNext()}
          >
            <ArrowNextTwo />
          </button>
        </div>
        {/* arrow end */}

        <div className="tp-slider-nav">
          <Slider
            {...nav_slider_setting}
            asNavFor={slider1}
            ref={(slider) => setSlider2(slider)}
            className="tp-slider-nav-active"
          >
            {slider_nav_data.map((item, i) => (
              <div
                key={i}
                className="tp-slider-nav-item d-flex align-items-center"
              >
                <div className="tp-slider-nav-icon">
                  <span>
                    <Image src={item.icon} alt="" width={28} height={28} style={{ width: "28px", height: "28px", objectFit: "contain" }} />
                  </span>
                </div>
                <div className="tp-slider-nav-content">
                  <h3 className="tp-slider-nav-title">{item.title}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default JewelryBanner;
