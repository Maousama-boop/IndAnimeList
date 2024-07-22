import Image from "next/image"
import { authUsserSession } from "../../../libs/auth-libs"
const Page = async() => {
    const user = await authUsserSession()
    
    return(
        <div className="text-color-primary capitalize">
            <h3>dashboard</h3>
            <div className="flex justify-center items-center text-center flex-col">
                <Image src={user?.image} alt={`Foto Profil ${user?.name}`} width={250} height={250} />
                <h5>Selamat Datang {user?.name}!</h5>
            </div>
        </div>
    )
}

export default Page