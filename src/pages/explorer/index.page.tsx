import { PageTitle } from '@/styles/global'
import Head from 'next/head'
import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { ExplorerContainer, ExplorerHeader } from './styles'

export default function Explorer() {
  return (
    <>
        <Head>
            <title>Review Book | Explorar</title>
        </Head>

        <ExplorerContainer>

          <ExplorerHeader>
            <PageTitle>
              <Binoculars size={32} />
              <h1>Explorar</h1>
            </PageTitle>
            <input type="text"  placeholder={`Buscar livro ou autor`} />
          </ExplorerHeader>
         
        </ExplorerContainer>
        
    </>
  )
}
