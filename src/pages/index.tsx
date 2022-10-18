import Image from "next/future/image"
import { styled } from "../styles"
import { HomeContaier, Product } from "../styles/pages/home"

import shirt1 from '../assets/shirts/shirt1.png'
import shirt2 from '../assets/shirts/shirt2.png'
import shirt3 from '../assets/shirts/shirt3.png'

export default function Home() {
  return (
    <HomeContaier>
      <Product>
        <Image src={shirt1} width={520} height={480} alt=""/>

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={shirt2} width={520} height={480} alt=""/>

        <footer>
          <strong>Camiseta y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContaier>
  )
}
