import { createContext, useContext, useEffect, useState } from 'react'
import { transactions as transactionsData } from '../../data/data'

export const TransactionsContext = createContext()

function getInitialData() {
  const transactions = localStorage.getItem('transactions')
  return transactions ? JSON.parse(transactions) : transactionsData
}

export default function TransactionsContextProvider({ children }) {
  const [transactions, setTransactions] = useState(getInitialData)
  const [transactionDetail, setTransactionDetail] = useState(null)

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

  function addNewTransaction(newTransaction) {
    setTransactions((currentTransactions) => [
      newTransaction,
      ...currentTransactions,
    ])
  }

  function passTransactionDetail(passedTransactionDetail) {
    setTransactionDetail(passedTransactionDetail)
  }

  return (
    <TransactionsContext.Provider
      value={{
        addNewTransaction,
        passTransactionDetail,
        transactionDetail,
        transactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => useContext(TransactionsContext)
