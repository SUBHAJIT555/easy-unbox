import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { TablerCart, TablerEye, TablerHeart } from "@/svg";
import { handleProductModal } from "@/redux/features/productModalSlice";
import { add_cart_product } from "@/redux/features/cartSlice";
import { add_to_wishlist } from "@/redux/features/wishlist-slice";
import { notifyError } from "@/utils/toast";

const ProductSliderItem = ({ product }) => {
  const { _id, title, price, img, status } = product || {};
  const { cart_products } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const isAddedToCart = cart_products.some((prd) => prd._id === _id);
  const isAddedToWishlist = wishlist.some((prd) => prd._id === _id);
  const dispatch = useDispatch();

  const handleAddProduct = (prd) => {
    if (prd.status === "out-of-stock") {
      notifyError(`This product out-of-stock`);
    } else {
      dispatch(add_cart_product(prd));
    }
  };

  const handleWishlistProduct = (prd) => {
    dispatch(add_to_wishlist(prd));
  };

  return (
    <div className="easyunbox-product-card">
      <div className="easyunbox-product-card__thumb">
        <Image
          src={img || "/assets/img/product/product-1.jpg"}
          alt={title}
          width={280}
          height={280}
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
        <div className="easyunbox-product-card__actions">
          <button
            type="button"
            onClick={() => handleAddProduct(product)}
            className={`easyunbox-product-card__action ${isAddedToCart ? "active" : ""}`}
            title="Add to Cart"
          >
            <TablerCart width={20} height={20} />
          </button>
          <button
            type="button"
            onClick={() => dispatch(handleProductModal(product))}
            className="easyunbox-product-card__action"
            title="Quick View"
          >
            <TablerEye width={20} height={20} />
          </button>
          <button
            type="button"
            onClick={() => handleWishlistProduct(product)}
            className={`easyunbox-product-card__action ${isAddedToWishlist ? "active" : ""}`}
            title="Add to Wishlist"
          >
            <TablerHeart width={20} height={20} />
          </button>
        </div>
      </div>
      <div className="easyunbox-product-card__content">
        <h3 className="easyunbox-product-card__title">
          <button
            type="button"
            onClick={() => dispatch(handleProductModal(product))}
            className="easyunbox-product-card__title-link"
          >
            {title}
          </button>
        </h3>
        <p className="easyunbox-product-card__price">₹{typeof price === "number" ? price.toFixed(2) : price}</p>
      </div>
    </div>
  );
};

export default ProductSliderItem;
