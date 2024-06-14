import IndAnimeList from "@/app/components/IndAnimeList"
import Link from "next/link";

const Home = async () => {
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`)
  const anime = await response.json()

  return (
    <div>
      <div className="flex justify-between p-2">
        <h1 className="text-x uppercase cursor-default font-semibold">Populer</h1>
        <Link href="/" className="text-x underline hover:text-blue-500 transition-all">Lihat Semua</Link>
      </div>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-4 px-2">
      {anime.data.map(data => {
        return (
        <div key={data.mal_id} className="shadow-xl">
          <IndAnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id}/>
        </div>
        )
        })}
      </div>
    </div>
  );
}

export default Home