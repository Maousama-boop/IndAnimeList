import Image from "next/image"
import Link from "next/link"

const IndAnimeList = ({api}) => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 md:gap-2 gap-1 md:px-7 px-4">
            {api.data?.map((anime) => {
                return (
                    <Link href={`/anime/${anime.mal_id}`}className="relative overflow-hidden cursor-pointer text-color-primary hover:text-color-accent transition-all rounded-xl" key={anime.mal_id}>
                        <Image src={anime.images.webp.image_url} alt="..." width={350} height={350} priority className="w-full h-full object-cover anime"/>
                        <div className="absolute bottom-0 w-full text-center p-2 box-border overlay">
                          <p className="whitespace-normal md:text-sm text-base text-start">Rank #{anime.rank}</p>
                          <h3 className="md:text-x text-md text-start pb-0 whitespace-nowrap overflow-hidden text-ellipsis font-bold">{anime.title}</h3>
                        </div>
                    </Link>
                )    
            })}
        </div>
    )
}
const IndCharacterList = ({api}) => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 md:gap-2 gap-1 md:px-7 px-4">
            {api.data?.map((character) => {
                return (
                    <Link href={`/character/${character.mal_id}`}className="relative overflow-hidden cursor-pointer text-color-primary hover:text-color-accent transition-all rounded-xl" key={character.mal_id}>
                        <Image src={character.images.webp.image_url} alt="..." width={350} height={350} priority className="w-full h-full object-cover character"/>
                        <div className="absolute bottom-0 w-full text-center p-2 box-border overlay">
                          <p className="whitespace-normal md:text-sm text-base text-start">favorit #{character.favorites}</p>
                          <h3 className="md:text-x text-md text-start  pb-0 whitespace-nowrap overflow-hidden text-ellipsis font-bold">{character.name}</h3>
                        </div>
                    </Link>
                )    
            })}
        </div>
    )
}
export { IndAnimeList, IndCharacterList }