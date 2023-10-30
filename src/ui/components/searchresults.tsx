import {Gallery} from "../../data/model/gallery.ts";
import "../../style/searchresults.css"
import {Dispatch, SetStateAction} from "react";

type searchResultsProps = {
    searchResults : Gallery[],
    setInput  : Dispatch<SetStateAction<string>>
}
export function SearchResults({searchResults, setInput} : searchResultsProps){
    const onPictureClick = (  value :string ) =>  {
        setInput(value);
     }
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