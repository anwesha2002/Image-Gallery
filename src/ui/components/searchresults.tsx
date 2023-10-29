import {Gallery} from "../../data/model/gallery.ts";
import "../../style/searchresults.css"
import {useState} from "react";
import {ViewPictureModal} from "./viewPictureModal.tsx";

type searchResultsProps = {
    searchResults : Gallery[]
}
export function SearchResults({searchResults} : searchResultsProps){
     const [clicked , setClicked] = useState<Gallery | null>(null)
    const onPictureClick = ( searchResults :  Gallery ) =>  {
        setClicked(searchResults)
     }

    return(
        <>
            <div className="menu rounded shadow-sm">
                {searchResults.map(desc=>(
                    <div onClick={()=> onPictureClick(desc)} className="menu-item" key={desc.id} >
                        {desc.alt_description}
                    </div>
                ))}
                {clicked &&
                    <ViewPictureModal
                        clicked={clicked}
                        onDismiss={()=>setClicked(null)}
                    />
                }
            </div>
        </>
    )
}