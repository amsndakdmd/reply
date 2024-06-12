import { useTransactions } from '../../utils/contexts/TransactionsContext'
import XIcon from '../../icons/XIcon'
import CalendarIcon from '../../icons/CalendarIcon'
import styles from './transaction-details.module.css'
import Button from '../Button/Button'

export default function TransactionDetails({ closeDialog }) {
  const { transactionDetail } = useTransactions()

  if (transactionDetail === null) return

  return (
    <>
      <div className={styles.head}>
        <h1>${transactionDetail.amount}</h1>
        <button onClick={closeDialog}>
          <XIcon />
        </button>
      </div>
      <div className={styles.body}>
        <div className={styles.senderGroup}>
          <p>From</p>
          <p className={styles.sender}>James Williams</p>
          <ul>
            <li>
              <Button size="small" variant="tertiary">
                <CalendarIcon />
                {transactionDetail.date}
              </Button>
            </li>
          </ul>
        </div>
        <div className={styles.receiverGroup}>
          <p>To</p>
          <p className={styles.receiver}>{transactionDetail.name}</p>
          <ul>
            <li>
              <Button size="small" variant="tertiary">
                <CalendarIcon />
                {transactionDetail.date}
              </Button>
            </li>
          </ul>
        </div>
        <div>
          <p>Message</p>
          <textarea
            className={styles.messageBox}
            value={transactionDetail.message}
            readOnly
          >
            {transactionDetail.message}
          </textarea>
        </div>
      </div>
    </>
  )
}
