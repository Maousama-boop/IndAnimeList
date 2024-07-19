"use client"

import VideoTrailer from "../../../components/Utilities/VideoTrailer"
import Image from "next/image"
import { getAnimeResponse, getNestedDataResponse } from "../../../libs/api-libs"
import { IndCharacterList } from "../../../components/IndAnimeList"

const Page = async({params: {id}}) => {
  const animeDetail = await getAnimeResponse(`anime/${id}`)
  const animeCharacter = await getNestedDataResponse(`anime/${id}/characters`,'character')
    return (
        <>
            <div className="p-3 pb-0 font-semibold">
                <h3 className="text-color-primary text-2xl">{animeDetail.data.title}</h3>
                {animeDetail.data.year ?
                <h4 className="text-color-primary text-l">Anime Realese - {animeDetail.data.year}</h4>
                :
                null
                }
            </div>
            <div className="p-3 flex justify-center md:justify-start sm:flex-nowrap flex-wrap gap-3 text-color-primary font-semibold capitalize">
            <Image src={animeDetail.data.images.webp.large_image_url} alt={animeDetail.data.images.jpg.image_url} height={250} width={250} className="object-cover rounded-xl w-52 md:w-56 h-full" priority/>
            <p className="text-justify sm:text-x text-sm">{animeDetail.data.synopsis}</p>
            </div>
            <div>
                <VideoTrailer trailerId={animeDetail.data.trailer.youtube_id}/>
            </div>
            <div className="flex gap-4 overflow-x-auto">
            {animeCharacter.map((character) => (
                <Image src={character.images.webp.image_url} width={250} height={250} />
                ))}
            </div>
        </>
    )
}

export default Page

