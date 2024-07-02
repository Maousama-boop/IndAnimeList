import { getAnimeResponse } from "../../libs/api-libs"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "@phosphor-icons/react"

const Page = async({params: {id}}) => {
    const animeDetail = await getAnimeResponse(`anime/${id}`)
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
            <div className="p-3 flex gap-3 text-color-primary overflow-x-auto capitaliz no-scrollbar text-center">
            <div className="w-36 flex flex-col justify-center items-center rounded border-2 border-color-accent p-2">
            <h3>Rank</h3>
            <p>{animeDetail.data.rank}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border-2 border-color-accent p-2">
            <h3>rating</h3>
            <p>{animeDetail.data.score}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border-2 border-color-accent p-2">
            <h3>member</h3>
            <p>{animeDetail.data.members}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border-2 border-color-accent p-2">
            <h3>favorit</h3>
            <p>{animeDetail.data.favorites}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border-2 border-color-accent p-2">
            <h3>Episode</h3>
            <p>{animeDetail.data.episodes}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border-2 border-color-accent p-2">
            <h3>durasi</h3>
            <p>{animeDetail.data.duration}</p>
            </div>
            </div>
            <div className="p-3 flex sm:flex-nowrap flex-wrap gap-3 text-color-primary font-semibold">
            <Image src={animeDetail.data.images.webp.image_url} alt={animeDetail.data.images.jpg.image_url} height={250} width={250} className="object-cover rounded w-full"/>
            <p className="text-justify text-xl">{animeDetail.data.synopsis}</p>
            </div>
            <div>
            <link href="/">
            <ArrowLeft size={32} />Kembali</Link>
            </div>
        </>
    )
}

export default Page