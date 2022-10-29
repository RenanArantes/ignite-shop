import { styled } from "..";

export const CartBarSideContainer = styled('div', {
  right: 0,
  height: '100%',
  width: 480,
  backgroundColor: '$gray800',
  position: 'fixed !important',
  zIndex: 2,
  overflow: "auto",
  padding: 48,

  svg: {
    float: 'right',
    color: '$gray300'
  },

  'h1': {
    marginTop: 72,

    fontWeight: 700,
    fontSize: 20,
    lineHeight: '160%',
  },
})

export const CartProducts = styled('div',{
  marginTop: 32,
  
  minHeight: 580,
})

export const ProductContainer = styled('div',{
  display: 'flex',
  marginBottom: 24,

  h3: {
    color: '$gray300',
    fontSize: 18,
    lineHeight: '160%',
    fontWeight: 'normal'
  },

  p: {
    color: "$white",
    fontSize: 18,
    fontWeight: 700,
    lineHeight: '160%'
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 103,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  marginRight: 20,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },
})

export const RemoveItemButton = styled('button', {
  border: 'none',
  backgroundColor: 'transparent',
  color: '$green500',
  fontSize: 16,
  fontWeight: 'bold',

  marginTop: 8,

  '&:hover': {
    transition:"$medium" ,
    color: '$green300',
  }
})

export const CartValueContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },
    
    '&:hover(:disabled):hover': {
      transition: "$medium",
      backgroundColor: '$green300'
    }
  },

  span: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 7,
    fontSize: 18
  },

  'strong:last-child': {
    fontSize: 25,
    fontWeight: 700,
    lineHeight: '140%'
  }
  
})