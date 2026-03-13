import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper';
import { useGetPopularProductByTypeQuery } from '@/redux/features/productApi';
import ProductSliderItem from './product-slider-item';
import ErrorMsg from '@/components/common/error-msg';
import { HomeTwoPopularPrdLoader } from '@/components/loader';

const slider_setting = {
  slidesPerView: 5,
  spaceBetween: 24,
  pagination: {
    el: ".easyunbox-popular-dot",
    clickable: true,
  },
  scrollbar: {
    el: '.easyunbox-popular-scrollbar',
    draggable: true,
    dragClass: 'easyunbox-popular-scrollbar-drag',
    snapOnRelease: true,
  },
  breakpoints: {
    '1400': { slidesPerView: 5 },
    '1200': { slidesPerView: 4 },
    '992': { slidesPerView: 3 },
    '768': { slidesPerView: 2 },
    '576': { slidesPerView: 2 },
    '0': { slidesPerView: 1 },
  },
};

const PopularProducts = () => {
  const { data: products, isError, isLoading } =
    useGetPopularProductByTypeQuery("jewelry");
  let content = null;

  if (isLoading) {
    content = <HomeTwoPopularPrdLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data;
    content = (
      <Swiper {...slider_setting} modules={[Scrollbar, Pagination]} className="easyunbox-popular-slider">
        {product_items.map((item) => (
          <SwiperSlide key={item._id}>
            <ProductSliderItem product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <section className="easyunbox-popular-products">
      <div className="container">
        <div className="easyunbox-popular-products__header text-center mb-50">
          <span className="easyunbox-popular-products__label">easy-unboxing.com</span>
          <h2 className="easyunbox-popular-products__title">Popular on Easy Unboxing</h2>
        </div>
        <div className="easyunbox-popular-products__slider-wrap">
          {content}
          <div className="easyunbox-popular-scrollbar" />
          <div className="easyunbox-popular-dot" />
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
