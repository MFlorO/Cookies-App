import { useEffect, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import { lightTheme, darkTheme, customTheme} from '../themes';
import Cookies from 'js-cookie';



function MyApp({ Component, pageProps }:AppProps) {

  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {
    
    const cookieTheme = Cookies.get('theme') || 'light'
    
    const selectedTheme = cookieTheme === 'light' 
      ? lightTheme 
      : (cookieTheme === 'dark') 
          ? darkTheme
          : customTheme

    setCurrentTheme(selectedTheme)

  }, [])
  

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}



export default MyApp