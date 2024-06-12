import styles from './recent-transactions-section.module.css'
import Table from '../../components/Table/Table'
import Section from '../Section/Section'

export default function RecentTransactionsSection() {
  return (
    <Section>
      <h2>Recent Transactions</h2>
      <div className={styles.tableContainer}>
        <Table />
      </div>
    </Section>
  )
}
