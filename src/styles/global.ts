import { globalCss } from '../../stitches.config';
import { styled } from '../../stitches.config';

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },

    body: {
        backgroundColor: '$gray800',
        color: '$gray100',
        '-webkit-font-smoothing': 'antialiased',
        lineHeight: '$base'
    },

    'body, input, textarea, button': {
        fontFamily: '$default',
        fontWeight: 400,
    },
    'li, a': {
        listStyle: 'none',
        textDecoration: 'none'
    }
});

export const GlobalContainer = styled('section', {
    display: 'flex',
})

// All pages styles
export const PageContainer = styled('main', {
    display: 'flex',
    width: '90rem',
    flexDirection: 'column',
    gap: '$10',
    padding: '0 6rem',
    paddingTop: '4.5rem',
    margin: '0 auto'

})
export const PageTitle = styled('section', {
    display:'flex',
    gap: '$3',

    svg:{
        color: '$green100'
    },
    'h1': {
        fontSize: '$2xl',
        fontWeight: '$bold',
        lineHeight: '$short',
    }
})
