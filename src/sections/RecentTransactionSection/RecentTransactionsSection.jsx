import styles from './recent-transactions-section.module.css'
import Table from '../../components/Table/Table'
import Section from '../Section/Section'

export default function RecentTransactionsSection({ transactions, link }) {
  return (
    <Section>
      <h2>Recent Transactions</h2>
      <div className={styles.tableContainer}>
        <Table transactions={transactions} />
      </div>
      <div className={styles.linkContainer}>{link}</div>
    </Section>
  )
}
