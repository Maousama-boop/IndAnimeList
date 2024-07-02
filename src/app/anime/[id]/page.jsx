import { getAnimeResponse } from "../../libs/api-libs"

const Page = async({params: {id}}) => {
    const animeDetail = await getAnimeResponse(`anime/${id}`)
    return (
        <>
            <div className="p-3">
                <h3 className="text-color-primary text-2xl">{animeDetail.data.title} - {animeDetail.data.year}</h3>
            </div>
        </>
    )
}

export default Page