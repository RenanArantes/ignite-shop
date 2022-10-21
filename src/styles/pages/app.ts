import { styled } from ".."

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 12px',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',

  div: {
    backgroundColor: '$gray800',

    padding: 12,
    borderRadius: 6,
    transition: '$medium',

    '&:hover': {
      filter: 'brightness(120%)'
    }
  },
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