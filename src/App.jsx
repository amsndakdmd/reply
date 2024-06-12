import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyWalletPage from './pages/MyWalletPage/MyWalletPage'
import RecentTransactionsPage from './pages/RecentTransactionsPage/RecentTransactionsPage'
import TransactionsContextProvider from './utils/contexts/TransactionsContext'

export default function App() {
  return (
    <TransactionsContextProvider>
      <BrowserRouter>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
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
    </TransactionsContextProvider>
  )
}
