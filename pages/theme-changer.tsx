import { ChangeEvent, useState, FC } from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '../components/layouts';
import axios from 'axios';
import Cookies from 'js-cookie'
import { Card, CardContent, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, Button, Typography, Stack} from '@mui/material'


interface Props {
    theme: string
}


const ThemeChanger:FC<Props> = ( theme ) => { 

    const [currentTheme, setCurrentTheme] = useState<string>('light')
    const [cookieAxios, setcookieAxios] = useState('light')


    const onThemeChange = (event:ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setCurrentTheme(value)
        Cookies.set('theme', value)
    }

    const onClickAxios = async () => {
        const { data } = await axios.get('/api/cookie')
        const value = Object.values(data)[0]
        setCurrentTheme(JSON.stringify(value))
        setcookieAxios(JSON.stringify(value))
    }


    return (
        <Layout>
            <Card>
                <CardContent>

                    <FormControl>

                        <FormLabel>TEMA: {Object.values(theme)}</FormLabel>

                        <RadioGroup value={currentTheme} onChange={onThemeChange}>
                            <FormControlLabel value='light' control={ <Radio /> } label='Light' />
                            <FormControlLabel value='dark' control={ <Radio /> } label='Dark' />
                            <FormControlLabel value='custom' control={ <Radio /> } label='Custom' />
                        </RadioGroup>

                    </FormControl>

                    <Stack direction='row' alignItems='center' gap={2}>
                        <Button onClick={onClickAxios} variant='outlined'>SOLICITUD: </Button>
                        <Typography>{cookieAxios}</Typography>
                    </Stack>

                </CardContent>
            </Card>
        </Layout>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ req }) => {

    const { theme = 'light' } = req.cookies

    const validTheme = ['light', 'dark', 'custom']

    return{
        props: {
            theme: validTheme.includes(theme) ? theme : 'dark'
        }
    }
}


export default ThemeChanger

