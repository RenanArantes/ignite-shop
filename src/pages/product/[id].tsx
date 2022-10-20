import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

import Image from "next/future/image"
import { GetStaticPaths, GetStaticProps } from "next"
import { stripe } from "../../lib/stripe"
import { formatPrice } from "../../utils/formatPrice"
import Stripe from "stripe"
import { useRouter } from "next/router"

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()

  if(isFallback) {
    console.log('fallback true')
    return <h1>L O A D I N G . . .</h1>
  }

  function handleBuyProduct() {
    console.log(product.defaultPriceId)
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} alt="" width={520} height={480}/>
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>

        <button onClick={handleBuyProduct}>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
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
        price: formatPrice(price.unit_amount),
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1
  }
}