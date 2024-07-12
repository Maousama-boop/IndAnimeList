import VideoTrailer from "../../../components/Utilities/VideoTrailer"
import Image from "next/image"
import { getAnimeResponse } from "../../../libs/api-libs"

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
            <div className="p-3 flex justify-center sm:flex-nowrap flex-wrap gap-3 text-color-primary font-semibold capitalize">
            <Image src={animeDetail.data.images.webp.image_url} alt={animeDetail.data.images.jpg.image_url} height={250} width={250} className="object-cover rounded-xl w-52 md:w-56 h-full"/>
            <p className="text-justify sm:text-x text-sm">{animeDetail.data.synopsis}</p>
            </div>
            <div>
                <VideoTrailer trailerId={animeDetail.data.trailer.youtube_id}/>
            </div>
        </>
    )
}

export default Page