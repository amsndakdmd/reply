import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
)

export default function Chart({
  data: chartData,
  labels: chartLabels,
  callbacks: chartCallbacks,
}) {
  const data = {
    labels: chartLabels,
    datasets: [
      {
        data: chartData,
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
          ...chartCallbacks,
          labelTextColor: () => {
            return getComputedStyle(document.documentElement).getPropertyValue(
              '--neutral-400'
            )
          },
        },
      },
    },
  }

  return <Line options={options} data={data} />
}
