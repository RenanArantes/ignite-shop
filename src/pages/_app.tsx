import { AppProps } from "next/app"
import { Handbag } from 'phosphor-react'
import { globalStyles } from "../styles/global"
import logoImg from '../assets/logo.svg'
import { Container, Header, NotificationBadge } from "../styles/pages/app"
import Image from "next/future/image"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt=""/>
        <div style={{
          display: 'inline-block'
        }}>
          <Handbag size={24} color={'#8D8D99'} weight="bold"/>
          <NotificationBadge>
            <p>1</p>
          </NotificationBadge>
        </div>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

