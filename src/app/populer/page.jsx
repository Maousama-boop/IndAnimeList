"use client"

import { useEffect, useState } from "react"
import HeaderPopuler from "../../components/Utilities/HeaderPopuler"
import Pagination from "../../components/Utilities/Pagination"
import IndAnimeList from "../../components/IndAnimeList"
import { getAnimeResponse } from "../libs/api-libs"

const Populer = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async() => {
        const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
        setTopAnime(populerAnime)
    }

    useEffect(() => {
        fetchData()
    }, [page])
    
    return (
        <>
            <HeaderPopuler title={`Anime Populer #${page}`}/>
            <IndAnimeList api={topAnime}/>
            <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/> 
        </>
    )
}

export default Populer