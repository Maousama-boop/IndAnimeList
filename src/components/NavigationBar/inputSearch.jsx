"use client"

import { MagnifyingGlass, X } from "@phosphor-icons/react"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    const [keyword, setKeyword] = useState("")

    const handleInputChange = (event) => {
        setKeyword(event.target.value)
    }

    const handleSearch = (event) => {
        if (!keyword) return
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }

    const hapusPencarian = () => {
        setKeyword("")
        if (searchRef.current) {
            searchRef.current.value = ""
        }
    }

    return (
        <div className="relative text-color-dark">
            <input 
                placeholder="Cari Anime.." 
                className="w-full p-2 rounded outline-none" 
                ref={searchRef} 
                onKeyDown={handleSearch} 
                onChange={handleInputChange} 
                value={keyword}
            />
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
            {keyword && (
                <button className="absolute top-2 end-10" onClick={hapusPencarian}>
                    <X size={24} />
                </button>
            )}
        </div>
    )
}

export default InputSearch