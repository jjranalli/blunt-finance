import RoundViewMain from "../RoundViewMain"
import PayButton from "../PayButton"
import Locks from "../Locks"
import EmissionPreview from "../EmissionPreview"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import markdownToHtml from "@lib/markdownToHtml"
import useNow from "@utils/useNow"
import formatRound from "@utils/formatRound"

type Props = {
  projectData: any
  subgraphData: any
  roundInfo: any
}

const RoundViewFull = ({ projectData, subgraphData, roundInfo }: Props) => {
  const now = Math.floor(useNow() / 1000)
  const router = useRouter()
  const { id } = router.query
  const { round, deadline, totalContributions, duration, isRoundClosed } =
    formatRound(subgraphData, roundInfo, projectData.metadata)

  const [descriptionHtml, setDescriptionHtml] = useState("")

  useEffect(() => {
    const getDescriptionHtml = async (description: string) => {
      setDescriptionHtml(await markdownToHtml(description))
    }

    if (round?.description) {
      getDescriptionHtml(round.description)
    }
  }, [round])

  return (
    <>
      <RoundViewMain
        roundData={round}
        descriptionHtml={descriptionHtml}
        raised={totalContributions}
        deadline={deadline}
        issuance={false}
      />

      <PayButton
        projectId={Number(id)}
        round={round}
        isSlicerToBeCreated={round.isSlicerToBeCreated || round?.shares[0] != 0}
      />

      <Locks
        transferTimestamp={round.transferTimelock}
        releaseTimestamp={round.releaseTimelock}
        roundTimestamp={round.roundTimelock}
      />

      <EmissionPreview shares={round?.shares} totalShares={round.shares[0]} />

      {/* TODO: Add "Contributed" section */}
    </>
  )
}

export default RoundViewFull