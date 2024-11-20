import { createContext, useState } from "react";

// типизируем элемент корзины
interface ICartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

// типизируем содержание контекста
interface ICartContextType {
  cart: ICartItem[];
  addToCart: (product: ICartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

// создаем контекст
export const CartContext = createContext<ICartContextType | undefined>(undefined);

// обертка для компонентов с использованием контекста
export const CartProvider = () => {
  // стейт для корзины
  const [cart, setCart] = useState<ICartItem[]>([]);

  const addToCart = (product: ICartItem) => {
    setCart(prevCart => {
      // проверяем есть ли такой продукт в корзине
      const productExist = prevCart.find(item => item.id === product.id);
      if (productExist) {
        // если продукт уже существует мы на одно значение увеличиваем его количество и возвращаем новый массив с изменениями
        return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      // если продукта нет, то создаем новый массив из элементов старого с добавлением нового продукта
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <div>

    </div>
  );
};
