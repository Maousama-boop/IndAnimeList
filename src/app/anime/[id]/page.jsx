import { getAnimeResponse } from "../../libs/api-libs"
import Image from "next/image"

const Page = async({params: {id}}) => {
    const animeDetail = await getAnimeResponse(`anime/${id}`)
    return (
        <>
            <div className="p-3">
                <h3 className="text-color-primary text-2xl">{animeDetail.data.title} - {animeDetail.data.year}</h3>
            </div>
            <div className="p-3 flex gap-3 text-color-primary overflow-x-auto">
            <div className="w-36 flex flex-col justify-center items-center rounded border-2 border-color-accent p-2">
            <h3>Rank</h3>
            <p>{animeDetail.data.rank}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border-2 border-color-accent p-2">
            <h3>Genre</h3>
            <p>{animeDetail.data.genres[0].name}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border-2 border-color-accent p-2">
            <h3>Episode</h3>
            <p>{animeDetail.data.episodes}</p>
            </div>
            </div>
            <div className="p-3 flex sm:flex-nowrap flex-wrap gap-3 text-color-primary">
            <Image src={animeDetail.data.images.webp.image_url} alt={animeDetail.data.images.jpg.image_url} height={250} width={250} className="object-cover rounded w-full"/>
            <p className="text-justify text-xl">{animeDetail.data.synopsis}</p>
            </div>
        </>
    )
}

export default Page