import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteInfo } from "@/data/contact-info";
import aboutMain from "@assets/images/HomePageImages/About-01.webp";
import aboutThumb from "@assets/images/HomePageImages/About-02.webp";

const JewelryAbout = () => {
  return (
    <section className="easyunbox-about">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-xl-5 col-lg-6">
            <div className="easyunbox-about__images">
              <div className="easyunbox-about__img-main">
                <Image
                  src={aboutMain}
                  alt={`${siteInfo.companyName} - One-stop shop`}
                  width={600}
                  height={500}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="easyunbox-about__img-thumb">
                <Image
                  src={aboutThumb}
                  alt={`${siteInfo.companyName} collections`}
                  width={280}
                  height={220}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="easyunbox-about__content">
              <span className="easyunbox-about__label">{siteInfo.domain}</span>
              <h2 className="easyunbox-about__title">
                Your One-Stop Shop for Tech, Fashion & More
              </h2>
              <p className="easyunbox-about__text">
                At <strong>{siteInfo.companyName}</strong>, we bring you a wide range of
                products in one place. From <strong>mobile accessories</strong> and{" "}
                <strong>smart gadgets</strong> to <strong>computer</strong> and{" "}
                <strong>home electronics</strong>, plus <strong>books</strong>,{" "}
                <strong>stationery</strong>, <strong>men&apos;s</strong>,{" "}
                <strong>women&apos;s</strong> and <strong>kids wear</strong>, and{" "}
                <strong>fashion accessories</strong>—everything you need, delivered
                fast.
              </p>
              <Link href="/contact" className="easyunbox-about__btn">
                Contact Us
                <span className="easyunbox-about__btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JewelryAbout;
