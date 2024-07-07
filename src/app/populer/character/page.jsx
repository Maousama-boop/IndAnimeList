"use client"

import { useEffect, useState } from "react"
import HeaderPopuler from "../../../components/Utilities/HeaderPopuler"
import Pagination from "../../../components/Utilities/Pagination"
import { IndCharacterList } from "../../../components/IndAnimeList"
import { getAnimeResponse } from "../../libs/api-libs"

const CharacterPopuler = () => {
    const [page, setPage] = useState(1)
    const [topCharacter, setTopCharacter] = useState([])

    const fetchData = async() => {
        const populerCharacter = await getAnimeResponse("top/characters", `page=${page}`)
        setTopCharacter(populerCharacter)
    }

    useEffect(() => {
        fetchData()
    }, [page])
    
    return (
        <>
            <HeaderPopuler title={`Character Populer #${page}`}/>
            <IndCharacterList api={topCharacter}/>
            <Pagination page={page} lastPage={topCharacter.pagination?.last_visible_page} setPage={setPage}/> 
        </>
    )
}

export default CharacterPopuler