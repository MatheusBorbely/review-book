import { styled } from "../../../../../stitches.config";

export const CardRecommendationContainer = styled('article', {
    display: 'flex',
    gap: '$5',
    padding: '$4 $5',
    backgroundColor: '$gray700',
    borderRadius: '.5rem',
})

export const CardRecommendationContent = styled('section', {
   display: 'flex',
   flexDirection: 'column',
   gap: '2.12rem',

   header:{
        display:'flex',
        flexDirection: 'column',
        'h2':{
            fontSize: '$md',
            fontWeight: '$bold',
            lineHeight: '$short'
        },
        span:{
            color:'$gray400',
            fontSize: '$sm'
        }
    },
})