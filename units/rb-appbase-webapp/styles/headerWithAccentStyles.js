// @flow

export default {
  card: {
    minWidth: 350,
    maxWidth: 1200,
  },
  cardContentRoot: {
    marginTop: 24,
    padding: 0,
  },
  cardHeaderRoot: {
    background: 'linear-gradient(60deg, #144a84, #2060a0)',
    borderRadius: 4,
    boxShadow:
      '0 12px 20px -10px rgba(0, 128, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 152, 128, 0.2)',
    color: '#ffffff',
    marginLeft: 16,
    marginTop: -16,
    marginRight: 48,
    marginBottom: -16,
    maxWidth: 1200 - 64,
    position: 'relative',
    zIndex: 800,
  },
  cardHeaderSubHeader: {
    color: '#c0c0c0',
  },
  cardHeaderTitle: {
    color: '#ffffff',
  },
  cardHeaderLink: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    display: 'inline',
    fontSize: '1rem',
    outline: 0,
    margin: 0,
    padding: 0,
    textDecoration: 'underline',
    '&:hover': {
      backgroundColor: '#000000',
      textDecoration: 'none',
    },
    '&:focus': {
      backgroundColor: '#ffffff',
      color: '#000000',
      textDecoration: 'none',
    },
  },
  cardHeaderLinkBack: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#c0c0c0',
    cursor: 'pointer',
    display: 'inline',
    fontSize: '1rem',
    outline: 0,
    margin: 0,
    padding: 0,
    textDecoration: 'underline',
    '&:hover': {
      backgroundColor: '#000000',
      textDecoration: 'none',
    },
    '&:focus': {
      backgroundColor: '#ffffff',
      color: '#000000',
      textDecoration: 'none',
    },
  },
  cardHeaderStrong: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
}
