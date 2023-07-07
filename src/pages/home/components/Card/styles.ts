import { styled } from "../../../../../stitches.config";

export const CardContainer = styled('article',{
    maxWidth: '38rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '$8',
    backgroundColor: '$gray700',
    borderRadius: '0.5rem',
    padding: '$6',
    'span':{
        fontSize: '$sm',
        color: '$gray400'
    }
})
export const CardHeader = styled('header',{
    maxWidth: '38rem',
    display: 'grid',
    gap: '$4',
    gridTemplateColumns: 'auto 1fr auto',

    '> div':{
        display: 'flex',
        flexDirection: 'column',

        'h4':{
            fontSize: '$md',
            fontWeight: '$regular',
            lineHeight: '$base'
        },

    }
})

export const CardContent = styled('section', {
    display: 'flex',
    gap: '$5',
    '> div':{
        display: 'flex',
        flexDirection: 'column',
        gap: '$5',

        header:{
            'h2':{
                fontSize: '$md',
                fontWeight: '$bold',
                lineHeight: '$short'
            },
        },

        p:{
            fontSize: '$sm',
            color: '$gray300',
            lineHeight: '$base'
        }
    }
    
    
    
})


