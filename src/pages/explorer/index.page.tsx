import { PageTitle } from '@/styles/global'
import Head from 'next/head'
import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { ExplorerContainer, ExplorerHeader, ExplorerInput, ExplorerFilter } from './styles'


const filters = [
  {
    name: 'Tudo',
    isActive: true,
  },
  {
    name: 'Educação',
    isActive: false,
  },
  {
    name: 'Tudo',
    isActive: false,
  },
  {
    name: 'Fantasia',
    isActive: false,
  },
  {
    name: 'Ficção Científica',
    isActive: false,
  },
  {
    name: 'Horror',
    isActive: false,
  },
  {
    name: 'HQs',
    isActive: false,
  },
  {
    name: 'Suspense',
    isActive: false,
  },

];

export default function Explorer() {
  const ExplorerFilters = filters.map(({name, isActive}) => (
    <button key={name} disabled={isActive}>
      {name}
    </button>
  ))
  return (
    <>
        <Head>
            <title>Review Book | Explorar</title>
        </Head>

        <ExplorerContainer>

          <ExplorerHeader>
            <section>
              <PageTitle>
                <Binoculars size={32} />
                <h1>Explorar</h1>
              </PageTitle>
              <ExplorerInput>
                <input type="text"  placeholder={`Buscar livro ou autor`} />
                <MagnifyingGlass size={20}/>
              </ExplorerInput>
            </section>
            <ExplorerFilter>
              {ExplorerFilters}
            </ExplorerFilter>
            
          </ExplorerHeader>
         
        </ExplorerContainer>
        
    </>
  )
}
