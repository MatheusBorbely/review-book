import { styled } from "../../../stitches.config";
import  MagnifyingGlass  from '../../assets/MagnifyingGlass.svg'


export const ExplorerContainer = styled('article', {
    display: 'flex',
    width: '62.25rem',
    flexDirection: 'column',
    gap: '$10',
    paddingTop: '4.5rem',
    margin: '0 auto'
})
export const ExplorerHeader = styled('header', {
    display:'flex',
    flexDirection: 'column',
    gap: '$10',
    'section:first-child': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})
export const ExplorerInput = styled('section', {
    border: '1px solid $gray500',
    padding: '.88rem $5',
    width: '27.0625rem',
    borderRadius: '0.25rem',
    display: 'flex',
    alignItems: 'center',

    svg:{
        color: '$gray500',
    },
    input: {
        all: 'unset',
        width: '100%',
        color: '$gray400',
        fontSize: '$sm',
    }   
})
export const ExplorerFilter = styled('section', {
       display: 'flex',
       alignItems: 'center',
       gap: '$3',
       justifyContent: 'flex-start',

       button:{
            all:'unset',
            display: 'flex',
            padding:'$1 $4',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '$2',
            borderRadius: '62rem',
            border: '1px solid $purple100',
            color: '$purple100',
            cursor: 'pointer',
            
            '&:disabled':{
                backgroundColor: '$purple200',
                borderColor: '$purple200',
                color: '$gray100',
                cursor: 'not-allowed'
            }
       }
})

