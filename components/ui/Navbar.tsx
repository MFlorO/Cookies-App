import { FC } from "react"
import NextLink from 'next/link'
import { AppBar, IconButton, Toolbar, Link, Stack ,Typography } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


const Navbar:FC = () => { 

    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar style={{ gap: 8 }}>

                <IconButton size='large' edge='start'><MenuOutlinedIcon /></IconButton>

                <Stack width='100%' direction='row' justifyContent='space-between'>

                    <NextLink href='/' passHref>
                        <Link>
                        <Typography variant="h6" color='white'>CookieMaster</Typography>
                        </Link>
                    </NextLink> 

                    <NextLink href='/theme-changer' passHref>
                        <Link>
                        <Typography variant="h6" color='white'>Cambiar Tema</Typography>
                        </Link>
                    </NextLink> 

                </Stack>

            </Toolbar>
        </AppBar>
    )
}



export default Navbar

