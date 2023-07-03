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
export const ExplorerHeader = styled('article', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    


    input: {
        all: 'unset',
        border: '1px solid $gray500',
        padding: '.88rem $5',
        color: '$gray400',
        fontSize: '$sm',
        width: '27.0625rem',
        borderRadius: '0.25rem',

        '&::before': {
            

        }
    }   
})

