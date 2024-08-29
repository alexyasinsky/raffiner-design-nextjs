
import styles from './page-wrapper.module.scss';
import React from "react";

type TProps = {
  name: string;
  title: string;
  subTitle?: string;
  children: React.ReactNode;
}

export default function PageWrapper({name, title, subTitle,children}:TProps) {

  return (
    <section className={styles.wrapper}>
      <div className='margin-site'>
        <p className={styles.name}>{name}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subTitle}>{subTitle}</p>
      </div>
      {children}
    </section>
  )
}