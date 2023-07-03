'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,
    },
  },
})

export default function ReactQueryProvider({ children }: Props) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
