import { useEffect, useState } from "react";
import { IStoreProduct } from "../../types/types";

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
      <h2>Store 🛍️</h2>
      <div>
        {/* выводим данные на странице */}
        {storeProducts.map(product => (
          <p key={product.id}>{product.title}</p>
        ))}
      </div>
    </div>
  );
}

