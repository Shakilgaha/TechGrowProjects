import { useState } from "react";
import { getApi } from "../API/Api";
import { useEffect } from "react";
import { ImageDisplay } from "../components/UI/ImageDisplay";
import { ImageSearch } from "../components/UI/ImageSearch";
import { Loader } from "../components/UI/Loader";

export const ImageGallery = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [Searched, setSearched] = useState("");
    const [loading, setLoading] = useState(true)

    //* Fetching Data From An Api
    const fetchData = async () => {
        try {
            const res = await getApi();
            setData(res.data?.photos || []);
            setLoading(false)
            // console.log("data",data)

        } catch (error) {
            setLoading(true)
            console.error('Error fetching data:', error);
        }
    }

    //* Calling Function When page Render First Time
    useEffect(() => {
        fetchData();
    }, []);


    //* Search Image Functionality 
    const SearchImage = () => {
       
        //*If Data Is not Fetched Than Return
        if (!data || data.length === 0) {
            // console.log("No Data Available");
            setLoading(true)
            return;
        }

        //* If Search Is Empty Than SetSearch=Data
        if (search.trim() === "") {
            setSearched(data)
        }

        //* If Search Has Value Than Perform Search
        if (search.trim() !== "") {
            setLoading(false)
            const SearchedData = data.filter((records) => {
                // console.log(records.alt);
                return records.alt?.toLowerCase().includes(search.toLowerCase());
            });
            // console.log("Searched", Searched)
            setSearched(SearchedData);
        }
    }

    //* Call Search Function Whenever The Value Of Search Or Data Are Change
    useEffect(() => {
        SearchImage();
    }, [search, data])

    //* If Loading Is True Than Show Loading
    if (loading) return <Loader />

    return (
        <div className="container div-center my-[6rem] mx-4 py-12 px-6 gap-4 text-white">
            <section>
                <ImageSearch
                    search={search}
                    setSearch={setSearch}
                    SearchImage={SearchImage}
                />
            </section>

            <section>
                <ul className="columns-2 md:columns-3 gap-5 ">
                    {
                        Searched && (
                            Searched.map((curElem) => {
                                return (
                                    <ImageDisplay
                                        curElem={curElem}
                                        key={curElem.id}
                                    />
                                )
                            })
                        )
                    }

                </ul>

            </section>

        </div>

    )

}
