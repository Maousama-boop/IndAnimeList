import Link from "next/link"
import InputSearch from "./inputSearch"

const NavBar = () => {
    return (
        <header className="bg-color-accent text-color-primary">
            <div className="flex md:flex-row flex-col text-center justify-between md:items-center p-5 gap-3">
                <Link href="/" className="font-bold font-mono text-2xl">IndAnimeList</Link>
                <InputSearch/>
            </div>
        </header>
    )
}

export default NavBar