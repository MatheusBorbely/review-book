import Head from 'next/head'
import { CaretRight, ChartLineUp } from 'phosphor-react'
import React from 'react'
import { HomeFeed, HomeContainer, HomeRecommendation } from './styles'
import { PageContainer, PageTitle } from '@/styles/global'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { Card } from './components/Card'
import { LoadingCard } from './components/LoadingCard'
import Link from 'next/link'
import { RatingHomeFeed } from '@/interfaces/Rating/RatingHomeFeed'
import { Book } from '@/interfaces/Book/Book'
import { z } from 'zod'
import CardRecommendation from './components/CardRecommendation'


export default function Home() {
  const {data: ratings, isLoading: isLoadingRatings} = useQuery(['ratings'],async () => {
    const response = await api.get('/ratings');
    return response.data;
  })

  const {data: recommedations, isLoading: isLoadingRecommedations} = useQuery(['recommedations'],async () => {
    const response = await api.get('/books',{
      params:{
        order: 'DESC'
      }
    });
    return response.data;
  })

  const CardsRatings = isLoadingRatings ? (
    <LoadingCard />
  ) : (
    ratings.map((rating: RatingHomeFeed) => <Card key={rating.id} {...rating} />)
  );
  const CardsRecommedantions = isLoadingRecommedations ? (
    <LoadingCard />
  ) : (
    recommedations.map((recommedation: Book) => <CardRecommendation key={recommedation.id} {...recommedation}/>)
  );
  return (
    <>
      <Head>
          <title>Review Book</title>
      </Head>

      <PageContainer>
        <PageTitle>
          <ChartLineUp  size={32} />
          <h1>Início</h1>
        </PageTitle>
        <HomeContainer>
          <HomeFeed>
            <header>
              <h5>Avaliações mais recentes</h5>
            </header>
            <section>
              {CardsRatings}
            </section>
          </HomeFeed>
          <HomeRecommendation>
            <header>
              <h5>
                Livros populares
              </h5>
              <Link href="#">
                <span>Ver Todos </span>
                <CaretRight size={16}/>
              </Link> 
            </header>
            <section>
              {CardsRecommedantions}
            </section>
          </HomeRecommendation>
        </HomeContainer>
      </PageContainer>     
    </>
  )
}
