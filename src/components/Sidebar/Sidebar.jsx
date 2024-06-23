import styles from './sidebar.module.css'
import Logo from '../../icons/Logo'
import OpenedSidebarIcon from '../../icons/OpenedSidebarIcon'
import ClosedSidebarIcon from '../../icons/ClosedSidebarIcon'
import { navigation } from '../../data/data'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Button from '../Button/Button'
import ArrowUpRightIcon from '../../icons/ArrowUpRightIcon'
import Dialog from '../Dialog/Dialog'
import SendMoneyModal from '../SendMoneyModal/SendMoneyModal'

export default function Sidebar() {
  const isBigScreen = useMediaQuery({ minWidth: 768 })
  const [isOpened, setIsOpened] = useState(false)
  const dialogRef = useRef(null)

  useEffect(() => {
    setIsOpened(isBigScreen ? true : false)
  }, [isBigScreen])

  return (
    <>
      <aside
        className={
          isOpened ? `${styles.sidebar} ${styles.active}` : `${styles.sidebar}`
        }
      >
        <div className={styles.sidebarHead}>
          <Link to="/" className={styles.sidebarLogo}>
            <Logo />
            <span>Reply</span>
          </Link>
          <button
            onClick={() => {
              setIsOpened((currentState) => !currentState)
            }}
          >
            {isOpened ? <OpenedSidebarIcon /> : <ClosedSidebarIcon />}
          </button>
        </div>
        <nav className={styles.sidebarNavigation}>
          <Button
            variant="primary"
            size="small"
            className={styles.sidebarButton}
            onClick={() => dialogRef?.current?.showModal()}
          >
            <ArrowUpRightIcon /> <span>Send Money</span>
          </Button>
          {navigation.map(({ name, href, icon: Icon }) => (
            <NavLink
              to={href}
              key={name}
              className={({ isActive }) => {
                return isActive
                  ? `${styles.sidebarLink} ${styles.active}`
                  : `${styles.sidebarLink}`
              }}
            >
              <Icon />
              <span>{name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
      <Dialog ref={dialogRef}>
        <SendMoneyModal closeModal={() => dialogRef?.current?.close()} />
      </Dialog>
    </>
  )
}
