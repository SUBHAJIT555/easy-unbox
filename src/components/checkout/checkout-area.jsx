import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
// internal
import CheckoutBillingArea from "./checkout-billing-area";
import CheckoutOrderArea from "./checkout-order-area";
import useCheckoutSubmit from "@/hooks/use-checkout-submit";

const CheckoutArea = () => {
  const checkoutData = useCheckoutSubmit();
  const { handleSubmit, submitHandler, register, errors } = checkoutData;
  const { cart_products } = useSelector((state) => state.cart);

  return (
    <section className="easyunbox-checkout">
      <div className="container">
        {cart_products.length === 0 && (
          <div className="easyunbox-checkout__empty">
            <h3 className="easyunbox-checkout__empty-title">No items in cart to request a quote</h3>
            <Link href="/shop" className="easyunbox-checkout__empty-btn">
              Return to shop
            </Link>
          </div>
        )}
        {cart_products.length > 0 && (
          <form onSubmit={handleSubmit(submitHandler)} className="easyunbox-checkout__form">
            <div className="row g-4">
              <div className="col-lg-7">
                <CheckoutBillingArea register={register} errors={errors} />
              </div>
              <div className="col-lg-5">
                <CheckoutOrderArea checkoutData={checkoutData} />
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default CheckoutArea;
