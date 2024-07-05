import { getAnimeResponse } from "../../libs/api-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async({params: {id}}) => {
    const animeDetail = await getAnimeResponse(`anime/${id}`)
    const animeCharacter = await getAnimeResponse(`anime/${id}/characters`)
    return (
        <>
            <div className="p-3 pb-0 font-semibold">
                <h3 className="text-color-primary text-2xl">{animeDetail.data.title}</h3>
                {animeDetail && animeDetail.data.year ?
                <h4 className="text-color-primary text-l">Anime Realese - {animeDetail.data.year}</h4>
                :
                null
                }
            </div>
            <div className="p-3 flex justify-center items-center sm:flex-nowrap flex-wrap gap-3 text-color-primary font-semibold capitalize">
            <Image src={animeDetail.data.images.webp.image_url} alt={animeDetail.data.images.jpg.image_url} height={250} width={250} className="object-cover rounded w-48 md:w-56 h-full"/>
            <p className="text-justify sm:text-x text-sm">{animeDetail.data.synopsis}</p>
            </div>
            <p className="text-2xl text-color-primary">{animeCharacter.data.character.mal_id}</p>
        </>
    )
}

export default Page