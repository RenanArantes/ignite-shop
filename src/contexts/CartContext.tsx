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
  removeProductOfCart: (productId: string) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState({} as Product[])
  const [cart, setCart] = useState({
    products: [],
    quantity: 0
  } as Cart)

  function loadProducts(products: Product[]) {
    setProducts(state => {
      return state
    })
  }

  function addProductOnCart(newProduct: Product) {
    const checkIfProductAlreadyExistsOnCart = cart.products.find(product => newProduct.id === product.id)

    if(checkIfProductAlreadyExistsOnCart) {
      setCart((state) => {
        return ({
          products: [...state.products],
          quantity: state.quantity + 1})
      })

      console.log('produto já existente no carrinho, apenas a quantidade foi adicionada')
    } else {
      setCart((state) => {
        return ({
          products: [...state.products,newProduct],
          quantity: state.quantity + 1})
      })

      console.log('novo produto adicionado ao carrinho')
    }

    

  }

  function removeProductOfCart(productId: string) {
    const cartProductsWithoutRemovedOne = cart.products.filter(product => productId !== product.id)

    setCart((state) => {
      return ({
        products: cartProductsWithoutRemovedOne,
        quantity: state.quantity -= 1
      })
    })

    console.log('produto removido do carrinho')
  }

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        loadProducts,
        addProductOnCart,
        removeProductOfCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
    
}