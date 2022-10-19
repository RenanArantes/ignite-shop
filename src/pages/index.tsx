import Image from "next/future/image"
import { useKeenSlider } from 'keen-slider/react'

import { HomeContaier, Product } from "../styles/pages/home"

import shirt1 from '../assets/shirts/shirt1.png'
import shirt2 from '../assets/shirts/shirt2.png'
import shirt3 from '../assets/shirts/shirt3.png'

import 'keen-slider/keen-slider.min.css';

//os valores de getServerSideProps ficam em props do componente page
//desse arquivo
export default function Home(props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.85,
      spacing: 48
    }
  })

  return (
    <HomeContaier ref={sliderRef} className="keen-slider">
      {/* <pre>{JSON.stringify(props.list)}</pre> */}
      <Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt=""/>

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt2} width={520} height={480} alt=""/>

        <footer>
          <strong>Camiseta y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt3} width={520} height={480} alt=""/>

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt3} width={520} height={480} alt=""/>

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContaier>
  )
}

//exemplo getServerSideProps
// export const getServerSideProps = async () => {
//   await new Promise(resolve => setTimeout(resolve,2000))

//   return {
//     props : {
//       list: [1,2,3]
//     }
//   }
// }