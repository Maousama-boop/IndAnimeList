import { getAnimeResponse } from "../../libs/api-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async({params: {id}}) => {
    const animeCharacter = await getAnimeResponse(`characters/${id}`)
    return (
        <>
            <div className="p-3 pb-0 font-semibold">
                <h3 className="text-color-primary text-2xl">{animeCharacter.data.name}</h3>
                {animeCharacter && animeCharacter.data.name_kanji ?
                <h4 className="text-color-primary text-l">{animeCharacter.data.name_kanji}</h4>
                :
                null
                }
            </div>
            <div className="p-3 flex justify-center items-center sm:flex-nowrap flex-wrap gap-3 text-color-primary font-semibold capitalize">
            <Image src={animeCharacter.data.images.webp.image_url} alt={animeCharacter.data.images.jpg.image_url} height={250} width={250} className="object-cover rounded w-48 md:w-56 h-full"/>
            <p className="text-justify sm:text-x text-sm">{animeCharacter.data.about}</p>
            </div>
        </>
    )
}

export default Page