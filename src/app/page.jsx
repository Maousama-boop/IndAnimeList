import { IndAnimeList, IndCharacterList } from "../components/IndAnimeList"
import Header from "../components/IndAnimeList/Header"
import { getAnimeResponse, getNestedDataResponse } from "../libs/api-libs"


const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10")
  let rekomendAnime = await getNestedDataResponse("recommendations/anime", "entry")
  rekomendAnime = { data: rekomendAnime}
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
      <section>
        <Header title="Rekomendasi Anime"/>
        <IndAnimeList api={rekomendAnime}/>
      </section>
    </>
  );
}

export default Page