import { createContext, useContext, useEffect, useState } from 'react'
import { balance as balanceData } from '../../data/data'

export const BalanceContext = createContext()

function getInitialData() {
  const balance = localStorage.getItem('balance')
  return balance ? JSON.parse(balance) : balanceData
}

export default function BalanceContextProvider({ children }) {
  const [balance, setBalance] = useState(getInitialData)

  useEffect(() => {
    localStorage.setItem('balance', JSON.stringify(balance))
  }, [balance])

  function updateBalance({ date, balance }) {
    setBalance((currentBalance) => [
      ...currentBalance,
      {
        date,
        balance: currentBalance[currentBalance.length - 1].balance - balance,
      },
    ])
  }

  function getLastBalance() {
    return balance[balance.length - 1].balance
  }

  return (
    <BalanceContext.Provider value={{ updateBalance, getLastBalance, balance }}>
      {children}
    </BalanceContext.Provider>
  )
}

export const useBalance = () => useContext(BalanceContext)
