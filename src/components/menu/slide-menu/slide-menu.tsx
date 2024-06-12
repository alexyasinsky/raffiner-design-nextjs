import Union from "@/ui/union/union";
import styles from './slide-menu.module.scss';
import Navigation from "@/ui/navigation/navigation";
import {TMenuItem} from "@/utils/types";
import LanguageSwitcher from "@/ui/language-switcher/language-switcher";

type TProps = {
  closeHandler: () => void;
  status: 'closed' | 'opened';
  pages: TMenuItem[];
}

export default function SlideMenu ({closeHandler, status, pages}: TProps) {

  return (
    <div className={`padding-site ${styles[`menu_${status}`]} `}>
      <div
        className={styles.close}
        onClick={closeHandler}
      >
        <Union/>
      </div>
      <Navigation pages={pages} direction='column' clickHandler={closeHandler}/>
      <div className={styles.languageSwitcherWrapper}>
        <LanguageSwitcher/>
      </div>

    </div>
  )
}