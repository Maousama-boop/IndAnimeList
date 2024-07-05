"use client"

import { useEffect, useState } from "react"
import { getAnimeResponse } from "../../libs/api-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async({params: {id}}) => {
    const [animeDetail, setAnimeDetail] = useState([])
    const [animeCharacter, setAnimeCharacter] = useState([])

      const fetchData = async() => {
      const animeDetailResponse = await getAnimeResponse(`anime/${id}`)
      setAnimeDetail(animeDetailResponse)
      
      const animeCharacterResponse = await getAnimeResponse(`anime/${id}/characters`)
      setAnimeCharacter(animeCharacterResponse)
      }    
    useEffect(() => {
      fetchData()
    }, [id])
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
            {animeCharacter.data?.character.map((characterAnime) => {
              <p className="text-xl text-color-primary">{characterAnime.name}</p>
            })}
        </>
    )
}

export default Page