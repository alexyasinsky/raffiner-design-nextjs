import styles from "@/app/projects/page.module.scss";
import Grid from "@/components/grid/grid";
import Link from "next/link";
import Photo from "@/components/photo/photo";


export default function Project () {
  return (
    <>
      <h1 className={styles.title}>Quis ipsum suspendisse</h1>
      <p className={styles.subTitle}>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
      <Grid contents="photos">
          <Link href={'/projects/project'}>
            <Photo size="extra-large"/>
          </Link>
      </Grid>
      <Grid contents="photos">
          <Link href={'/projects/project'}>
            <Photo size="extra-large"/>
          </Link>
      </Grid>
      <Grid contents="photos">
          <Link href={'/projects/project'}>
            <Photo size="large"/>
          </Link>
          <Link href={'/projects/project'}>
            <Photo size="large"/>
          </Link>
      </Grid>
      <Grid contents="photos">
          <Link href={'/projects/project'}>
            <Photo size="extra-large"/>
          </Link>
      </Grid>
      <Grid contents="photos">
          <Link href={'/projects/project'}>
            <Photo size="extra-large"/>
          </Link>
      </Grid>

    </>
  )
}