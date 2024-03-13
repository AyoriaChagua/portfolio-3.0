import { RiArrowRightSLine } from 'react-icons/ri'
import { FaFileDownload, FaGithub } from "react-icons/fa";
import { IconType } from 'react-icons';
import { IoLogoWhatsapp } from "react-icons/io";


interface Props {
  readonly text: string
  readonly button_type: "outline" | "fill"
  readonly icon: "download" | "github" | "whatsapp" | "arrowright"
  readonly onClick: () => void
}

export default function CustomButton({ button_type, onClick, text, icon }: Props) {
  let IconSelected: IconType
  switch (icon) {
    case "download":
      IconSelected = FaFileDownload
      break;
    case "whatsapp":
      IconSelected = IoLogoWhatsapp
      break;
    case "github":
      IconSelected = FaGithub
      break;
    default:
      IconSelected = RiArrowRightSLine
      break;
  }
  return (
    <button className={
      `inline-flex items-center justify-center 
      px-4 py-2 border-2 text-base font-medium rounded-md
      border-[#413DF9] text-white bg-transparent  from-[#413DF9] to-[#237BFE] 
      hover:bg-gradient-to-r
      focus:ring-gray-700
      transform transition duration-500 hover:scale-110 gap-2`
    }
    onClick={onClick}
    >
      {text}
      {<IconSelected />}
    </button>
  )
}
