import { useEffect } from "react"

export const ImageSearch = ({ search, setSearch , SearchImage}) => {

    const handleSearch = () => {
        if(search.trim() !== ""){
            SearchImage(search)
        }
        else{
            SearchImage()
        }
    }
   
    useEffect(() => {
        handleSearch();
    }, [search])

  

    // SHA256:x4oZa2ZaA2xN21ZKkhscshQV4yrVoELnFSDS1DT4aPI shakilgaha786@gmail.com


    return (
        <div className="w-screen max-w-[90rem] pb-6 div-center " >
            <input type="text"
                name="Search"
                placeholder="Search Image Here"
                autoComplete="off"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className= " dark1 px-3 py-2 rounded-md outline-none w-[20rem] md:w-[25rem] max-w-[30rem] shadow-md dark:border dark:border-gray-700 dark:shadow-none"
            />

        </div>
    )
}