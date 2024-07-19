"use client"

import { MagnifyingGlass, X } from "@phosphor-icons/react"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    const [keyword, setKeyword] = useState("")
    const [searchType, setSearchType] = useState("anime")

    const handleInputChange = (event) => {
        setKeyword(event.target.value)
    }

    const handleSearch = (event) => {
        if (!keyword || keyword.trim() == "") return
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${searchType}/${keyword}`)
        }
    }

    const hapusPencarian = () => {
        setKeyword("")
        if (searchRef.current) {
            searchRef.current.value = ""
        }
    }

    const handleSearchTypeChange = (type) => {
        setSearchType(type)
    }

    return (
        <div className="relative text-color-dark bg-color-primary rounded">
            <div className="flex">
                <div className="relative border-r-2 border-color-dark">
                    <button className="p-2 rounded-l" onClick={() => handleSearchTypeChange(searchType === "anime" ? "character" : "anime")}>
                        {searchType === "anime" ? "Anime" : "Character"}
                    </button>
                    <div className="absolute top-12 left-0 w-full bg-white shadow-md rounded hidden">
                        <button className="w-full text-left p-2" onClick={() => handleSearchTypeChange("anime")}>Anime</button>
                        <button className="w-full text-left p-2" onClick={() => handleSearchTypeChange("character")}>Character</button>
                    </div>
                </div>
                <input 
                    placeholder={`Cari ${searchType.charAt(0).toUpperCase() + searchType.slice(1)}...`} 
                    className="w-full p-2 outline-none bg-color-primary rounded" 
                    ref={searchRef} 
                    onKeyDown={handleSearch} 
                    onChange={handleInputChange} 
                    value={keyword}
                />
            <button className="mr-3" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
            {keyword && (
                <button className="top-2 end-11 bg-color-primary" onClick={hapusPencarian}>
                    <X size={24} />
                </button>
            )}
            </div>
        </div>
    )
}

export default InputSearch