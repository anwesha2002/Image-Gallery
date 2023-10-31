import "../../style/searchresults.css"
import {Dispatch, SetStateAction} from "react";
import {useApi} from "../../context/apiDataprovider.tsx";

type searchResultsProps = {
    //searchResults : Gallery[],
    setInput  : Dispatch<SetStateAction<string>>
}
export function SearchResults({ setInput} : searchResultsProps){

    const { searchPictureResults } = useApi()
    const onPictureClick = (  value :string ) =>  {
        setInput(value);
     }
     const searchResults = searchPictureResults();

    return(
        <>
            <div className="menu rounded shadow-sm">
                {searchResults.map(desc=>(
                    <div onClick={()=> onPictureClick( desc.alt_description)} className="menu-item" key={desc.id} >
                        {desc.alt_description}
                    </div>
                ))}

            </div>
        </>
    )
}