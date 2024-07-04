import { IndAnimeList, IndCharacterList } from "../components/IndAnimeList"
import Header from "../components/IndAnimeList/Header"
import { getAnimeResponse } from "./libs/api-libs"

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10")
  const topCharacter = await getAnimeResponse("top/characters", "limit=10")

  return (
    <>
      <section>
        <Header title="Anime Populer" linkTitle="Lihat Semua" linkHref="/populer/anime"/>
        <IndAnimeList api={topAnime}/>
      </section>
      <section>
        <Header title="Character Populer" linkTitle="Lihat Semua" linkHref="/populer/character"/>
        <IndCharacterList api={topCharacter}/>
      </section>
    </>
  );
}

export default Page