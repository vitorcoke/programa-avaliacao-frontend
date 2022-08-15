import { createTheme } from '@mui/material'
import { ptBR } from '@mui/x-data-grid'

const DarkMode = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000062',
      contrastText: '#fff',
    },
    background: {
      default: '#212526',
      paper: '#212526',
    },
    contrastThreshold: 3,
  },
  typography: {
    allVariants: {
      color: '#fff',
    },
  },
},ptBR)

export default DarkMode
