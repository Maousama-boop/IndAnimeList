import Link from "next/link"
import { authUsserSession } from "../../libs/auth-libs"
import { SignIn } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"

const UserButton = async() => {
    const user = await authUsserSession()
    const userImage = <Image src={user?.image} height={45} width={45} className="rounded-full" />

    return(
        <div className="flex justify-start items-center text-center gap-3">
            {
            user ? <Link href="/users/dashboard">{userImage}</Link> : <Link href={"/api/auth/signin"} className=""><SignIn size={32} /> </Link>
            }
        </div>
    )
}

export default UserButton