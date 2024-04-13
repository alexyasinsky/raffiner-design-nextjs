import Grid from "@/ui/grid/grid";
import Link from "next/link";
import Photo from "@/ui/photo/photo";
import Card from "@/ui/card/card";


export default function Project() {
  return (
    <>
      <h1 className={'title'}>Quis ipsum suspendisse</h1>
      <p className={'subTitle'}>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
        vel facilisis. </p>
      <Grid contents="cardWithHiddenDescription">
        <Link href={'/projects/project'}>
          <Card
            cardType="cardWithHiddenDescription"
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          >
            <Photo
              size="large"
              image='dining-room.jpeg'
            />
          </Card>

        </Link>
        <Link href={'/projects/project'}>
          <Card
            cardType="cardWithHiddenDescription"
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          >
            <Photo
              size="large"
              image='dining-room.jpeg'
            />
          </Card>

        </Link>
      </Grid>
      <Grid contents="cardWithHiddenDescription">
        <Link href={'/projects/project'}>
          <Card
            cardType="cardWithHiddenDescription"
            description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          >
            <Photo
              image='dining-room.jpeg'
              size="extra-large"
            />
          </Card>

        </Link>
      </Grid>

    </>
  )
}