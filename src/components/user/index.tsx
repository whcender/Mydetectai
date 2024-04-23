
import Link from "next/link"
import { FaUserCog } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { RxExit } from "react-icons/rx";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"


export default function PopoverDemo() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <img className='size-10 max-md:size-7 cursor-pointer' src="navinsan.svg" alt="" />
            </PopoverTrigger>
            <PopoverContent className="w-52 max-md:w-36 max-md:mr-14">
                <div className="flex flex-col gap-4">
                    <div className="flex  gap-2">

                        <Link className="flex items-center gap-3 max-md:gap-2 text-lg max-md:text-base font-semibold" href=""><FaUserCog size={20} />Hesap  </Link>
                        {/* if user is not logged in, show login button */}
                        <Avatar className="size-16 max-md:size-10 max-xl:size-12 max-2xl:size-14 max-lg:size-16">
                            <AvatarImage src="yapay1kırp.webp" alt="@shadcn" />
                            <AvatarFallback>AR</AvatarFallback>
                        </Avatar>

                    </div>
                    <div className="flex  flex-col gap-2">
                        <Link className="flex items-center gap-3 max-md:gap-2  text-lg max-md:text-base font-semibold" href="/login"><FaUserCheck size={20} />Giriş Yap</Link>
                    </div>
                    <div className="flex  flex-col gap-2">
                        <div className="w-full h-[0.4px] m-auto bg-gray-700 opacity-70"></div>

                        <Link className="text-red-700 flex items-center gap-3 max-md:gap-2  text-lg max-md:text-base font-semibold" href=""><RxExit size={20} />Çıkış Yap</Link>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
