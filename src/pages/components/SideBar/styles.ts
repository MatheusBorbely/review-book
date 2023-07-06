import { styled } from "../../../../stitches.config";
import Background from '../../../assets/sidebar-background.png'

export const SideBarContainer = styled('aside', {
    display: 'flex',
    padding: '2.5rem 3.25rem',
    borderRadius: 12,
    background: `url(${Background.src})`,
    height: '100vh',
    margin: '1.25rem',
    alignItems: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
    maxHeight: 'calc(100vh - 2.5rem)',
    width: 'fit-content',
    gap: '4.5rem',
    minWidth: '14.5rem',
    justifyContent: 'space-between',
    marginRight: 0,
    position: 'sticky',
    top: 0,

    footer:{
        span:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '.75rem',
            color: '$white',
            fontWeight: '700',
            lineHeight: '160%',

            svg:{
                color: '$green100',
            }
        }
        
        
    }
})
export const SideBarHeader = styled('aside', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '4.5rem',
    width:'100%'
})


export const SideBarMenu = styled('ul', {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '$8'
})
export const MenuItem = styled('li', {
    a: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '$4',
        lineHeight: '160%',
        color: '$gray400',
        position: 'relative',
        
        '&.active': {
            color: '$white',

            '&::before': {
                content: '',
                position:' absolute',
                left: '-1rem',
                top: '50%', 
                width: '0.25rem',
                height: '1.5rem',
                background: '$gradient-vertical',
                transform: 'translateY(-50%)',
                borderRadius: '62.4375rem',
            }
        }
    }
    
})

  
