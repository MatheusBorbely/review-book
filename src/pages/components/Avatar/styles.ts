import { styled } from "../../../../stitches.config";

export const AvatarContainer = styled('section', {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '$full',
    background: '$gradient-vertical',
    width: 45,
    height: 45,

    img:{
        borderRadius: '$full',
    }
})