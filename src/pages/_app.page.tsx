import type { AppProps } from 'next/app'
import { globalStyles, GlobalContainer } from './../styles/global'
import { SideBar } from './components/SideBar';
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

globalStyles();
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  
  if(Component.getLayout) return Component.getLayout(<Component {...pageProps} />);

  return (
    <GlobalContainer>
      <SideBar />
      <Component {...pageProps} />
    </GlobalContainer>
  )
  
}
