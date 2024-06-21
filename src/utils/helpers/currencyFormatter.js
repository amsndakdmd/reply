export default function currencyFormatter(value) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}
