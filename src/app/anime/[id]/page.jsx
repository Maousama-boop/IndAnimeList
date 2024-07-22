import VideoTrailer from "../../../components/Utilities/VideoTrailer"
import Image from "next/image"
import { getAnimeResponse } from "../../../libs/api-libs"
const Page = async({params: {id}}) => {
  const animeDetail = await getAnimeResponse(`anime/${id}`)
    return (
        <>
            <div className="md:p-7 p-4 md:pb-5 pb-3 md:py-7 py-5 font-semibold">
                <h3 className="text-color-primary text-2xl">{animeDetail.data.title}</h3>
                {animeDetail.data.year ?
                <h4 className="text-color-primary text-l">Anime Realese - {animeDetail.data.year}</h4>
                :
                null
                }
            </div>
            <div className="md:px-7 px-4 flex justify-center md:justify-start sm:flex-nowrap flex-wrap gap-3 text-color-primary font-semibold capitalize">
            <Image src={animeDetail.data.images.webp.large_image_url} alt={animeDetail.data.images.jpg.image_url} height={250} width={250} className="object-cover rounded-xl w-52 md:w-56 h-full" priority/>
            <p className="text-justify sm:text-x text-sm">{animeDetail.data.synopsis}</p>
            </div>
            <div>
                <VideoTrailer trailerId={animeDetail.data.trailer.youtube_id}/>
            </div>
        </>
    )
}

export default Page

