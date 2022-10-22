import { CartBarSideContainer, CartProducts, ImageContainer, ProductContainer, RemoveItemButton } from "../styles/components/CartBarSide";
import { X } from 'phosphor-react'
import Image from "next/future/image";

import shirt1 from '../assets/shirts/shirt1.png'

interface CartBarSideProps {
  closeCart: () => void
}

export function CartBarSide({ closeCart }: CartBarSideProps)  {
  return (
    <CartBarSideContainer>

        <X size={32} weight="bold" onClick={closeCart}/>

        <h1>Sacola de compras</h1>

      <CartProducts>
        <ProductContainer>
          <ImageContainer>
            <Image src={shirt1} alt="" width={94} height={94}/>
          </ImageContainer>
          <div>
            <h3>Camisa Maratona Explorer</h3>
            <p>R$ 79,90</p>
            <RemoveItemButton type="button">Remover</RemoveItemButton>
          </div>
        </ProductContainer>
        <ProductContainer>
          <ImageContainer>
            <Image src={shirt1} alt="" width={94} height={94}/>
          </ImageContainer>
          <div>
            <h3>Camisa Maratona Explorer</h3>
            <p>R$ 79,90</p>
            <RemoveItemButton type="button">Remover</RemoveItemButton>
          </div>
        </ProductContainer>
        <ProductContainer>
          <ImageContainer>
            <Image src={shirt1} alt="" width={94} height={94}/>
          </ImageContainer>
          <div>
            <h3>Camisa Maratona Explorer</h3>
            <p>R$ 79,90</p>
            <RemoveItemButton type="button">Remover</RemoveItemButton>
          </div>
        </ProductContainer>
      </CartProducts>
    </CartBarSideContainer>
  )
}