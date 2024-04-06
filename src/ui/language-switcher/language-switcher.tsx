import styles from "./language-switcher.module.scss";


const languages = [
  'Ru', 'En'
]
export default function LanguageSwitcher() {
  return (

      <ul className={styles.language}>
        {languages.map((item, ind) => {
          return (
            <li key={ind}><button>{item}</button></li>
          )
        })}
      </ul>
  )
}