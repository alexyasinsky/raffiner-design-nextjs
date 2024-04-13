import styles from "@/app/projects/page.module.scss";
import Grid from "@/components/grid/grid";
import Link from "next/link";
import Photo from "@/components/photo/photo";
import Card from "@/components/card/card";


export default function Services() {
  return (
    <>
      <h1 className={styles.title}>Better Decisions</h1>
      <p className={styles.subTitle}>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis. </p>
      <Grid contents="cards">
        <Card>
          <Link href={'/projects/project'}>
            <Photo size="card"/>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis
            </p>
          </Link>
        </Card>
        <Card>
          <Link href={'/projects/project'}>
            <Photo size="card"/>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis
            </p>
          </Link>
        </Card>

      </Grid>
      <Grid contents="cards">
        <Card>
          <Link href={'/projects/project'}>
            <Photo size="card"/>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis
            </p>
          </Link>
        </Card>
        <Card>
          <Link href={'/projects/project'}>
            <Photo size="card"/>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis
            </p>
          </Link>
        </Card>

      </Grid>
      <Grid contents="cards">
        <Card>
          <Link href={'/projects/project'}>
            <Photo size="card"/>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis
            </p>
          </Link>
        </Card>
        <Card>
          <Link href={'/projects/project'}>
            <Photo size="card"/>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis
            </p>
          </Link>
        </Card>

      </Grid>

    </>
  )
}