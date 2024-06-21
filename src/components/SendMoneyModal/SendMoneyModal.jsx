import { useState } from 'react'
import Button from '../Button/Button'
import styles from './send-money-modal.module.css'
import { useTransactions } from '../../utils/contexts/TransactionsContext'
import PersonIcon from '../../icons/PersonIcon'
import MoneyIcon from '../../icons/MoneyIcon'
import GiftIcon from '../../icons/GiftIcon'
import { purposes, senderInformations } from '../../data/data'
import { useBalance } from '../../utils/contexts/BalanceContext'
import {
  shortDateFormatter,
  longDateFormatter,
} from '../../utils/helpers/dateFormatters'

export default function SendMoneyModal({ closeModal }) {
  const { addNewTransaction } = useTransactions()
  const { updateBalance, getLastBalance } = useBalance()
  const [errorMessage, setErrorMessage] = useState('')

  const initialFormFieldsValues = {
    receiverImage: '',
    receiverName: '',
    senderImage: senderInformations.image,
    senderName: senderInformations.name,
    date: shortDateFormatter(new Date()),
    purpose: '',
    amount: '',
    message: '',
  }

  const [formFields, setFormFields] = useState(initialFormFieldsValues)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        if (0 >= parseInt(formFields.amount)) {
          setErrorMessage("You can't send $0 or less")
          return
        }

        if (getLastBalance() < parseInt(formFields.amount)) {
          setErrorMessage("You don't have enough money for transfer")
          return
        }

        updateBalance({
          balance: parseInt(formFields.amount),
          date: longDateFormatter(new Date()),
        })
        addNewTransaction(formFields)
        setFormFields(initialFormFieldsValues)
        closeModal()
      }}
      className={styles.form}
    >
      <div className={styles.head}>
        <h3>Send Money</h3>
      </div>
      <div className={styles.body}>
        <div className={styles.bodyGroup}>
          <label className={styles.label} htmlFor="person">
            Send To
          </label>
          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="text"
              id="person"
              value={formFields.receiverName}
              placeholder="Liam Smith"
              required={true}
              onChange={(e) => {
                setFormFields({
                  ...formFields,
                  receiverName: e.target.value,
                  receiverImage: `src/assets/images/${e.target.value
                    .split(' ')
                    .join('-')
                    .toLowerCase()}.png`,
                })
              }}
            />
            <PersonIcon />
          </div>
        </div>
        <div className={styles.bodyGroup}>
          <label className={styles.label} htmlFor="amount">
            Amount
          </label>
          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="number"
              id="amount"
              value={formFields.amount}
              placeholder="150.00"
              required={true}
              onChange={(e) => {
                setFormFields({
                  ...formFields,
                  amount: parseInt(e.target.value),
                })
              }}
            />
            <MoneyIcon />
          </div>
        </div>
        <div className={styles.bodyGroup}>
          <label className={styles.label} htmlFor="purposes">
            Purpose
          </label>
          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              type="text"
              id="purpose"
              value={formFields.purpose}
              placeholder="Gift"
              required={true}
              onChange={(e) => {
                setFormFields({ ...formFields, purpose: e.target.value })
              }}
            />
            <GiftIcon />
          </div>
        </div>
        <div className={styles.bodyGroup}>
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
          <p className={styles.errorMessage}>{errorMessage}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          type="button"
          variant="secondary"
          size="large"
          onClick={closeModal}
        >
          Cancel
        </Button>
        <Button variant="primary" size="large">
          Send Money
        </Button>
      </div>
    </form>
  )
}
