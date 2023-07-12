import React from 'react'
import { CardRecommendationContainer, CardRecommendationContent } from './styles'
import { Book } from '@/interfaces/Book/Book'
import Image from 'next/image'
import Stars from '@/pages/components/Stars'

export default function CardRecommendation({name, author, cover, rate }: Book) {
  return (
    <CardRecommendationContainer>
        <Image src={cover} width={64} height={94} quality={100} alt={name} />
            <CardRecommendationContent>
                <header>
                    <h2>
                        {name}
                    </h2>
                    <span>
                        {author}
                    </span>
                </header>
                <Stars rating={rate}/>
            </CardRecommendationContent>
    </CardRecommendationContainer>
  )
}
