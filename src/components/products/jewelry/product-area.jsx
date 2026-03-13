import ErrorMsg from '@/components/common/error-msg';
import { useGetProductsByVariantQuery } from '@/redux/features/productApi';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import ProductItem from './product-item';
import { HomeTwoPrdLoader } from '@/components/loader';
import { ArrowRight } from '@/svg';
import { getSiteNumber } from '@/lib/siteConfig';

const ProductArea = ({ defaultCategory = 'All Collection' }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(defaultCategory);
  const [categoryCounts, setCategoryCounts] = useState({});
  const activeRef = useRef(null);
  const marker = useRef(null);

  const variantId = useMemo(() => {
    try {
      const siteNumber = getSiteNumber();
      const mod = siteNumber % 10;
      return mod === 0 ? 10 : mod;
    } catch (error) {
      return 1;
    }
  }, []);

  const { data: productsData, isError, isLoading } = useGetProductsByVariantQuery({
    variantId,
    category: activeTab,
  });

  const variantConfig = productsData?.variantConfig;
  const tabs = variantConfig?.tabs || ["All Collection", "Man Wear", "Women Wear", "Kids Wear"];
  const title = variantConfig?.title || "Discover our Products";
  const subtitle = variantConfig?.subtitle || "Product Collection";

  useEffect(() => {
    if (productsData?.totalCount !== undefined) {
      setCategoryCounts((prev) => ({ ...prev, [activeTab]: productsData.totalCount }));
    }
  }, [activeTab, productsData?.totalCount]);

  const getCategoryCount = (tab) => {
    return categoryCounts[tab] ?? (tab === activeTab ? (productsData?.totalCount || 0) : 0);
  };

  useEffect(() => {
    if (activeRef.current && marker.current) {
      marker.current.style.left = activeRef.current.offsetLeft + "px";
      marker.current.style.width = activeRef.current.offsetWidth + "px";
    }
  }, [activeTab, productsData]);

  const handleActiveTab = (e, tab) => setActiveTab(tab);

  const handleShowMore = () => {
    if (!variantConfig) return;
    const categoryConfig = variantConfig.categoryMap[activeTab];
    if (activeTab === 'All Collection' || !categoryConfig?.slug) {
      router.push('/shop');
    } else {
      router.push(`/shop?category=${categoryConfig.slug}`);
    }
  };

  let content = null;

  if (isLoading) {
    content = <HomeTwoPrdLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && productsData?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && productsData?.data?.length > 0) {
    const product_items = productsData.data;
    content = (
      <>
        <div className="row align-items-end mb-4">
          <div className="col-lg-6">
            <div className="easyunbox-product-area__header text-center text-lg-start">
              <span className="easyunbox-product-area__label">{subtitle}</span>
              <h2 className="easyunbox-product-area__title">{title}</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="easyunbox-product-area__tabs-wrap">
              <nav className="easyunbox-product-area__tabs" role="tablist">
                {tabs.map((tab, i) => (
                  <button
                    key={i}
                    ref={activeTab === tab ? activeRef : null}
                    onClick={(e) => handleActiveTab(e, tab)}
                    className={`easyunbox-product-area__tab ${activeTab === tab ? "active" : ""}`}
                  >
                    {tab.split("-").join(" ")}
                    <span className="easyunbox-product-area__tab-count">{getCategoryCount(tab)}</span>
                  </button>
                ))}
                <span ref={marker} className="easyunbox-product-area__tab-marker" aria-hidden="true" />
              </nav>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {product_items.map((prd) => (
            <div key={prd._id} className="col-xl-3 col-lg-4 col-sm-6">
              <ProductItem product={prd} />
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <button type="button" onClick={handleShowMore} className="easyunbox-product-area__show-more">
            Show more
            <span className="easyunbox-product-area__show-more-arrow"><ArrowRight /></span>
          </button>
        </div>
      </>
    );
  }

  return (
    <section className="easyunbox-product-area">
      <div className="container">
        {content}
      </div>
    </section>
  );
};

export default ProductArea;
