import { useAppContext } from "../context"

type Props = {
  reservedPool: number
  reservedStake: number
}
const ReservedTable = ({ reservedPool, reservedStake }: Props) => {
  const { setModalView } = useAppContext()
  return (
    <div>
      <table>
        <thead>
          <tr className="bg-gray-100">
            {/* <th scope="col">Cycle</th> */}
            <th scope="col">Contributor</th>
            <th scope="col">Blunt round</th>
            <th scope="col">Other reserved</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr className="border-b border-gray-200">
             <th scope="row">Current</th> 
            <td>{Number(100 - reservedPool).toFixed(1)}%</td>
            <td>0%</td>
            <td className="font-bold text-blue-400 dark:text-blue-300 ">
              {Number(reservedPool).toFixed(1)}%
            </td>
          </tr>*/}
          <tr className="border-b border-gray-200">
            {/* <th scope="row">Next</th> */}
            <td>{Number(100 - reservedPool).toFixed(1)}%</td>
            <td className="font-bold text-blue-600 nightwind-prevent">
              {Number(reservedStake).toFixed(1)}%
            </td>
            <td className="font-bold text-blue-400 dark:text-blue-300 ">
              {Number(reservedPool - reservedStake).toFixed(1)}%
            </td>
          </tr>
        </tbody>
      </table>
      <p className="pt-2 text-sm text-right">
        <a
          className="text-gray-600 highlight"
          onClick={() => setModalView({ name: "ROUND_INFO_VIEW", cross: true })}
        >
          WTF is this?
        </a>
      </p>
    </div>
  )
}

export default ReservedTable
