import Link from "next/link"
import styles from './navigation.module.scss'

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
  return (
    <nav>
      <ul className={styles.list}>
        {
          pages.map((page, ind) => {
            return (
              <li key={ind}>
                <Link href={page.href}>
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