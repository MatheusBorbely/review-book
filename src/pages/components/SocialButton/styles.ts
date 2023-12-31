import { styled } from "../../../../stitches.config";

export const ButtonContainer = styled('button', {
    all: 'unset',
    padding: '$5 $6',
    background: '$gray600',
    color: '$gray200',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '$5',
    width: '23rem',
    maxWidth: '100%',
    borderRadius: 8,
    cursor: 'pointer'
})