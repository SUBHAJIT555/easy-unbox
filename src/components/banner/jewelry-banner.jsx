import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { siteInfo } from "@/data/contact-info";
import MobileAccessoriesHero from "@assets/images/HeroImages/MobileAccessoriesHero.webp";
import SmartGadgetsHero from "@assets/images/HeroImages/SmartGadgetsHero.webp";
import ComputerAccessoriesHero from "@assets/images/HeroImages/ComputerAccessoriesHero.webp";
import HomeElectronicsHero from "@assets/images/HeroImages/HomeElectronicsHero.webp";
import BooksHero from "@assets/images/HeroImages/BooksHero.webp";
import StationeryItemsHero from "@assets/images/HeroImages/StationeryItemsHero.webp";
import MensWearHero from "@assets/images/HeroImages/MensWearHero.webp";
import WomensWearHero from "@assets/images/HeroImages/WomensWearHero.webp";
import KidsWearHero from "@assets/images/HeroImages/KidsWearHero.webp";
import FashionAccessoriesHero from "@assets/images/HeroImages/FashionAccessoriesHero.webp";

const { companyName, hero } = siteInfo;

const getSlides = () => [
  { title: "Mobile Accessories", img: MobileAccessoriesHero, tagline: "Cases, chargers & everyday essentials" },
  { title: "Smart Gadgets", img: SmartGadgetsHero, tagline: "Wearables and connected devices" },
  { title: "Computer Accessories", img: ComputerAccessoriesHero, tagline: "Gear for work, study and play" },
  { title: "Home Electronics", img: HomeElectronicsHero, tagline: "Appliances for modern living" },
  { title: "Books", img: BooksHero, tagline: "Reads for every age and mood" },
  { title: "Stationery Items", img: StationeryItemsHero, tagline: "Office and school supplies" },
  { title: "Men's Wear", img: MensWearHero, tagline: "Styles that move with you" },
  { title: "Women's Wear", img: WomensWearHero, tagline: "Fresh looks for every season" },
  { title: "Kids Wear", img: KidsWearHero, tagline: "Comfortable fits for little ones" },
  { title: "Fashion Accessories", img: FashionAccessoriesHero, tagline: "Finish every outfit your way" },
];

const ArrowIcon = ({ direction }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {direction === "prev" ? (
      <path
        d="M11 4L6 9L11 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    ) : (
      <path
        d="M7 4L12 9L7 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    )}
  </svg>
);

const JewelryBanner = () => {
  const [mainSlider, setMainSlider] = useState(null);
  const [navSlider, setNavSlider] = useState(null);
  const slides = useMemo(() => getSlides(), []);

  const mainSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 450,
    cssEase: "ease-in-out",
  };

  const navSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="eu-hero">
      <div className="container">
        <Slider
          {...mainSettings}
          asNavFor={navSlider}
          ref={(s) => setMainSlider(s)}
          className="eu-hero__main"
        >
          {slides.map((item, i) => (
            <div key={item.title} className="eu-hero__slide">
              <div className="eu-hero__layout">
                <div className="eu-hero__media-panel">
                  <div className="eu-hero__image-wrap">
                    <Image
                      src={item.img}
                      alt={item.title}
                      priority={i === 0}
                      sizes="(max-width: 575px) 92vw, (max-width: 991px) 75vw, 520px"
                    />
                  </div>
                </div>

                <div className="eu-hero__panel">
                  <span className="eu-hero__eyebrow">
                    {hero?.eyebrow || companyName}
                  </span>
                  <h2 className="eu-hero__title">{item.title}</h2>
                  <p className="eu-hero__text">{item.tagline}</p>
                  <Link href="/shop" className="eu-hero__cta">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="eu-hero__bottom">
          <div className="eu-hero__nav" aria-label="Category slides">
            <Slider
              {...navSettings}
              asNavFor={mainSlider}
              ref={(s) => setNavSlider(s)}
              className="eu-hero__nav-slider"
            >
              {slides.map((item) => (
                <div key={item.title} className="eu-hero__nav-item">
                  <div className="eu-hero__nav-thumb">
                    <Image src={item.img} alt="" width={52} height={52} />
                  </div>
                  <p className="eu-hero__nav-label">{item.title}</p>
                </div>
              ))}
            </Slider>
          </div>

          <div className="eu-hero__controls">
            <button
              type="button"
              className="eu-hero__arrow"
              aria-label="Previous slide"
              onClick={() => mainSlider?.slickPrev()}
            >
              <ArrowIcon direction="prev" />
            </button>
            <button
              type="button"
              className="eu-hero__arrow"
              aria-label="Next slide"
              onClick={() => mainSlider?.slickNext()}
            >
              <ArrowIcon direction="next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JewelryBanner;
