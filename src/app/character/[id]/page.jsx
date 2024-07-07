import { getAnimeResponse } from "../../libs/api-libs"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
    const animeCharacter = await getAnimeResponse(`characters/${id}`)
    return (
        <>
            {animeCharacter.data?.map((character) => (
                <div key={character.mal_id}>
                    <div className="p-3 pb-0 font-semibold">
                        <h3 className="text-color-primary text-2xl">{character.name}</h3>
                        {character && character.name_kanji ? (
                            <h4 className="text-color-primary text-l">{character.name_kanji}</h4>
                        ) : null}
                    </div>
                    <div className="p-3 flex justify-center items-center sm:flex-nowrap flex-wrap gap-3 text-color-primary font-semibold capitalize">
                        <Image 
                            src={character.images.webp?.image_url || character.images.jpg.image_url} 
                            height={250} 
                            width={250} 
                            alt={character.name}
                            className="object-cover rounded-md w-48 md:w-56 h-full" 
                        />
                        <p className="text-justify sm:text-x text-sm">{character.about}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Page