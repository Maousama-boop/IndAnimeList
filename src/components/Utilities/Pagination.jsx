import { CaretDoubleLeft, CaretDoubleRight, CaretLeft, CaretRight } from "@phosphor-icons/react"

const Pagination = ({ page, lastPage, setPage}) => {

    const scrollAnimation = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollAnimation()
    }
    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollAnimation()
    }
    const handleFirstPage = () => {
        setPage((prevState) => prevState - page + 1)
        scrollAnimation()
    }
    const handleLastPage = () => {
        setPage((prevState) => prevState + lastPage - page)
        scrollAnimation()
    }
    
    
    return (
        <div className="flex justify-center items-center py-4 px-2 text-color-primary">
            {page <= 1 ? null :
                <button onClick={handleFirstPage} className="transition-all hover:text-color-accent"><CaretDoubleLeft size={32} /></button>
            }
            {page <= 1 ? null :
                <button onClick={handlePrevPage} className="transition-all hover:text-color-accent"><CaretLeft size={32} /></button>
            }
            <p className="mx-5">{page} Dari {lastPage}</p>
            {page >= lastPage ? null :
                <button onClick={handleNextPage} className="transition-all hover:text-color-accent"><CaretRight size={32} /></button>
            }
             {page >= lastPage ? null :
                <button onClick={handleLastPage} className="transition-all hover:text-color-accent"><CaretDoubleRight size={32} /></button>
            }
        </div>
    )
}
export default Pagination