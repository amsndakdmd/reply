import Container from '../../components/Container/Container'
import RecentTransactionsSection from '../../sections/RecentTransactionSection/RecentTransactionsSection'
import styles from './recent-transactions-page.module.css'

export default function RecentTransactionsPage() {
  return (
    <main>
      <Container>
        <RecentTransactionsSection />
      </Container>
    </main>
  )
}
