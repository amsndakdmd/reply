import { useTransactions } from '../../utils/contexts/TransactionsContext'
import XIcon from '../../icons/XIcon'
import CalendarIcon from '../../icons/CalendarIcon'
import styles from './transaction-details.module.css'
import Button from '../Button/Button'
import currencyFormatter from '../../utils/helpers/currencyFormatter'

export default function TransactionDetails({ closeDialog }) {
  const { transactionDetail } = useTransactions()

  if (transactionDetail === null) return

  return (
    <>
      <div className={styles.head}>
        <h1>{currencyFormatter(transactionDetail.amount)}</h1>
        <button onClick={closeDialog}>
          <XIcon />
        </button>
      </div>
      <div className={styles.body}>
        <div className={styles.transactionDetails}>
          <div className={styles.informationGroup}>
            <div className={styles.imageGroup}>
              <img
                src={transactionDetail.senderImage}
                alt={`Image of ${transactionDetail.senderImage}`}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null
                  currentTarget.src =
                    'src/assets/images/DefaultProfilePicture.png'
                }}
              />
            </div>
            <div className={styles.detailsGroup}>
              <p>From</p>
              <p className={styles.sender}>{transactionDetail.senderName}</p>
              <ul>
                <li>
                  <Button size="small" variant="tertiary">
                    <CalendarIcon />
                    {transactionDetail.date}
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.informationGroup}>
            <div className={styles.imageGroup}>
              <img
                src={transactionDetail.receiverImage}
                alt={''}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null
                  currentTarget.src =
                    'src/assets/images/DefaultProfilePicture.png'
                }}
              />
            </div>
            <div className={styles.detailsGroup}>
              <p>To</p>
              <p className={styles.sender}>{transactionDetail.receiverName}</p>
              <ul>
                <li>
                  <Button size="small" variant="tertiary">
                    <CalendarIcon />
                    {transactionDetail.date}
                  </Button>
                </li>
              </ul>
            </div>
          </div>
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
