import Image from "next/image"
import Link from "next/link"
import React from 'react';

interface IndAnimeListProps {
  api: {
    data: Array<{
      mal_id: number,
      title: string,
      images: {
        webp: {
          image_url: string,
        },
      },
    }>
  },
}
const IndAnimeList: React.RF<IndAnimeListProps> = ({api}) => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-3">
            {api.data?.map((anime, index) => {
                return (
                    <Link href={`/anime/${anime.mal_id}`}className="cursor-pointer text-color-primary hover:text-color-accent transition-all anime" key={index}>
                        <Image src={anime.images.webp.image_url} alt="..." priority width={350} height={350} className="w-full max-h-64 rounded object-cover"/>
                          <h3 className="font-bold md:text-x text-md text-center whitespace-nowrap overflow-hidden text-ellipsis">{anime.title}</h3>
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
                        <Image src={character.images.webp?.image_url || character.images.jpg.image_url} width={350} height={350} className="w-full max-h-64 object-cover"/>
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