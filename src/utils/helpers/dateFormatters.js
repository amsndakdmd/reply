export function longDateFormatter(date) {
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  })
}
export function shortDateFormatter(date) {
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}
