import { styled } from "../../../stitches.config";

export const HomeContainer = styled('div', {
    display: 'flex',
    gap: '4rem', 

    '> section':{
        '> header':{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

            'h5':{
                fontSize: '$sm',
                color: '$gray100',
                lineHeight: '$base',
                fontWeight: '400'
            },

            a:{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '$2',
                fontSize: '$sm',
                fontWeight: '$bold',
                lineHeight: '$base',
                color: '$purple100',
            }
        },
        '> section':{
            display: 'flex',
            flexDirection: 'column',
            gap: '$3'
        } 
    }   
})

export const HomeFeed = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4', 
    maxWidth: '90rem',
    width: '100%'
})

export const HomeRecommendation = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4', 
    maxWidth: '20.25rem',
    width: '100%'
})