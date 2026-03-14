import { useSelector } from "react-redux";
// internal
import useCartInfo from "@/hooks/use-cart-info";

const CheckoutOrderArea = ({ checkoutData }) => {
  const { submitting, error } = checkoutData;
  const { cart_products } = useSelector((state) => state.cart);
  const { total: cartTotal } = useCartInfo();

  return (
    <div className="easyunbox-checkout__order">
      <h3 className="easyunbox-checkout__order-title">Your Order</h3>

      <div className="easyunbox-checkout__order-list">
        <ul>
          <li className="easyunbox-checkout__order-header">
            <span>Product</span>
            <span>Total</span>
          </li>

          {cart_products.map((item) => (
            <li key={item._id} className="easyunbox-checkout__order-row">
              <span>
                {item.title} <em>× {item.orderQuantity}</em>
              </span>
              <span>₹{((item.discountedPrice ?? item.price) * item.orderQuantity).toFixed(2)}</span>
            </li>
          ))}

          <li className="easyunbox-checkout__order-subtotal">
            <span>Subtotal</span>
            <span>₹{cartTotal.toFixed(2)}</span>
          </li>

          <li className="easyunbox-checkout__order-total">
            <span>Total</span>
            <span>₹{cartTotal.toFixed(2)}</span>
          </li>
        </ul>
      </div>

      {error && (
        <div className="easyunbox-checkout__error">
          {error}
        </div>
      )}

      <div className="easyunbox-checkout__submit">
        <button
          type="submit"
          disabled={submitting}
          className="easyunbox-checkout__btn"
        >
          {submitting ? "Sending…" : "Ask for Quote"}
        </button>
      </div>
    </div>
  );
};

export default CheckoutOrderArea;
