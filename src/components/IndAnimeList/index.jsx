import Image from "next/image"
import Link from "next/link"

const IndAnimeList = ({api}) => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-3">
            {api.data?.map((anime, index) => {
                return (
                    <Link href={`/anime/${anime.mal_id}`}className="relative overflow-hidden cursor-pointer text-color-primary hover:text-color-accent transition-all" key={index}>
                        <Image src={anime.images.webp.image_url} width={350} height={350} className="w-full h-full max-h-64 md:max-h-72 object-cover anime"/>
                        <div className="absolute bottom-0 w-full text-center p-6 box-border">
                          <h3 className="font-bold md:text-x text-md text-center title-anime whitespace-nowrap overflow-hidden text-ellipsis">{anime.title}</h3>
                          <p className="whitespace-normal md:text-x text-md">{anime.score}</p>
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
                    <Link href={`/characters/${character.mal_id}`}className="cursor-pointer text-color-primary hover:text-color-accent transition-all" key={index}>
                        <Image src={character.images.webp.image_url} width={350} height={350} className="w-full h-full max-h-64 md:max-h-72 object-cover anime"/>
                        <h3 className="font-bold md:text-x text-md p-2 text-center title-anime">{character.name}</h3>
                    </Link>
                )    
            })}
        </div>
    )
}
export { IndAnimeList, IndCharacterList }