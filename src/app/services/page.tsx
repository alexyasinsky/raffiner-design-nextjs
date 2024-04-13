import Grid from "@/ui/grid/grid";
import Link from "next/link";
import Photo from "@/ui/photo/photo";
import Card from "@/ui/card/card";


export default function Services() {
  return (
    <>
      <h1 className={'title'}>Better Decisions</h1>
      <p className={'subTitle'}>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
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