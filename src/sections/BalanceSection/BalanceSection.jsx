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

  const data = {
    labels: balance.map(({ date }) => date),
    datasets: [
      {
        data: balance.map(({ balance }) => balance),
        backgroundColor: (context) => {
          if (!context.chart.chartArea) return
          const {
            ctx,
            chartArea: { top, bottom },
          } = context.chart

          const gradientBackground = ctx.createLinearGradient(0, top, 0, bottom)
          gradientBackground.addColorStop(
            0,
            getComputedStyle(document.documentElement).getPropertyValue(
              '--chart-gradient-start-color'
            )
          )
          gradientBackground.addColorStop(
            1,
            getComputedStyle(document.documentElement).getPropertyValue(
              '--chart-gradient-end-color'
            )
          )
          return gradientBackground
        },
        fill: 'start',
        tension: 0.25,
        borderColor: getComputedStyle(
          document.documentElement
        ).getPropertyValue('--brand-500'),
        borderWidth: 4,
        pointBackgroundColor: 'rgba(0,0,0,0)',
        pointBorderColor: 'rgba(0,0,0,0)',
        pointHoverBackgroundColor: getComputedStyle(
          document.documentElement
        ).getPropertyValue('--brand-500'),
        pointHoverBorderColor: 'white',
        pointHoverBorderWidth: 2,
      },
    ],
  }

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      y: {
        min: 0,
        grid: {
          color: getComputedStyle(document.documentElement).getPropertyValue(
            '--neutral-800'
          ),
        },
        border: {
          dash: [4, 3],
        },

        ticks: {
          color: getComputedStyle(document.documentElement).getPropertyValue(
            '--neutral-400'
          ),
          font: {
            family: getComputedStyle(document.documentElement).getPropertyValue(
              '--font-primary'
            ),
            size: getComputedStyle(document.documentElement).getPropertyValue(
              '--paragraph-sm'
            ),
          },
          callback: function (value) {
            return value.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              notation: 'compact',
            })
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: getComputedStyle(document.documentElement).getPropertyValue(
            '--neutral-400'
          ),
          font: {
            family: getComputedStyle(document.documentElement).getPropertyValue(
              '--font-primary'
            ),
            size: getComputedStyle(document.documentElement).getPropertyValue(
              '--paragraph-sm'
            ),
          },
        },
      },
    },
    plugins: {
      tooltip: {
        yAlign: 'bottom',
        displayColors: false,
        cornerRadius: 4,
        titleFont: {
          family: getComputedStyle(document.documentElement).getPropertyValue(
            '--font-primary'
          ),
          size: getComputedStyle(document.documentElement).getPropertyValue(
            '--heading4'
          ),
          weight: 500,
        },
        bodyFont: {
          family: getComputedStyle(document.documentElement).getPropertyValue(
            '--font-primary'
          ),
          size: getComputedStyle(document.documentElement).getPropertyValue(
            '--paragraph-sm'
          ),
        },
        callbacks: {
          title: (ctx) => {
            return currencyFormatter(
              balance.map(({ balance }) => balance)[ctx[0].dataIndex]
            )
          },
          label: (ctx) => {
            return balance.map(({ date }) => date)[ctx.dataIndex]
          },
          labelTextColor: (ctx) => {
            return getComputedStyle(document.documentElement).getPropertyValue(
              '--neutral-400'
            )
          },
        },
      },
    },
  }

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

        <Chart options={options} data={data} />
      </Section>
      <Dialog ref={dialogRef}>
        <SendMoneyModal closeModal={() => dialogRef?.current?.close()} />
      </Dialog>
    </>
  )
}
