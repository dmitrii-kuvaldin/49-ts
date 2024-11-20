import { NavLink } from "react-router-dom";
import styles from './header.module.css';
import { useCart } from "../../context/cartContext";




export default function Header() {
  const { cart } = useCart();

  const calculateCartPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity,0)
  }

  return (
    <header className={styles.header}>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"/"}>Lessons</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"fetch-dog"}>Fetch dog</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"hero-gallery"}>Hero gallery</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"gender-form"}>Gender form</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"products"}>Products</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"cart"}>Cart</NavLink>
      <span style={{color: 'black'}}>Сумма в корзине: {calculateCartPrice().toFixed(2)}€</span>
    </header >
  );
}
