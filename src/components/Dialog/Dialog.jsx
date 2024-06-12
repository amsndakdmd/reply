import { forwardRef } from 'react'
import styles from './dialog.module.css'

export default forwardRef(function Dialog({ children }, dialogRef) {
  return (
    <dialog className={styles.dialog} ref={dialogRef}>
      {children}
    </dialog>
  )
})
