import Section from '../Section/Section'
import { Link } from 'react-router-dom'
import styles from './balance-section.module.css'
import buttonStyles from '../../components/Button/button.module.css'

export default function BalanceSection() {
  return (
    <Section className={styles.balanceSection}>
      <h1 className={styles.heading}>A Clearer Financial Picture Coming Soon</h1>
      <p className={styles.paragraph}>
        We are actively working on improving this balance page to provide you
        with a comprehensive overview of your financial situation.
      </p>
      <Link className={`${buttonStyles.base} ${buttonStyles.primary} ${buttonStyles.large}`} to="/recent-transactions">Recent Transacions</Link>
    </Section>
  )
}
