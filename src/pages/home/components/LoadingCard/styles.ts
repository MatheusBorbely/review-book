import { styled } from "../../../../../stitches.config";
import { keyframes } from "@stitches/react";

const skeleton = keyframes({
    '0%':{
        backgroundPosition: '0%'
    },
    '50%':{
        backgroundPosition: '100%'
    },
    '100%': { 
        backgroundPosition: '0%' 
    },
});

export const LoadingCardContainer = styled('article',{
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
    overflow: 'hidden',
})

export const LoadingCardSimulator = styled('article',{
    width: '100%',
    height: '17.5rem',
    maxWidth: '38rem',
    maxHeight: '17.5rem',
    backgroundColor: '$gray700',
    borderRadius: '0.5rem',
    position: 'relative',
    overflow: 'hidden',

    '&::after':{
        content: '',
        position: 'absolute',
        top: 0,
        left: '0',
        width: '100%',
        height: '100%',
        background: '$gradient-loading',
        backgroundSize: '400%',
        animation: `${skeleton} 2s linear infinite`,
       
    }
})