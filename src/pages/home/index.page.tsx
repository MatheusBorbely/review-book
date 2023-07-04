import Head from 'next/head'
import { ChartLineUp } from 'phosphor-react'
import React from 'react'
import { HomeFeed } from './styles'
import { PageContainer, PageTitle } from '@/styles/global'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'


export default function Home() {
  const {data: books, isLoading} = useQuery([],async () => {
    const response = await api.get('/books');
    console.log(response.data)
    return response.data;
  })

  const CardsBooks = isLoading ? (
    <span>Carregando...</span>
  ) : (
    books.map(({ name }: any) => <span>{name}</span>)
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
            {CardsBooks}
          </HomeFeed>
        </PageContainer>
        
        
    </>
  )
}
