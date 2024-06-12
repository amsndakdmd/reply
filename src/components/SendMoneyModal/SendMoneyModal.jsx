import { useState } from 'react'
import Button from '../Button/Button'
import styles from './send-money-modal.module.css'
import { useTransactions } from '../../utils/contexts/TransactionsContext'

export default function SendMoneyModal({ closeModal }) {
  const { transactions, addNewTransaction } = useTransactions()
  const initialFormFieldsValues = {
    id: transactions.length + 1,
    name: '',
    date: new Date().toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
    }),
    purpose: '',
    amount: undefined,
    message: '',
  }

  const [formFields, setFormFields] = useState(initialFormFieldsValues)

  return (
    <>
      <form
        method="dialog"
        onSubmit={(e) => {
          e.preventDefault()
          addNewTransaction(formFields)
          setFormFields(initialFormFieldsValues)
        }}
        className={styles.form}
      >
        <div className={styles.head}>
          <h3>Send Money</h3>
        </div>
        <div className={styles.body}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="person">
              Send To
            </label>
            <input
              className={styles.input}
              type="text"
              id="person"
              value={formFields.name}
              placeholder="Liam Smith"
              onChange={(e) => {
                setFormFields({ ...formFields, name: e.target.value })
              }}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="amount">
              Amount
            </label>
            <input
              className={styles.input}
              type="number"
              id="amount"
              value={formFields.amount}
              placeholder="150"
              onChange={(e) => {
                setFormFields({ ...formFields, amount: e.target.value })
              }}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="purpose">
              Purpose
            </label>
            <input
              className={styles.input}
              type="text"
              id="purpose"
              value={formFields.purpose}
              placeholder="IYKYK"
              onChange={(e) => {
                setFormFields({ ...formFields, purpose: e.target.value })
              }}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              className={`${styles.input} ${styles.big}`}
              type="text"
              id="message"
              value={formFields.message}
              placeholder="Hi Liam! IYKYK"
              onChange={(e) => {
                setFormFields({ ...formFields, message: e.target.value })
              }}
            ></textarea>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button variant="primary" size="large" onClick={closeModal}>
            Send Money
          </Button>
        </div>
      </form>
    </>
  )
}
