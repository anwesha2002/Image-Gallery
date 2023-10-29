import {FaSearch} from "react-icons/fa";
import {Dispatch, SetStateAction, useState} from "react";
import {Gallery} from "../../data/model/gallery.ts";
import {useFetchData} from "../../data/remote/api.ts";

type setSearchResultsProps = {
    setSearchResults : Dispatch<SetStateAction<Gallery[]>>
}

export function SearchBar({setSearchResults} : setSearchResultsProps){
    const [input, setInput] = useState("");
    const [data] = useFetchData<Gallery[]>([]);

    const DebouncingData = (value : string) => {
        const result = data.filter(item =>{
            return value && item && item.alt_description && item.alt_description.toLowerCase().includes(value);
        })
        setSearchResults(result);
        console.log(result)
    }
    function handleDebouncingData(value : string){
        setInput(value);
        DebouncingData(value);
    }

    return(
        <>
            <div >
                <label htmlFor="search-form" className="input-wrapper d-flex justify-content-center align-items-center shadow-sm p-3 w-100">
                    <FaSearch id="search-icon"/>
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="search-input w-100 fs-5 ms-3"
                        placeholder="search for...."
                        value={input} onChange={(e)=> handleDebouncingData(e.target.value)}
                    />
                </label>
            </div>
        </>
    )
}