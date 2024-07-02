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
    
    return (
        <div className="flex justify-center items-center py-4 px-2 gap-5 text-color-primary">
            <button onClick={handlePrevPage} className="transition-all hover:text-color-accent">Prev</button>
            <p>{page} Dari {lastPage}</p>
            <button onClick={handleNextPage} className="transition-all hover:text-color-accent">Next</button>
        </div>
    )
}
export default Pagination