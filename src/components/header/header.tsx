'use client'

import Logo from '@/ui/logo/logo';
import styles from './header.module.scss';
import Menu from "@/components/menu/menu";
import {usePathname, useRouter} from "next/navigation";
import Arrow from "@/ui/arrow/arrow";

export default function Header() {

  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className={`${styles.wrapper} margin-site`}>
      <div>
        {
          pathname !== '/' && (
            <div
              className={styles.back}
              onClick={() => router.back()}
            >
              <Arrow/>
            </div>
          )
        }
        <Logo/>
        <Menu/>
      </div>
    </header>
  )
}