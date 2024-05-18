'use client'

import Link from "next/link"
import styles from './navigation.module.scss'
import { usePathname } from 'next/navigation'

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

export default function Navigation() {

  const pathname = usePathname()
  console.log(pathname)

  return (
    <nav>
      <ul className={styles.list}>
        {
          pages.map((page, ind) => {
            return (
              <li key={ind} >
                <Link href={page.href} className={pathname === page.href ? styles.active : ''}>
                  {page.title}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}