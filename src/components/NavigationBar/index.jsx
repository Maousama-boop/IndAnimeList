import Link from "next/link"
import InputSearch from "./inputSearch"
import UserButton from "./userButton"

const NavBar = () => {
    return (
        <header className="bg-color-accent text-color-primary sticky top-0 z-10">
            <div className="flex md:flex-row flex-col text-center justify-between md:items-center p-5 gap-3">
                <div className="flex md:justify-start justify-between items-center text-center gap-4">
                    <Link href="/" className="font-bold font-mono text-2xl">IndAnimeList</Link>
                    <UserButton/>
                </div>
                    <InputSearch/>
            </div>
        </header>
    )
}

export default NavBar