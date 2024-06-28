import IndAnimeList from "../components/IndAnimeList"
import Header from "../components/IndAnimeList/Header"

const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)
  const topAnime = await response.json()
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