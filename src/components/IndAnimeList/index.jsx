import Image from "next/image"
import Link from "next/link"

const IndAnimeList = ({api}) => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-3">
            {api.data?.map((anime, index) => {
                return (
                    <Link href={`/anime/${anime.mal_id}`}className="relative overflow-hidden cursor-pointer text-color-primary hover:text-color-accent transition-all anime rounded-md" key={index}>
                        <Image src={anime.images.webp?.image_url || anime.images.jpg.image_url} width={350} height={350} className="w-full max-h-full object-cover"/>
                        <div className="absolute bottom-0 w-full text-center p-2 box-border overlay">
                          <h3 className="font-bold md:text-x text-md text-start  pb-0 whitespace-nowrap overflow-hidden text-ellipsis">{anime.title}</h3>
                          <p className="whitespace-normal md:text-sm text-xs text-start">score: {anime.score}</p>
                        </div>
                    </Link>
                )    
            })}
        </div>
    )
}
const IndCharacterList = ({api}) => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-3">
            {api.data?.map((character, index) => {
                return (
                    <Link href={`/character/${character.mal_id}`}className="relative overflow-hidden cursor-pointer text-color-primary hover:text-color-accent transition-all anime rounded-md" key={index}>
                        <Image src={character.images.webp?.image_url || character.images.jpg.image_url} width={350} height={350} className="w-full max-h-full object-cover"/>
                        <div className="absolute bottom-0 w-full text-center p-2 box-border overlay">
                          <h3 className="font-bold md:text-x text-md text-start  pb-0 whitespace-nowrap overflow-hidden text-ellipsis">{character.name}</h3>
                          <p className="whitespace-normal md:text-sm text-xs text-start">favorit: {character.favorites}</p>
                        </div>
                    </Link>
                )    
            })}
        </div>
    )
}
export { IndAnimeList, IndCharacterList }