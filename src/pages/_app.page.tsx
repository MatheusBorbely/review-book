import type { AppProps } from 'next/app'
import { globalStyles, GlobalContainer } from './../styles/global'
import { SideBar } from './components/SideBar';
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import {SessionProvider} from 'next-auth/react'
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';
globalStyles();
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps: {session, ...pageProps} }: AppPropsWithLayout) {
  
  if(Component.getLayout) return Component.getLayout(
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <GlobalContainer>
          <SideBar />
          <Component {...pageProps} />
        </GlobalContainer>
      </SessionProvider>
    </QueryClientProvider>
  )
  
}
