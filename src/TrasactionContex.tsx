import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../src/services/api';

interface TrasacrionProviderProps {
  children: ReactNode
}

interface TrasacrionContextProps {
  transactions: TransactionsProps[]
  createTransaction: (transactions: TransactionInput) => void
}

interface TransactionsProps {
  id: number
  title: string
  amount: number
  category: string
  createdAt: string
  type: string
}

type TransactionInput = Omit<TransactionsProps, 'id' | 'createdAt'>

export const TrasacrionContext = createContext({} as TrasacrionContextProps)

export function TrasacrionProvider({ children }: TrasacrionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, [])

  function createTransaction(transactions: TransactionInput) {
    api.post('/transactions', transactions)
  }

  return(
    <TrasacrionContext.Provider value={{
      transactions,
      createTransaction
    }}>
      {children}
    </TrasacrionContext.Provider>
  )
}