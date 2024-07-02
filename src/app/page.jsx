import IndAnimeList from "../components/IndAnimeList"
import Header from "../components/IndAnimeList/Header"
import { getAnimeResponse } from "./libs/api-libs"

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10")

  return (
    <>
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer"/>
        <IndAnimeList api={topAnime}/>
      </section>
    </>
  );
}

export default Page