import { Handbag } from "phosphor-react"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { NotificationBadge, CartButtonContainer } from "../styles/components/CartButton"

interface CartButtonProps {
  openCart: () => void
}

export function CartButton({ openCart }: CartButtonProps){
  const { cart } = useContext(CartContext)
  const { quantity } = cart
  
  return (
    <CartButtonContainer onClick={() => openCart()}>
      <Handbag size={24} color={'#8D8D99'} weight="bold" />
      {quantity > 0 ? (
        <NotificationBadge>
          <p>{quantity}</p>
        </NotificationBadge>
      ): <></>}
    </CartButtonContainer>
  )
}