import styles from './table.module.css'
import { tableHeaders } from '../../data/data'
import Dialog from '../Dialog/Dialog'
import TransactionDetails from '../TransactionDetails/TransactionDetails'
import { useTransactions } from '../../utils/contexts/TransactionsContext'
import { useRef } from 'react'
import currencyFormatter from '../../utils/helpers/currencyFormatter'

export default function Table({ transactions }) {
  const { passTransactionDetail } = useTransactions()
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
          {transactions.map((transaction, index) => {
            return (
              <tr
                key={index}
                className={styles.tableRow}
                onClick={() => {
                  passTransactionDetail(transaction)
                  dialogRef.current?.showModal()
                }}
              >
                <td className={styles.tableCell}>
                  <div className={styles.tableGroupCell}>
                    <img
                      src={transaction.receiverImage}
                      alt={`Image of ${transaction.receiverName}`}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null
                        currentTarget.src =
                          'src/assets/images/DefaultProfilePicture.png'
                      }}
                    />
                    {transaction.receiverName}
                  </div>
                </td>
                <td className={styles.tableCell}>{transaction.purpose}</td>
                <td className={styles.tableCell}>{transaction.date}</td>
                <td className={styles.tableCell}>
                  {currencyFormatter(transaction.amount)}
                </td>
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
