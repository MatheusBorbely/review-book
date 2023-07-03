import { PageContainer, PageTitle } from '@/styles/global'
import Head from 'next/head'
import { User } from 'phosphor-react'
import React from 'react'

export default function Profile() {
  return (
    <>
        <Head>
            <title>Review Book | Perfil</title>
        </Head>

        <PageContainer>
          <PageTitle>
            <User size={32} />
            <h1>Perfil</h1>
          </PageTitle>
        </PageContainer>
        
    </>
  )
}
