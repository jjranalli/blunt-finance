import { useAddRecentTransaction } from "@rainbow-me/rainbowkit"
import { useContractWrite, usePrepareContractWrite } from "wagmi"
import Button from "../Button"
import Question from "../Question"
import BluntDelegate from "abi/BluntDelegate.json"
import executeTransaction from "@utils/executeTransaction"
import { useState } from "react"

type Props = { projectId: number; bluntDelegate: string }

const QueueBlock = ({ projectId, bluntDelegate }: Props) => {
  const [loading, setLoading] = useState(false)
  const { config, error } = usePrepareContractWrite({
    address: bluntDelegate,
    abi: BluntDelegate.abi,
    functionName: "queueNextPhase",
    args: []
  })
  const addRecentTransaction = useAddRecentTransaction()
  const { writeAsync } = useContractWrite(config)

  return (
    <div className="relative flex items-center gap-4 text-left">
      <div className="flex items-center">
        <p className="">Prepare round</p>
        <Question
          text={
            <>
              <p>
                In order to finalize rounds immediately as the deadline is over,
                an additional transaction needs to be executed while the round
                is in progress.
              </p>
              <p>Rounds need to be queued only once.</p>
            </>
          }
        />
      </div>
      <Button
        label="Queue stage"
        loading={loading}
        onClick={async () =>
          await executeTransaction(
            writeAsync,
            setLoading,
            `Queue round ${projectId}`,
            addRecentTransaction,
            null,
            true
          )
        }
      />
    </div>
  )
}

export default QueueBlock