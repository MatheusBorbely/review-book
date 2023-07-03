import { styled } from "../../../stitches.config";

export const HomeFeed = styled('article', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4', 

    'h5':{
        fontSize: '$sm',
        color: '$gray100',
        lineHeight: '$base',
        fontWeight: '400'
    }

})