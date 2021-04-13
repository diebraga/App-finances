import { createContext, ReactNode, useEffect, useState, useContext } from 'react'
import { api } from '../services/api';

interface TrasacrionProviderProps {
  children: ReactNode
}

interface TrasacrionContextProps {
  transactions: TransactionsProps[]
  createTransaction: (transactions: TransactionInput) => Promise<void>
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

  async function createTransaction(TransactionInput: TransactionInput) {
  const response = await api.post('/transactions', {
    ...TransactionInput,
    createdAt: new Date(),
  })

    const { transaction } = response.data

    setTransactions([
      ...transactions,
      transaction,
    ])
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

export function useTransactions() {
  const context = useContext(TrasacrionContext)

  return context
}