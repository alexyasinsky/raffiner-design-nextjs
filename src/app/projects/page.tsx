import Grid from "@/ui/grid/grid";
import Photo from "@/ui/photo/photo";
import Link from 'next/link';
export default function Projects () {
  return (
    <>
      <h1 className={'title'}>Perfection of Form</h1>
      <p className={'subTitle'}>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
      <Grid contents="photos">
            <Link href={'/projects/project'}>
              <Photo size="medium"/>
            </Link>
          <Link href={'/projects/project'}>
            <Photo size="medium"/>
          </Link>
          <Link href={'/projects/project'}>
            <Photo size="medium"/>
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
            <Photo size="small"/>
          </Link>
          <Link href={'/projects/project'}>
            <Photo size="small"/>
          </Link>
          <Link href={'/projects/project'}>
            <Photo size="small"/>
          </Link>
          <Link href={'/projects/project'}>
            <Photo size="small"/>
          </Link>
      </Grid>
    </>
  )
}