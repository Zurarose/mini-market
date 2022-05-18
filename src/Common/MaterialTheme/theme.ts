import {createTheme} from '@mui/material';

const defaultTheme = createTheme({
  palette: {
    background: {
      default: 'rgba(242, 242, 242, 1)'
    },
  },
  typography: {
    subtitle1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: '#000000',
      opacity: '0.5'
    },
    h3: {
      fontWeight: 400,
      fontSize: '30px',
      lineHeight: '54px',
      letterSpacing: '-0.02em',
      color: '#000000',
    },
    h2: {
      fontWeight: 400,
      fontSize: '40px',
      lineHeight: '48px',
      letterSpacing: '-0.02em',
      textTransform: 'capitalize',
      color: '#000000',
    },
    h1: {
      fontWeight: 400,
      fontSize: '60px',
      lineHeight: '72px',
      letterSpacing: '-0.02em',
      textTransform: 'capitalize',
      color: '#000000',
    }
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: `1px solid`,
            borderRadius: '15px',
            color: '#4BCFA0',
            borderColor: '#0000001A',
            '&:hover': {
              backgroundColor: '#4BCFA0',
              color: '#FFFFFF',
              borderColor: '#4BCFA0',
            },
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor: '#50DAA8',
            border: `1px solid`,
            borderRadius: '10px',
            color: '#FFFFFF',
            borderColor: '#50DAA8',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '28px',
            letterSpacing: '-0.02em',
            textTransform: 'none',
            padding: '8px 25px 8px 25px',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#50DAA8',
              boxShadow: 'none',
            },
          },
        },
      ],
    },
  },
});

export default defaultTheme;
