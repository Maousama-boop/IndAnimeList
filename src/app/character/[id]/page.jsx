import { getAnimeResponse } from "../../libs/api-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async({params: {id}}) => {
    const animeCharacter = await getAnimeResponse(`characters/${id}`)
    return (
        <>
            <div className="p-3 pb-0 font-semibold">Char Id {id}</div>
        </>
    )
}

export default Page