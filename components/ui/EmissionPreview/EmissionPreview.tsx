import { PieChart, ReservedTable } from "@components/ui"

type Props = {
  shares: number[]
  totalShares: number
}

const EmissionPreview = ({ shares, totalShares }: Props) => {
  return (
    <div className="py-8 space-y-10">
      <p className="text-base text-center">
        Token emission (after blunt round)
      </p>
      <div className="text-black">
        <PieChart
          addresses={["Contributor", "Others reserved", "Blunt round"]}
          shares={[100 - totalShares, ...shares.slice(1), Number(shares[0])]}
          total={100}
        />
      </div>
      <div>
        <ReservedTable
          reservedPool={totalShares}
          reservedStake={Number(shares[0])}
        />
      </div>
    </div>
  )
}

export default EmissionPreview