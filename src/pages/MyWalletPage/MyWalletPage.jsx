import BalanceSection from '../../sections/BalanceSection/BalanceSection'
import Container from '../../components/Container/Container'
import RecentTransactionsSection from '../../sections/RecentTransactionSection/RecentTransactionsSection'
import { useTransactions } from '../../utils/contexts/TransactionsContext'
import { Link } from 'react-router-dom'
import buttonStyles from '../../components/Button/button.module.css'

export default function MyWalletPage() {
  const { transactions } = useTransactions()

  return (
    <main>
      <Container>
        <BalanceSection />
        <RecentTransactionsSection
          transactions={transactions.slice(0, 5)}
          link={
            <Link
              className={`${buttonStyles.base} ${buttonStyles.ghost} ${buttonStyles.large}`}
              to="/recent-transactions"
            >
              View More Transactions
            </Link>
          }
        />
      </Container>
    </main>
  )
}
