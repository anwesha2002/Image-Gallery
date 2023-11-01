import {FaSearch} from "react-icons/fa";
import {useApi} from "../Context/ImageProvider.tsx";

export function SearchBar(){

    const { searchQuery, setSearchQuery  } = useApi();

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
                        value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}
                    />
                </label>
            </div>
        </>
    )
}