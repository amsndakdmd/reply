import { cva } from 'class-variance-authority'
import styles from './button.module.css'

const button = cva(styles.base, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
      tertiary: styles.tertiary,
    },
    size: {
      large: styles.large,
      medium: styles.medium,
      small: styles.small,
    },
  },
})

export default function Button({ className, variant, size, ...props }) {
  return (
    <button
      className={button({ variant, size, className })}
      onClick={props.onClick}
      {...props}
    />
  )
}
