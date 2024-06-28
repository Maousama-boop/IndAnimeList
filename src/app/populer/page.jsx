"use client"

import { useEffect, useState } from "react"
import HeaderPopuler from "../../components/Utilities/HeaderPopuler"
import Pagination from "../../components/Utilities/Pagination"
import IndAnimeList from "../../components/IndAnimeList"

const Populer = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async() => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
        const data = await response.json()
        setTopAnime(data)
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