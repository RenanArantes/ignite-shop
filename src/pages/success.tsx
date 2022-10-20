import Image from "next/future/image";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

import shirt1 from '../assets/shirts/shirt1.png'
import Link from "next/link";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>
      <ImageContainer>
        <Image src={shirt1} alt="" width={114} height={106}/>
      </ImageContainer>
      <p>
        Uhuul <strong>#usuario</strong>, sua <strong>$produto</strong> já está a caminho da sua casa.
      </p>

      <Link href={'/'}>Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}