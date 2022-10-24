import { styled } from "..";

export const CartButtonContainer = styled('div', {
  display: 'inline-block',
  cursor: 'pointer'
})

export const NotificationBadge = styled('span', {
  display: 'inline-block',
  position:  'absolute',
  zIndex: 1,
  marginTop: '-20px',
  fontSize: '14px',
  padding: '.6em',
  color: '#fff',
  backgroundColor: '$green300',
  fontWeight: 'bold',
  outline: "px solid $gray900",
  borderRadius: '50%',
  width: 24,
  height: 24,

  p: {
    marginTop: '-5px'
  }
})