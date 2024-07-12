"use client"

import React, { useEffect, useState } from "react"
import { getAnimeResponse } from "../../../libs/api-libs"
import Pagination from "../../../components/Utilities/Pagination"
import HeaderPopuler from "../../../components/Utilities/HeaderPopuler"
import { IndCharacterList } from "../../../components/IndAnimeList"


const Page = () => {
    const [page, setPage] = useState(1)
    const [topCharacter, setTopCharacter] = useState([])

    const fetchData = async() => {
        const populerCharacter= await getAnimeResponse("top/characters", `page=${page}`)
        setTopCharacter(populerCharacter)
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <>
            <HeaderPopuler title={`Character Populer #${page}`}/>
            <IndCharacterList api={topCharacter} />
            <Pagination page={page} lastPage={topCharacter.pagination?.last_visible_page} setPage={setPage} />
        </>
    )
}

export default Page