'use client'

import Link from "next/link"
import styles from './navigation.module.scss'
import { usePathname } from 'next/navigation'
import {TMenuItem} from "@/utils/types";

type TProps = {
  pages: Array<TMenuItem>;
  direction: 'row' | 'column';
  clickHandler? : () => void;
}

export default function Navigation({pages, direction, clickHandler} : TProps) {

  const pathname = usePathname()

  return (
      <nav>
        <ul className={`${styles[`list_${direction}`]} ${styles.list}`}>
          {
            pages.map((page, ind) => {
              return (
                <li key={ind} onClick={clickHandler}>
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