import { RiContactsLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiHome4Line } from "react-icons/ri";
import { FiFileText } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSupport } from "react-icons/md";;
import { FaUserCheck } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function SheetDemo() {
  return (
    <Sheet   >
      <SheetTrigger asChild>
        <img className='size-8 max-md:size-5 cursor-pointer' src="navikinci.svg" alt="" />

      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex flex-col gap-5">
          <SheetTitle className="flex items-center justify-center mt-10 max-md:mt-0"><img className="w-40" src="aisiyahlogo.png" alt="" /></SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="flex mt-11 max-md:mt-4 flex-col gap-4 py-4">

          <Link className="flex items-center gap-3 text-lg font-semibold" href="asdasd"><RiHome4Line size={30} />Home</Link>
          <Link className="flex items-center gap-3 text-lg font-semibold" href="asdasd"><FiFileText size={30} />About Us</Link>
          <Link className="flex items-center gap-3 text-lg font-semibold" href="asdasd"><RiMoneyDollarCircleLine size={30} />Pricing</Link>
          <Link className="flex items-center gap-3 text-lg font-semibold" href="asdasd"><RiContactsLine size={30} />Contact Us</Link>
        </div>
        <SheetFooter className="absolute  bottom-4">
          <div className="flex flex-col gap-4">
          <div className="w-[300px] max-md:w-[200px] h-[0.4px] m-auto bg-gray-700 opacity-70"></div>
            <Link className="flex items-center  gap-3 text-lg font-semibold" href=""><IoSettingsOutline size={30} />Settings</Link>
            <Link className="flex items-center  gap-3 text-lg font-semibold" href=""><MdOutlineSupport size={30} />Support</Link>
            <Button className="text-lg flex  gap-2 font-semibold">
            <FaUserCheck size={20} /> Login
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
