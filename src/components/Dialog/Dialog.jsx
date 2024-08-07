import styles from './dialog.module.css'
import { forwardRef } from 'react'

export default forwardRef(function Dialog({ children }, dialogRef) {
  return (
    <dialog className={styles.dialog} ref={dialogRef}>
      {children}
    </dialog>
  )
})
