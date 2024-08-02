
import Image from "next/image"
import Link from "next/link"
import { authUsserSession } from "../../../libs/auth-libs"
import { Bookmarks, Chats, SignOut } from "@phosphor-icons/react/dist/ssr"

const Page = async() => {
    const user = await authUsserSession()
    
    return(
        <div className="text-color-primary capitalize font-semibold">
            <div className="flex justify-between items-center md:p-7 p-4 md:pb-4 pb-5 py-8">
                <h3 className="text-xl capitalize cursor-default font-semibold text-color-primary">dashboard saya</h3>
                <Link href={"/api/auth/signout"}><SignOut size={30}/></Link>
            </div>
            <div className="sm:flex md:flex justify-center items-center text-center">
                <div className="flex justify-center items-center">
                    <Image src={user?.image} alt={`Foto Profil ${user?.name}`} width={200} height={200} className="rounded-full m-5"/>
                </div>
                <div className="flex flex-col gap-3 md:pl-5 mx-5">
                <h1 className="text-xl">Selamat Datang {user?.name}!</h1>
                    <Link href={'/users/dashboard/favorit'} className="flex justify-center items-center text-center text-lg bg-color-accent p-2 rounded-md gap-1">Favorit Anime<Bookmarks size={25} color="#ffd700"/></Link>
                    <Link href={'/users/dashboard/comment'} className="flex justify-center items-center text-center text-lg bg-color-accent p-2 rounded-md gap-1">Komentar<Chats size={25} color="#ffd700" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Page