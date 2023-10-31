import {FaSearch} from "react-icons/fa";
import {Dispatch, SetStateAction} from "react";
import {useApi} from "../../context/apiDataprovider.tsx";

type setSearchResultsProps = {
    input : string,
    setInput : Dispatch<SetStateAction<string>>
}

export function SearchBar({ input, setInput} : setSearchResultsProps){

    const { SearchPicture  } = useApi();


    function handleSearchData(value : string){
        setInput(value)
        console.log(value);
        SearchPicture(value);
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