import Logo from '@/ui/logo/logo';
import styles from './header.module.scss';
import LanguageSwitcher from "@/ui/language-switcher/language-switcher";
import Navigation from "@/ui/navigation/navigation";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Logo/>
        <LanguageSwitcher/>
      </div>
      <div>
        <Navigation/>
      </div>
    </header>
  )
}