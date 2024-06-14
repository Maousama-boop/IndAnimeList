import Image from "next/image"
import Link from "next/link"

const IndAnimeList = ({title, images, id}) => {
    return (
        <Link href={`${id}`}className="cursor-pointer">
            <Image src={images} width={350} height={350}/>
            <h3 className="font-bold md:text-x text-md p-2 text-center title-anime">{title}</h3>
        </Link>
    )
}
export default IndAnimeList