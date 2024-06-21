import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyWalletPage from './pages/MyWalletPage/MyWalletPage'
import RecentTransactionsPage from './pages/RecentTransactionsPage/RecentTransactionsPage'
import TransactionsContextProvider from './utils/contexts/TransactionsContext'
import BalanceContextProvider from './utils/contexts/BalanceContext'

export default function App() {
  return (
    <TransactionsContextProvider>
      <BalanceContextProvider>
        <BrowserRouter>
          <div className='layout'>
            <Sidebar />
            <Routes>
              <Route path="/" element={<MyWalletPage />} />
              <Route
                path="/recent-transactions"
                element={<RecentTransactionsPage />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </BalanceContextProvider>
    </TransactionsContextProvider>
  )
}
