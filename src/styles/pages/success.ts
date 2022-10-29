import { styled } from "..";

export const SuccessContainer = styled('main', {
  display:'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: '$gray100',
  },

  p: {
    fontSize: "$xl",
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    lineHeight: '1.4'
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      transition: '$medium',
      color: '$green300'
    }
  }
})

export const ImageColetionContainer = styled('div', {
  width: '100%',
  marginTop: '4rem',
  marginBottom: '2rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ImageContainer = styled('div', {
  maxWidth: 130,
  height: 130,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 9999,
  padding: '0.25rem',
  
  marginLeft: -50,
  boxShadow: '-10px 4px 50px 4px black',
  img: {
    objectFit: 'cover',
  },
})