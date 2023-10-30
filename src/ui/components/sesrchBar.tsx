import {FaSearch} from "react-icons/fa";
import {Dispatch, SetStateAction} from "react";
import {Gallery} from "../../data/model/gallery.ts";
import {useFetchData} from "../../data/remote/api.ts";

type setSearchResultsProps = {
    setSearchResults : Dispatch<SetStateAction<Gallery[]>>,
    input : string,
    setInput : Dispatch<SetStateAction<string>>
}

export function SearchBar({setSearchResults, input, setInput} : setSearchResultsProps){
    const [data] = useFetchData<Gallery[]>([]);

    const SearchedData = (value : string) => {
        const result = data.filter(item =>{
            return value && item && item.alt_description && item.alt_description.toLowerCase().includes(value);
        })
        setSearchResults(result)
        console.log(result)
    }
    function handleSearchData(value : string){
        setInput(value)
        SearchedData(value);
    }
    /*function debounce(cb , delay = 1000){
        let timeout :  NodeJS.Timeout;
        return(...args : boolean[]  ) => {
            clearTimeout(timeout)
            timeout = setTimeout(()=>{
                cb(...args)
            },delay)
        }
    }*/

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
                        value={input} onChange={(e)=> handleSearchData(e.target.value)}
                    />
                </label>
            </div>
        </>
    )
}