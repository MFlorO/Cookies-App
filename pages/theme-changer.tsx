import { ChangeEvent, useState, FC } from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '../components/layouts';
import { Card, CardContent, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, Button} from '@mui/material'
import Cookies from 'js-cookie'



const ThemeChanger:FC = ( theme ) => { 


    const [currentTheme, setCurrentTheme] = useState('light')


    const onThemeChange = (event:ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setCurrentTheme(value)
        Cookies.set('theme', value)
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

                    <Button>
                        
                    </Button>
                </CardContent>
            </Card>
        </Layout>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ req }) => {

    const { theme = 'light' } = req.cookies

    return{
        props: {
            theme
        }
    }
}


export default ThemeChanger

