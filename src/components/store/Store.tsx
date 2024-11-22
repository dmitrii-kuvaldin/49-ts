import { useEffect, useState } from "react";
import { IStoreProduct } from "../../types/types";
import StoreCard from "../storeCard/StoreCard";
import styles from './store.module.css'

export default function Store() {
  // * переменная состояния для данных с сервера
  const [storeProducts, setStoreProducts] = useState<IStoreProduct[]>([]);

  // * асинхронная функция запрашивающая данные с сервера
  const getStoreProducts = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    setStoreProducts(data.products);
  };

  // оборачиваем вызов функции в useEffect, чтобы избежать не нужных обновлений компонента
  useEffect(() => {
    getStoreProducts();
  }, []);

  return (
    <div className="lesson-container">
      {/* <h2>Store 🛍️</h2> */}
      <div className={styles.storeGrid}>
        {/* выводим данные на странице */}
        {storeProducts.map(product => (
          <StoreCard key={product.id} id={product.id} title={product.title} price={product.price} images={product.images} thumbnail={product.thumbnail} />
        ))}
      </div>
    </div>
  );
}

