import { background, extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors : {
        gray: {
            gray: {
                "600" : "#47585B",
                "50" : "#DADADA",

            }
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto',
    },
    styles: {
        global: {
            body: {
                color: 'gray.600',
                background: 'gray.100'
            }
        }
    }
})