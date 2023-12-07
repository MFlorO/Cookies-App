import { ThemeProvider, CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import { lightTheme, darkTheme, customTheme} from '../themes';


function MyApp({ Component, pageProps }:AppProps) {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}



export default MyApp