import { styled } from "../../../../../stitches.config";

export const LoadingCardContainer = styled('article',{
    maxWidth: '100%',
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    gap: '$3'
})

export const LoadingCardSimulator = styled('article',{
    width: '100%',
    height: '17.5rem',
    maxWidth: '38rem',
    maxHeight: '17.5rem',
    backgroundColor: '$gray700',
    borderRadius: '0.5rem',
})