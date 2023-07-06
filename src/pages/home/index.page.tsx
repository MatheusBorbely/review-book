import Head from 'next/head'
import { ChartLineUp } from 'phosphor-react'
import React from 'react'
import { HomeFeed } from './styles'
import { PageContainer, PageTitle } from '@/styles/global'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { Card } from './components/Card'
import { Rating } from '@/interfaces/Rating'
import { LoadingCard } from './components/LoadingCard'


export default function Home() {
  const {data: ratings, isLoading} = useQuery(['ratings'],async () => {
    const response = await api.get('/rating');
    return response.data;
  })

  const CardsRatings = isLoading ? (
    <LoadingCard />
  ) : (
    ratings.map((rating: Rating) => <Card key={rating.id} {...rating}/>)
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
          <HomeFeed>
            <h5>Avaliações mais recentes</h5>
            {CardsRatings}
          </HomeFeed>
        </PageContainer>
        
        
    </>
  )
}
