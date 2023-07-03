import { styled } from "../../../stitches.config";

export const LoginContainer = styled('main', {
    display: 'flex',
    padding: '$5',
    maxHeight: '100vh',
    overflow: 'hidden'
})
export const LoginOptions = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$10',
    flexGrow: 1,
    h1: {
        fontWeight: '$bold',
        fontSize: '$2xl',
        lineHeight: '$short',
        margin: 0,
    },
    span:{
        lineHeight: '$base',
        color: '$gray200',
    },
    article:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '$10',

        section:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '$4',
            width: '100%'
        }
    }
})

export const BannerHero = styled('section', {
    position: 'relative',
    flexGrow: 0,
    overflow: 'hidden',
    'img:first-child': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
    }
})