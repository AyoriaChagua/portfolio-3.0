import { RiArrowRightSLine } from 'react-icons/ri'
import { FaFileDownload, FaGithub } from "react-icons/fa";
import { IconType } from 'react-icons';
import { IoLogoWhatsapp } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";


interface Props {
  readonly text: string
  readonly icon: "download" | "github" | "whatsapp" | "arrowright" | "email"
  readonly onClick?: () => void
  readonly buttonType?: "button" | "submit"
  readonly size?: "small" | "medium" | "large"
}

export default function CustomButton({ onClick, text, icon, buttonType, size }: Props) {
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
    case "email":
      IconSelected = SiMinutemailer
      break;
    default:
      IconSelected = RiArrowRightSLine
      break;
  }
  return (
    <button className={
      `${size === "small" ? "w-32" : "w-full"} inline-flex items-center justify-center 
      lg:text-base text-sm text-ellipsis text-nowrap
      lg:px-4 lg:py-2 px-2 py-1 border-2 font-medium rounded-md
      border-[#413DF9] text-white bg-transparent from-[#413DF9] to-[#237BFE] 
      hover:bg-gradient-to-r
      focus:ring-gray-700
      transform transition duration-500 hover:scale-110 gap-2`
    }
      onClick={onClick}
      type={buttonType}
    >
      {text}
      {<IconSelected />}
    </button>
  )
}
