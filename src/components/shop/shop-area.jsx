import React, { useMemo, memo } from "react";
import Pagination from "@/ui/Pagination";
import ProductItem from "../products/jewelry/product-item";
import CategoryFilter from "./shop-filter/category-filter";
import ColorFilter from "./shop-filter/color-filter";
import PriceFilter from "./shop-filter/price-filter";
import ProductBrand from "./shop-filter/product-brand";
import StatusFilter from "./shop-filter/status-filter";
import TopRatedProducts from "./shop-filter/top-rated-products";
import ShopListItem from "./shop-list-item";
import ShopTopLeft from "./shop-top-left";
import ShopTopRight from "./shop-top-right";
import ResetButton from "./shop-filter/reset-button";

const COUNT_PER_PAGE = 12;

const ShopArea = memo(({ all_products, products, otherProps }) => {
  const { priceFilterValues, selectHandleFilter, currPage, setCurrPage } = otherProps;

  // Derive pagination from currPage to avoid extra state and re-renders
  const pageStart = (currPage - 1) * COUNT_PER_PAGE;
  const paginatedProducts = useMemo(
    () => products.slice(pageStart, pageStart + COUNT_PER_PAGE),
    [products, pageStart]
  );
  const showing = paginatedProducts.length;

  // max price (capped at 10,000)
  const maxPrice = useMemo(() => {
    const calculatedMaxPrice = all_products.reduce((max, product) => {
      return product.price > max ? product.price : max;
    }, 0);
    return Math.min(calculatedMaxPrice, 10000);
  }, [all_products]);

  return (
    <section className="easyunbox-shop">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-3 col-lg-4">
            <aside className="easyunbox-shop__sidebar">
              <PriceFilter
                priceFilterValues={priceFilterValues}
                maxPrice={maxPrice}
              />
              <CategoryFilter setCurrPage={setCurrPage} />
              <TopRatedProducts />
              <ResetButton />
            </aside>
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="easyunbox-shop__main">
              <div className="easyunbox-shop__top">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <ShopTopLeft
                      showing={products.length === 0 ? 0 : showing}
                      total={products.length}
                    />
                  </div>
                  <div className="col-md-6">
                    <ShopTopRight selectHandleFilter={selectHandleFilter} />
                  </div>
                </div>
              </div>
              {products.length === 0 && (
                <p className="easyunbox-shop__empty">No products found.</p>
              )}
              {products.length > 0 && (
                <>
                  <div className="tab-content" id="productTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="grid-tab-pane"
                      role="tabpanel"
                      aria-labelledby="grid-tab"
                      tabIndex="0"
                    >
                      <div className="row g-4">
                        {paginatedProducts.map((item) => (
                          <div
                            key={item._id}
                            className="col-xl-4 col-md-6 col-sm-6"
                          >
                            <ProductItem product={item} />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="list-tab-pane"
                      role="tabpanel"
                      aria-labelledby="list-tab"
                      tabIndex="0"
                    >
                      <div className="easyunbox-shop__list">
                        {paginatedProducts.map((item) => (
                          <ShopListItem key={item._id} product={item} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="easyunbox-shop__pagination">
                    <Pagination
                      items={products}
                      countOfPage={COUNT_PER_PAGE}
                      currPage={currPage}
                      setCurrPage={setCurrPage}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ShopArea.displayName = "ShopArea";

export default ShopArea;
