import { CartBarSideContainer, CartProducts, ImageContainer, ProductContainer, RemoveItemButton } from "../styles/components/CartBarSide";
import { X } from 'phosphor-react'
import Image from "next/future/image";

import shirt1 from '../assets/shirts/shirt1.png'
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { formatPrice } from "../utils/formatPrice";

interface CartBarSideProps {
  closeCart: () => void
}

export function CartBarSide({ closeCart }: CartBarSideProps)  {
  const { cart, removeProductOfCart } = useContext(CartContext)
  const { products, quantity, totalValue } = cart

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
        }) : (<h1>Carrinho Vazio!!!!</h1>)}
        <div>
          <span>
            <label>Quantidade: </label>{quantity}
          </span>
          <span>
            <strong>Valor total: {formatPrice(totalValue)}</strong>
          </span>
        </div>
      </CartProducts>
    </CartBarSideContainer>
  )
}