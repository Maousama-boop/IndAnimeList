const Pagination = ({ page, lastPage, setPage}) => {

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
    }
    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
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