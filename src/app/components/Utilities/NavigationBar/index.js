import Link from "next/link"

const NavBar = () => {
    return (
        <header className="bg-blue-600">
            <div className="flex md:flex-row flex-col text-center justify-between p-5 gap-3">
                <Link href="/" className="font-bold font-mono text-white text-2xl">IndAnimeList</Link>
                <input placeholder="Cari Anime.." />
            </div>
        </header>
    )
}

export default NavBar