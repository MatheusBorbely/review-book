import Head from 'next/head'
import { ChartLineUp } from 'phosphor-react'
import React from 'react'
import { HomeFeed } from './styles'
import { PageContainer, PageTitle } from '@/styles/global'


export default function Home() {
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
          </HomeFeed>
        </PageContainer>
        
        
    </>
  )
}
