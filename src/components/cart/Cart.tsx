import { useCart } from "../../context/cartContext";

export default function Cart() {
  const { cart } = useCart();

  console.log(cart);
  return (
    <div className="lesson-container">
      <h2>Shopping cart</h2>
    </div>
  );
}
