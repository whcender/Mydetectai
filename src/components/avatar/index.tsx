import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export default function AvatarDemo() {
    return (
        <div className="flex gap-6 max-lg:gap-6 max-md:gap-3 max-xl:gap-3 max-2xl:gap-3 items-center text-center">
            <Avatar className="size-12 max-md:size-10 max-xl:size-12 max-2xl:size-14 max-lg:size-16">
                <AvatarImage src="yapay1kırp.webp" alt="@shadcn" />
                <AvatarFallback>AR</AvatarFallback>
            </Avatar>

            <Avatar className="size-12 max-md:size-10 max-xl:size-12 max-2xl:size-14 max-lg:size-16">
                <AvatarImage src="yapay2kırp.webp" alt="@shadcn" />
                <AvatarFallback>AR</AvatarFallback>
            </Avatar>

            <Avatar className="size-12 max-md:size-10 max-xl:size-12 max-2xl:size-14 max-lg:size-16">
                <AvatarImage src="yapay3kırp.webp" alt="@shadcn" />
                <AvatarFallback>AR</AvatarFallback>
            </Avatar>

            <Avatar className="size-12 max-md:size-10 max-xl:size-12 max-2xl:size-14 max-lg:size-16">
                <AvatarImage src="yapay4kırp.webp" alt="@shadcn" />
                <AvatarFallback>AR</AvatarFallback>
            </Avatar>

            <Avatar className="size-12 max-md:size-10 max-xl:size-12 max-2xl:size-14 max-lg:size-16 ">
                <AvatarImage src="yapay5kırp.webp" alt="@shadcn" />
                <AvatarFallback>AR</AvatarFallback>
            </Avatar>
            <p className="text-white font-bold text-5xl max-md:text-4xl max-xl:text-3xl max-2xl:text-3xl  ">+</p>
        </div>
    )
}
