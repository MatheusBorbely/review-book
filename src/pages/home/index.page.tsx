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


export default function Home() {
  const {data: ratings, isLoading} = useQuery(['ratings'],async () => {
    const response = await api.get('/ratings');
    return response.data;
  })

  const CardsRatings = isLoading ? (
    <LoadingCard />
  ) : (
    ratings.map((rating: RatingHomeFeed) => <Card key={rating.id} {...rating}/>)
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
          </HomeRecommendation>
        </HomeContainer>
      </PageContainer>     
    </>
  )
}
