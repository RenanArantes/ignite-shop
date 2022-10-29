import Image from "next/future/image";
import { ImageColetionContainer, ImageContainer, SuccessContainer } from "../styles/pages/success";

import shirt1 from '../assets/shirts/shirt1.png'
import Link from "next/link";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Head from "next/head";

interface SuccessProps {
  customerName: string
  products: {
    name: string
    imageUrl: string
  }[]
  quantity: number
}

export default function Success({ products, customerName, quantity }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada! | IgniteShop</title>

        {/* { bots de indexamento nao verificarao os dados dessa pagina } */}
        <meta name="robots" content="noindex"/>
      </Head>
      <SuccessContainer>
        <ImageColetionContainer>
          {products.map(product => {
            return (
                <ImageContainer key={product.name}>
                  <Image src={product.imageUrl} alt="" width={120} height={110}/>
                </ImageContainer>
              )
            })}
        </ImageColetionContainer>
        <h1>Compra efetuada!</h1>
        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {quantity} {quantity > 1 ? ('camisetas') : ('camiseta')} já está a caminho da sua casa.
        </p>
      <Link href={'/'}>Voltar ao catálogo</Link>
    </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query}) => {
  if(!query.session_id) {
    return {
      // notFound: true retorna uma página 404
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  
  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name
  const sessionProducts = session.line_items.data//[0].price.product //as Stripe.Product

  const products = sessionProducts.map(p => p.price.product as Stripe.Product)   

  const formatedProducts = products.map(product => {
    return {
      name: product.name,
      imageUrl: product.images[0]
    }
  })

  return {
    props: {
      customerName,
      products: formatedProducts,
      quantity: formatedProducts.length
    }
  }
}