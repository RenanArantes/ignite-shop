import Image from "next/future/image"
import { useKeenSlider } from 'keen-slider/react'
import { Handbag } from 'phosphor-react'

import { ButtonCartContainer, HomeContaier, Product } from "../styles/pages/home"

import 'keen-slider/keen-slider.min.css';
import { stripe } from "../lib/stripe"
import { GetStaticProps } from "next"
import Stripe from "stripe"
import { formatPrice } from "../utils/formatPrice";
import Link from "next/link";
import Head from "next/head";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface HomeProps {
  products : {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

//os valores de getServerSideProps ficam em props do componente page
//desse arquivo
export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.3,
      spacing: 48
    }
  })

  const { loadProducts, addProductOnCart } = useContext(CartContext)

  loadProducts(products)

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContaier ref={sliderRef} className="keen-slider">
        {
          products.map(product => {
            return (
              <Product key={product.id} className="keen-slider__slide">
                <Link href={`/product/${product.id}`} >
                  <Image src={product.imageUrl} width={520} height={480} alt="" />
          
                  <footer>
                    <div>
                      <strong>{product.name}</strong>
                      <span>{product.price}</span>
                    </div>
                    <ButtonCartContainer type="button" onClick={() => addProductOnCart(product)} >
                      <Handbag size={32} color="white" weight="bold"/>
                    </ButtonCartContainer>
                  </footer>
                </Link>
              </Product>
            )
          })
        }
      </HomeContaier>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map<Product>(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formatPrice(price.unit_amount),
    }
  })

  return {
    props : {
      products
    },
    revalidate: 60 * 60 * 2
  }
}