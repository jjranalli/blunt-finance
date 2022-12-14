import { useTheme } from "next-themes"
import nightwind from "nightwind/helper"
import Logo from "@components/icons/Logo"
import Nightwind from "@components/icons/Nightwind"
import ShoppingBag from "@components/icons/ShoppingBag"
import { Dispatch, SetStateAction } from "react"
import { DropdownMenuElement } from ".."
type Props = {
  showDropdown: boolean
  setShowDropdown: Dispatch<SetStateAction<boolean>>
}

function DropdownMenu({ showDropdown, setShowDropdown }: Props) {
  const { theme, setTheme } = useTheme()

  const toggle = () => {
    nightwind.beforeTransition()
    if (theme !== "dark") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <div
      className={`z-20 absolute text-sm top-0 right-0 w-56 mt-20 border border-gray-200 space-y-1 bg-white rounded-sm shadow-base nightwind-prevent-block`}
    >
      <DropdownMenuElement
        href="/rounds"
        image={
          <div className="w-5 h-5 border-2 border-blue-600 rounded-full group-hover:border-white" />
        }
        label="My rounds"
        onClick={() => setShowDropdown(false)}
      />
      <div className="xs:hidden">
        <DropdownMenuElement
          image={<Nightwind size="h-5" onClick={null} />}
          label="Toggle dark mode"
          onClick={() => toggle()}
        />
      </div>
    </div>
  )
}

export default DropdownMenu
