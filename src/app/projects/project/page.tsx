import Grid from "@/ui/grid/grid";
import Card from "@/ui/card/card";


export default function Project() {
  return (
    <>
      <h1 className={'title'}>Quis ipsum suspendisse</h1>
      <p className={'subTitle'}>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
        vel facilisis. </p>
      <Grid>
        <Card
          cardType="cardWithHiddenDescription"
          description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          size="large"
          image='dining-room.jpeg'
        >
        </Card>
        <Card
          cardType="cardWithHiddenDescription"
          description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          size="large"
          image='dining-room.jpeg'
        >
        </Card>
      </Grid>
      <Grid>
        <Card
          cardType="cardWithHiddenDescription"
          description='Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis'
          size="extra-large"
          image='dining-room.jpeg'
        >
        </Card>
      </Grid>

    </>
  )
}