import IndAnimeList from "../../../components/IndAnimeList"
import Header from "../../../components/IndAnimeList/Header"

const Page = async ({ params }) => {
  const { keyword } = params
  const decodedKeyword = decodeURI(keyword)
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)
  const searchAnime = await response.json()
  return (
    <>
      <section>
        <Header title={`Pencarian '${decodedKeyword}'`}/>
        <IndAnimeList api={searchAnime}/>
      </section>
    </>
  );
}

export default Page