import { AppProps } from "next/app"
import { Handbag } from 'phosphor-react'
import { globalStyles } from "../styles/global"
import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app"
import Image from "next/future/image"
import { useContext, useState } from "react"
import { CartBarSide } from "../components/CartBarSide"
import { CartContext, CartContextProvider } from "../contexts/CartContext"
import Link from "next/link"
import { CartButton } from "../components/CartButton"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  console.log(`O carrinho está aberto? ${isCartOpen}`)

  function handleOpenCart() {
    setIsCartOpen(state => !state)
  }

  function handleCloseCart() {
    setIsCartOpen(false)
  }

  return (
    <CartContextProvider>
      <div style={isCartOpen === true ?  {display: 'block'} : {display: 'none'}}>
          <CartBarSide closeCart={handleCloseCart} />
      </div>
      <Container>   
        <Header>
          <Link href="/">
            <Image src={logoImg} alt=""/>
          </Link>
          
          <CartButton openCart={handleOpenCart} />
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}

