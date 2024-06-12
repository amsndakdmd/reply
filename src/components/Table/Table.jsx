import styles from './table.module.css'
import { tableHeaders } from '../../data/data'
import Dialog from '../Dialog/Dialog'
import TransactionDetails from '../TransactionDetails/TransactionDetails'
import { useTransactions } from '../../utils/contexts/TransactionsContext'
import { useRef } from 'react'

export default function Table() {
  const { transactions, passTransactionDetail } = useTransactions()
  const dialogRef = useRef(null)

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeaderRow}>
            {tableHeaders.map(({ id, label }) => {
              return (
                <th className={styles.tableHeader} key={id}>
                  {label}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr
                key={transaction.id}
                className={styles.tableRow}
                onClick={() => {
                  passTransactionDetail(transaction)
                  dialogRef.current?.showModal()
                }}
              >
                <td className={styles.tableCell}>{transaction.name}</td>
                <td className={styles.tableCell}>{transaction.purpose}</td>
                <td className={styles.tableCell}>{transaction.date}</td>
                <td className={styles.tableCell}>${transaction.amount}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Dialog ref={dialogRef}>
        <TransactionDetails closeDialog={() => dialogRef.current?.close()} />
      </Dialog>
    </>
  )
}
