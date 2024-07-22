import Link from "next/link"
import { authUsserSession } from "../../libs/auth-libs"
import { SignIn, SignOut } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"

const UserButton = async() => {
    const user = await authUsserSession()
    const actionIcon =  user ? <SignOut size={32} /> : <SignIn size={32} />  
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"
    const userImage = <Image src={user?.image} height={45} width={45} className="rounded-full" />

    return(
        <div className="flex justify-start items-center text-center gap-3">
            {
            user ? <Link href="/users/dashboard" className="visible">{userImage}</Link> : <Link href="/users/dashboard" className="invisible">{userImage}</Link>  
            }
            <Link href={actionURL} className="">{actionIcon}</Link>
        </div>
    )
}

export default UserButton