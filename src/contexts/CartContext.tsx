import { createContext, ReactNode, useState } from "react";

interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface Cart {
  products: Product[]
  quantity: number 
}

interface CartContextType {
  products: Product[]
  cart: Cart
  loadProducts: (product: Product[]) => void
  addProductOnCart: (product: Product) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState({} as Product[])
  const [cart, setCart] = useState({} as Cart)

  function loadProducts(products: Product[]) {
    setProducts(state => {
      return state
    })
  }

  function addProductOnCart(newProduct: Product) {
    setCart({
      products: [...products, newProduct],
      quantity: cart.quantity += 1
    })

    console.log('cart')
    console.log(cart)
  }

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        loadProducts,
        addProductOnCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
    
}