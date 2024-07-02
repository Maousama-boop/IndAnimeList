import { getAnimeResponse } from "../../libs/api-libs"

const Page = async({params: {id}}) => {
    const animeDetail = await getAnimeResponse(`anime/${id}`)
    console.log(animeDetail)
    return (
        <>
            <div className="p>
                <h3 className="text-color-primary text-2xl">Anime Detail</h3>
            </div>
        </>
    )
}

export default Page