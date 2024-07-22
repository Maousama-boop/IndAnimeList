import { getAnimeResponse } from "../../../libs/api-libs"
import Image from "next/image"

const Page = async({params: {id}}) => {
    const animeCharacter = await getAnimeResponse(`characters/${id}`)
    return (
        <>
            <div className="md:p-7 p-4 md:pb-5 pb-3 md:py-7 py-5 font-semibold">
                <h3 className="text-color-primary text-2xl">{animeCharacter.data.name}</h3>
                {animeCharacter && animeCharacter.data.name_kanji ?
                <h4 className="text-color-primary text-l">{animeCharacter.data.name_kanji}</h4>
                :
                null
                }
            </div>
            <div className="md:px-7 px-4 flex justify-center md:justify-start sm:flex-nowrap flex-wrap gap-3 text-color-primary font-semibold capitalize">
            <Image src={animeCharacter.data.images.webp.image_url} alt={animeCharacter.data.images.jpg.image_url} height={250} width={250} className="object-cover rounded-xl w-52 md:w-56 h-full" priority/>
            <p className="text-justify sm:text-x text-sm">{animeCharacter.data.about}</p>
            </div>
        </>
    )
}

export default Page