import { CartBarSideContainer, CartProducts, CartValueContainer, ImageContainer, ProductContainer, RemoveItemButton } from "../styles/components/CartBarSide";
import { X } from 'phosphor-react'
import Image from "next/future/image";

import shirt1 from '../assets/shirts/shirt1.png'
import { CartContext } from "../contexts/CartContext";
import { useContext, useState } from "react";
import { formatPrice } from "../utils/formatPrice";
import axios from "axios";

interface CartBarSideProps {
  closeCart: () => void
}

export function CartBarSide({ closeCart }: CartBarSideProps)  {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  const { cart, removeProductOfCart } = useContext(CartContext)
  const { products, quantity, totalValue } = cart

  async function handleFinishOrder() {
    try {
      setIsCreatingCheckoutSession(true)

      const pricesIds = products.map(product => {
        return {
          price: product.defaultPriceId,
          quantity: 1
        }
      })

      const response = await axios.post('/api/cartCheckout', {
        pricesIds: pricesIds
      })

      const { checkoutUrl} = response.data

      window.location.href= checkoutUrl
      console.log('redirecionado')
    } catch(err) {
      alert('Falha ao redirecionar ao checkout!!')
    }
  }

  return (
    <CartBarSideContainer>
        <X size={32} weight="bold" onClick={closeCart}/>
        <h1>Sacola de compras</h1>
      <CartProducts>
        {products.length > 0 ? products.map(product => {
          return (
            <ProductContainer key={product.id}>
                <ImageContainer>
                  <Image src={product.imageUrl} alt="" width={94} height={94}/>
                </ImageContainer>
                <div>
                  <h3>{product.name}</h3>
                  <p>{formatPrice(product.price)}</p>
                  <RemoveItemButton type="button" onClick={() => removeProductOfCart(product.id)}>Remover</RemoveItemButton>
                </div>
            </ProductContainer>
          )
        }) : (<ProductContainer>Carrinho Vazio!!!!</ProductContainer>)}
      </CartProducts>
      <CartValueContainer>
        <span>
          <label>Quantidade: </label>{quantity} itens
        </span>
        <span>
          <strong>Valor total: </strong>
          <strong>{formatPrice(totalValue)}</strong>
        </span>
        <button type="button" onClick={() => handleFinishOrder()}>
          Finalizar Compra
        </button>
      </CartValueContainer>
    </CartBarSideContainer>
  )
}