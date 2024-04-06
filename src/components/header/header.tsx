import Logo from '@/ui/logo/logo';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo/>
    </header>
  )
}