import Image from "next/future/image"
import { useKeenSlider } from 'keen-slider/react'

import { HomeContaier, Product } from "../styles/pages/home"

import shirt1 from '../assets/shirts/shirt1.png'
import shirt2 from '../assets/shirts/shirt2.png'
import shirt3 from '../assets/shirts/shirt3.png'

import 'keen-slider/keen-slider.min.css';
import { stripe } from "../lib/stripe"
import { GetServerSideProps } from "next"
import Stripe from "stripe"

interface HomeProps {
  products : {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

//os valores de getServerSideProps ficam em props do componente page
//desse arquivo
export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.85,
      spacing: 48
    }
  })

  return (
    <HomeContaier ref={sliderRef} className="keen-slider">
      {
        products.map(product => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />
      
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          )
        })
      }
      
    </HomeContaier>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,

    }
  })

  return {
    props : {
      products
    }
  }
}