import { AppProps } from "next/app"
import { Handbag } from 'phosphor-react'
import { globalStyles } from "../styles/global"
import logoImg from '../assets/logo.svg'
import { Container, Header, NotificationBadge } from "../styles/pages/app"
import Image from "next/future/image"
import { useState } from "react"
import { CartBarSide } from "../components/CartBarSide"
import { CartContextProvider } from "../contexts/CartContext"

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
          <Image src={logoImg} alt=""/>
          <div 
            style={{
              display: 'inline-block'
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

