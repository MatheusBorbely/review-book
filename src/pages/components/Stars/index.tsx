import React from 'react'
import { StarsContainer } from './styles'
import { Star } from 'phosphor-react'

export default function Stars({ rating }: { rating: number }) {
    const ratings = [...Array(5)].map(( _, index) => (
        <Star size={16} weight={`${index < rating ? 'fill' : 'regular'}`} />
    ))
  
    return (
        <StarsContainer>
            {ratings}
        </StarsContainer>
    )
}
