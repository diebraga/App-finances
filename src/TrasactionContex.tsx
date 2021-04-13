import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../src/services/api';

interface TrasacrionContextProps {
  children: ReactNode
}

interface TransactionsProps {
  id: number
  title: string
  amount: number
  category: string
  createdAt: string
  type: string
}

export const TrasacrionContext = createContext<any[]>([])

export function TrasacrionProvider({ children }: TrasacrionContextProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, [])

  return(
    <TrasacrionContext.Provider value={transactions}>
      {children}
    </TrasacrionContext.Provider>
  )
}