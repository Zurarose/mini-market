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
            border: `1px solid #0000001A`,
            borderRadius: '15px',
            color: '#4BCFA0',
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
            border: `1px solid #50DAA8`,
            borderRadius: '14px',
            color: '#FFFFFF',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '28px',
            letterSpacing: '-0.02em',
            textTransform: 'none',
            padding: '10px 32px 10px 32px',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#50DAA8',
              boxShadow: 'none',
            },
          },
        },
      ],
    },
    MuiTextField: {
      variants: [
        {
          props: {variant: 'standard'},
          style: {
            borderRadius: '14px',
            border: `1px solid #0000001A`,
            padding: 10,
            '&:hover': {
              border: `1px solid #4BCFA0`,
            },
          },
        }
      ]
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": {
          boxSizing: "content-box",
        },
      }
    }
  },
});

export default defaultTheme;
