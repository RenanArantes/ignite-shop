import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import axios from 'axios'
import Image from "next/future/image"
import { GetStaticPaths, GetStaticProps } from "next"
import { stripe } from "../../lib/stripe"
import { formatPrice } from "../../utils/formatPrice"
import Stripe from "stripe"
import { useRouter } from "next/router"
import { useContext, useState } from "react"
import Head from "next/head"
import { CartContext } from "../../contexts/CartContext"

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { isFallback } = useRouter()

  const { addProductOnCart } = useContext(CartContext)

  if(isFallback) {
    console.log('fallback true')
    return <h1>L O A D I N G . . .</h1>
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })
      
      const { checkoutUrl} = response.data

      console.log(checkoutUrl)
      window.location.href= checkoutUrl
      console.log('redirecionado')
    } catch(err) {
      // Conectar com uma ferramenta de observabilidade (Datadog/ Sentry)

      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <>
      <Head>
        <title>asdas| Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={480}/>
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{formatPrice(product.price)}</span>
          <p>{product.description}</p>

          <button disabled={isCreatingCheckoutSession} onClick={() => addProductOnCart(product)}>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_MdsfjWc6cmGt8Z'}}
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string}> = async ({ params }) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1
  }
}