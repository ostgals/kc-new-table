import { createTheme } from '@material-ui/core'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#15A4A6',
    },
    secondary: {
      main: '#F71C1C',
    },

    backgroundPrimary: '#F0F0F0',
    backgroundDelimiter: '#CCCCCC',

    textInactive: '#757575',
    textErrored: '#F71C1C',

    fieldBorder: '#A3A3A3',
    fieldActive: '#FFFFFF',
    fieldInactive: '#D7D7D7',
    fieldError: '#F71C1C',
  },
})
