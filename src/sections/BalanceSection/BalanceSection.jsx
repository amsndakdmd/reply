import styles from './balance-section.module.css'
import Button from '../../components/Button/Button'
import { useBalance } from '../../utils/contexts/BalanceContext'
import Section from '../Section/Section'
import ArrowUpRightIcon from '../../icons/ArrowUpRightIcon'
import Dialog from '../../components/Dialog/Dialog'
import SendMoneyModal from '../../components/SendMoneyModal/SendMoneyModal'
import { useRef } from 'react'
import Chart from '../../components/Chart/Chart'
import currencyFormatter from '../../utils/helpers/currencyFormatter'

export default function BalanceSection() {
  const { getLastBalance, balance } = useBalance()
  const dialogRef = useRef(null)

  return (
    <>
      <Section>
        <header className={styles.head}>
          <div>
            <p>Balance</p>
            <h1>{currencyFormatter(getLastBalance())}</h1>
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
        <Chart
          callbacks={{
            title: (ctx) => {
              return currencyFormatter(
                balance.map(({ balance }) => balance)[ctx[0].dataIndex]
              )
            },
            label: (ctx) => {
              return balance.map(({ date }) => date)[ctx.dataIndex]
            },
          }}
          labels={balance.map(({ date }) => date)}
          data={balance.map(({ balance }) => balance)}
        />
      </Section>
      <Dialog ref={dialogRef}>
        <SendMoneyModal closeModal={() => dialogRef?.current?.close()} />
      </Dialog>
    </>
  )
}
