import Button from '../../components/Button/Button'
import { useBalance } from '../../utils/contexts/BalanceContext'
import Section from '../Section/Section'
import styles from './balance-section.module.css'
import ArrowUpRightIcon from '../../icons/ArrowUpRightIcon'
import Dialog from '../../components/Dialog/Dialog'
import SendMoneyModal from '../../components/SendMoneyModal/SendMoneyModal'
import { useRef } from 'react'
import Chart from '../../components/Chart/Chart'

export default function BalanceSection() {
  const { getLastBalance, balance } = useBalance()
  const dialogRef = useRef(null)

  const data = {
    labels: balance,
    datasets: [
      {
        // label: 'Test',
        data: balance,
        // fill: 'start',
        borderColor: getComputedStyle(
          document.documentElement
        ).getPropertyValue('--brand-500'),
      },
    ],
  }

  return (
    <>
      <Section>
        <header className={styles.head}>
          <div>
            <p>Balance</p>
            <h1>${getLastBalance().toFixed(2)}</h1>
          </div>
          <Button
            variant="primary"
            size="large"
            onClick={() => dialogRef?.current?.showModal()}
          >
            <ArrowUpRightIcon />
            Send Money
          </Button>
        </header>
        <Chart data={data} />
      </Section>
      <Dialog ref={dialogRef}>
        <SendMoneyModal closeModal={() => dialogRef?.current?.close()} />
      </Dialog>
    </>
  )
}
