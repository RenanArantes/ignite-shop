import { AppProps } from "next/app"
import { Handbag } from 'phosphor-react'
import { globalStyles } from "../styles/global"
import logoImg from '../assets/logo.svg'
import { Container, Header, NotificationBadge } from "../styles/pages/app"
import Image from "next/future/image"
import { useState } from "react"
import { CartBarSide } from "../components/CartBarSide"
import { CartContextProvider } from "../contexts/CartContext"
import Link from "next/link"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [notifications, setNotifications] = useState(8)
  const [isCartOpen, setIsCartOpen] = useState(false)

  console.log(`O carrinho está aberto? ${isCartOpen}`)

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
          <div 
            style={{
              display: 'inline-block',
              cursor: 'pointer'
            }}
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <Handbag size={24} color={'#8D8D99'} weight="bold" />
            {notifications > 0 ? (
              <NotificationBadge>
              <p>{notifications}</p>
            </NotificationBadge>
            ): <></>}
          </div>
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}

