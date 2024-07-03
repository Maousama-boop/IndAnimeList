import IndAnimeList from "../../../components/IndAnimeList"
import Header from "../../../components/IndAnimeList/Header"
import { getAnimeResponse } from "../../libs/api-libs"

const Page = async ({ params }) => {
  const { keyword } = params
  const decodedKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)
  return (
    <>
      <section>
      {decodedKeyword ? (
        <Header title={`Pencarian '${decodedKeyword}'`}/>
        <IndAnimeList api={searchAnime}/>
        ) : (
        <Header title={`Pencarian '${decodedKeyword}' Tidak Di Temukan.`}/>
          )}
      </section>
    </>
  );
}

export default Page