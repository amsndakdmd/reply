import Container from '../../components/Container/Container'
import RecentTransactionsSection from '../../sections/RecentTransactionSection/RecentTransactionsSection'
import { useTransactions } from '../../utils/contexts/TransactionsContext'

export default function RecentTransactionsPage() {
  const { transactions } = useTransactions()
  
  return (
    <main>
      <Container>
        <RecentTransactionsSection transactions={transactions} />
      </Container>
    </main>
  )
}
