import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Quicksand } from 'next/font/google'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'react-hot-toast';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"


const inter = Inter({ subsets: ['latin'] })
const quicksand = Quicksand({ subsets: ['latin'] })
const queryClient = new QueryClient

export default function App({ Component, pageProps }: AppProps) {

  return (
    <div className={inter.className}>
      <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId='627906464891-icmpjtoq28i0s0mb0th6u7fo9f96m8td.apps.googleusercontent.com'>
      <Component {...pageProps} />
      <Toaster/>
      <ReactQueryDevtools/>
      </GoogleOAuthProvider>
      </QueryClientProvider>
    </div>
  )
}
