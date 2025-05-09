import { IndCharacterList } from "../../../../components/IndAnimeList"
import Header from "../../../../components/IndAnimeList/Header"
import { getAnimeResponse } from "../../../../libs/api-libs"


const Page = async ({ params }) => {
  const { keyword } = params
  const decodedKeyword = decodeURI(keyword)
  const searchCharacter = await getAnimeResponse("characters", `q=${decodedKeyword}`)
  return (
    <>
      <section>
        <Header title={`Pencarian Character '${decodedKeyword}'`}/>
        <IndCharacterList api={searchCharacter}/>
      </section>
    </>
  )
}

export default Page