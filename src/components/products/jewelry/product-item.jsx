import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { TablerCart, TablerEye, TablerHeart } from "@/svg";
import { handleProductModal } from "@/redux/features/productModalSlice";
import { add_cart_product } from "@/redux/features/cartSlice";
import { add_to_wishlist } from "@/redux/features/wishlist-slice";
import { notifyError } from "@/utils/toast";

const ProductItem = ({ product }) => {
  const { _id, img, title, price, discountedPrice, tags, status } = product || {};
  const { cart_products } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const isAddedToCart = cart_products.some((prd) => prd._id === _id);
  const isAddedToWishlist = wishlist.some((prd) => prd._id === _id);
  const dispatch = useDispatch();

  const sellingPrice = discountedPrice && discountedPrice < price ? discountedPrice : price;
  const originalPrice = discountedPrice && discountedPrice < price ? price : null;
  const outOfStock = status === "out-of-stock";

  const handleAddProduct = (prd) => {
    if (outOfStock) {
      notifyError("This product is out of stock");
      return;
    }
    dispatch(add_cart_product(prd));
  };

  const handleWishlistProduct = (prd) => {
    dispatch(add_to_wishlist(prd));
  };

  const handleOpenModal = () => {
    dispatch(handleProductModal(product));
  };

  return (
    <div className="easyunbox-product-card easyunbox-product-card--grid mb-4">
      <div className="easyunbox-product-card__thumb">
        <button
          type="button"
          onClick={handleOpenModal}
          className="easyunbox-product-card__thumb-link"
          disabled={outOfStock}
        >
          <Image
            src={img || "/assets/img/product/product-1.jpg"}
            alt={title || "Product"}
            width={284}
            height={352}
            sizes="(min-width: 992px) 25vw, 50vw"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </button>
        {outOfStock && (
          <span className="easyunbox-product-card__badge easyunbox-product-card__badge--out">
            Out of stock
          </span>
        )}
        <div className="easyunbox-product-card__actions">
          {isAddedToCart ? (
            <Link
              href="/cart"
              className="easyunbox-product-card__action active"
              title="View Cart"
            >
              <TablerCart width={20} height={20} />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => handleAddProduct(product)}
              className="easyunbox-product-card__action"
              disabled={outOfStock}
              title="Add to Cart"
            >
              <TablerCart width={20} height={20} />
            </button>
          )}
          <button
            type="button"
            onClick={handleOpenModal}
            className="easyunbox-product-card__action"
            title="Quick View"
          >
            <TablerEye width={20} height={20} />
          </button>
          <button
            type="button"
            onClick={() => handleWishlistProduct(product)}
            className={`easyunbox-product-card__action ${isAddedToWishlist ? "active" : ""}`}
            disabled={outOfStock}
            title="Add to Wishlist"
          >
            <TablerHeart width={20} height={20} />
          </button>
        </div>
      </div>
      <div className="easyunbox-product-card__content">
        {tags?.[0] && (
          <p className="easyunbox-product-card__tag">{tags[0]}</p>
        )}
        <h3 className="easyunbox-product-card__title">
          <button
            type="button"
            onClick={handleOpenModal}
            className="easyunbox-product-card__title-link"
          >
            {title}
          </button>
        </h3>
        <div className="easyunbox-product-card__price-wrap">
          <span className="easyunbox-product-card__price">
            ₹{typeof sellingPrice === "number" ? sellingPrice.toFixed(2) : sellingPrice}
          </span>
          {originalPrice != null && (
            <span className="easyunbox-product-card__price-old">
              ₹{originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
