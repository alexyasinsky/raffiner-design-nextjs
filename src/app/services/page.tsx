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
      <Grid contents="cardWithVisibleDescription">
        <Link href={'/projects/project'}>
        <Card
         description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
         cardType='cardWithVisibleDescription'
        >
            <Photo
              size="card"
              image='dining-room.jpeg'
            />
        </Card>
        </Link>
        <Link href={'/projects/project'}>
          <Card
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
            cardType='cardWithVisibleDescription'
          >
            <Photo
              size="card"
              image='dining-room.jpeg'
            />
          </Card>
        </Link>

      </Grid>
      <Grid contents="cardWithVisibleDescription">
        <Link href={'/projects/project'}>
          <Card
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
            cardType='cardWithVisibleDescription'
          >
            <Photo
              size="card"
              image='dining-room.jpeg'
            />
          </Card>
        </Link>
        <Link href={'/projects/project'}>
          <Card
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
            cardType='cardWithVisibleDescription'
          >

            <Photo
              size="card"
              image='dining-room.jpeg'
            />

          </Card>
        </Link>

      </Grid>
      <Grid contents="cardWithVisibleDescription">
        <Link href={'/projects/project'}>
          <Card
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
            cardType='cardWithVisibleDescription'
          >
            <Photo
              size="card"
              image='dining-room.jpeg'
            />
          </Card>
        </Link>
        <Link href={'/projects/project'}>
          <Card
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
            cardType='cardWithVisibleDescription'
          >
            <Photo
              size="card"
              image='dining-room.jpeg'
            />

          </Card>
        </Link>

      </Grid>


    </>
  )
}