'use client'

import {usePathname} from 'next/navigation'
import LanguageSwitcher from "@/ui/language-switcher/language-switcher";
import Navigation from "@/components/navigation/navigation";
import styles from './menu.module.scss';
import {useState} from "react";
import Burger from "@/ui/burger/burger";
import SlideMenu from "@/components/menu/slide-menu/slide-menu";

const pages = [
  {
    title: 'Проекты',
    href: '/projects'
  },
  {
    title: 'Услуги',
    href: '/services'
  },
  {
    title: 'Контакты',
    href: '/contacts'
  },
]

export default function Menu() {

  const pathname = usePathname();

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function toggleMenu() {
    return setIsMenuOpened(!isMenuOpened);
  }

  return (
    <>
      <div className={styles.desktop}>
        <LanguageSwitcher/>
        <Navigation pages={pages} direction='row'/>
      </div>
      <div className={styles.mobile}>
        <div onClick={() => setIsMenuOpened(!isMenuOpened)}>
          <Burger/>
        </div>
        <SlideMenu closeHandler={toggleMenu} status={isMenuOpened ? 'opened' : 'closed'} pages={pages}/>
      </div>
    </>

  )
}