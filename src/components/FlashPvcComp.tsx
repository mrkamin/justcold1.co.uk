import { Grid, GridItem } from "@chakra-ui/react"
import PvcCurtains from "./PvcCurtains"
import FlashingsCard from "./FlashingsCard"

const FlashPvcComp = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="4" paddingX={10}>
        <GridItem colSpan={1}>
            <PvcCurtains />
        </GridItem>
        <GridItem colSpan={2}>
            <FlashingsCard />
        </GridItem>
    </Grid>
  )
}

export default FlashPvcComp
